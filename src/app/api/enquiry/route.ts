import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema, enquiryText, fieldErrorsFromZod, oneLine, readMailConfig } from "@/lib/enquiry";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 20_000;

function json(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  const ip = clientIp(request);

  if (!rateLimit(ip)) {
    return json(
      {
        ok: false,
        message: "Too many enquiries from this network. Please wait a little while and try again.",
      },
      429,
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ ok: false, message: "Send the enquiry as JSON." }, 415);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json({ ok: false, message: "That enquiry is too long." }, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return json({ ok: false, message: "We could not read that submission." }, 400);
  }

  if (!payload || typeof payload !== "object") {
    return json({ ok: false, message: "We could not read that submission." }, 400);
  }

  const record = payload as Record<string, unknown>;
  const honeypot = typeof record.website === "string" ? record.website.trim() : "";
  if (honeypot) {
    console.info("[enquiry] honeypot filled, ignored");
    return json({ ok: true });
  }

  const parsed = enquirySchema.safeParse(record);
  if (!parsed.success) {
    return json({ ok: false, fieldErrors: fieldErrorsFromZod(parsed.error) }, 400);
  }

  const enquiry = parsed.data;
  const text = enquiryText(enquiry);
  const config = readMailConfig();

  if (!config) {
    console.info("[enquiry] mail is not configured. Enquiry logged only.", {
      name: enquiry.name,
      email: enquiry.email,
      company: enquiry.company,
      role: enquiry.role,
      sitesPerYear: enquiry.sitesPerYear,
      budget: enquiry.budget,
      pain: enquiry.pain,
    });
    return json({ ok: true });
  }

  const resend = new Resend(config.apiKey);
  const idempotencyKey = createHash("sha256").update(text).digest("hex");
  const { error } = await resend.emails.send(
    {
      from: config.from,
      to: config.to,
      replyTo: enquiry.email,
      subject: `Develoop enquiry: ${oneLine(enquiry.company).slice(0, 120)}`,
      text,
    },
    { idempotencyKey },
  );

  if (error) {
    console.error("[enquiry] send failed", { name: error.name, message: error.message });
    return json(
      { ok: false, message: "We could not send that just now. Please try again shortly." },
      502,
    );
  }

  console.info("[enquiry] sent", { company: enquiry.company });
  return json({ ok: true });
}
