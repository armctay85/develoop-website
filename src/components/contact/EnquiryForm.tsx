"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { budgetOptions, enquirySchema, fieldErrorsFromZod, siteVolumeOptions } from "@/lib/enquiry";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "min-h-12 w-full min-w-0 rounded-sm border border-border-light bg-background px-3 text-base text-foreground placeholder:text-foreground-subtle";

export function EnquiryForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = enquirySchema.safeParse(data);

    if (!parsed.success) {
      const errors = fieldErrorsFromZod(parsed.error);
      setFieldErrors(errors);
      setMessage("Check the fields below and try again.");
      setStatus("error");
      const first = Object.keys(errors)[0];
      if (first) {
        form.querySelector<HTMLElement>(`#${CSS.escape(first)}`)?.focus();
      }
      return;
    }

    setStatus("submitting");
    setFieldErrors({});
    setMessage("");

    try {
      const response = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...parsed.data, website: typeof data.website === "string" ? data.website : "" }),
      });
      const body = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: Record<string, string>;
      } | null;

      if (response.ok && body?.ok) {
        setStatus("success");
        return;
      }

      if (body?.fieldErrors) {
        setFieldErrors(body.fieldErrors);
        setMessage("Check the fields below and try again.");
        setStatus("error");
        return;
      }

      setMessage(body?.message || "We could not send that just now. Please try again shortly.");
      setStatus("error");
    } catch {
      setMessage("We could not send that just now. Please try again shortly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" data-testid="enquiry-success" className="border border-border bg-background-secondary p-6 sm:p-10">
        <p className="text-eyebrow">Received</p>
        <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground sm:text-4xl">
          Thank you. We have your enquiry.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
          We will be in touch to arrange a call. The prices on this site are starting points. The conversation is about fit.
        </p>
        <Link href="/" className="btn-secondary mt-8">
          Back to the home page
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      data-testid="enquiry-form"
      className="relative border border-border bg-background-secondary p-5 sm:p-8"
    >
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden [clip-path:inset(50%)]">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="name" label="Name" type="text" autoComplete="name" error={fieldErrors.name} />
        <TextField id="email" label="Email" type="email" autoComplete="email" error={fieldErrors.email} />
        <TextField id="company" label="Company" type="text" autoComplete="organization" error={fieldErrors.company} />
        <TextField id="role" label="Role" type="text" autoComplete="organization-title" error={fieldErrors.role} />
        <SelectField
          id="sitesPerYear"
          label="Sites per year"
          placeholder="Select a range"
          options={siteVolumeOptions}
          error={fieldErrors.sitesPerYear}
        />
        <SelectField
          id="budget"
          label="Budget band"
          placeholder="Select a band"
          options={budgetOptions}
          error={fieldErrors.budget}
        />
      </div>

      <div className="mt-5">
        <div className="flex min-w-0 flex-col gap-2">
          <label htmlFor="pain" className="text-sm font-medium text-foreground">
            Biggest delivery pain
          </label>
          <p id="pain-hint" className="text-sm leading-relaxed text-foreground-muted">
            Stages, handoffs, tools, decisions, or whatever is slowing the rollout.
          </p>
          <textarea
            id="pain"
            name="pain"
            required
            aria-required="true"
            rows={6}
            aria-invalid={fieldErrors.pain ? true : undefined}
            aria-describedby={fieldErrors.pain ? "pain-hint pain-error" : "pain-hint"}
            className={cn(inputClass, "min-h-36 py-3")}
          />
          {fieldErrors.pain ? (
            <p id="pain-error" role="alert" className="text-sm text-[#f0c2b8]">
              {fieldErrors.pain}
            </p>
          ) : null}
        </div>
      </div>

      {message ? (
        <p id={`${formId}-status`} role="alert" className="mt-5 text-sm text-[#f0c2b8]">
          {message}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col items-start gap-3">
        <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending" : "Send enquiry"}
        </button>
        <p className="text-sm leading-relaxed text-foreground-muted">Used only to reply to your enquiry.</p>
        <Link href="/privacy" className="inline-flex min-h-11 items-center text-sm text-foreground underline decoration-border-light underline-offset-4 hover:text-accent">
          Privacy
        </Link>
      </div>
    </form>
  );
}

function TextField({
  id,
  label,
  type,
  autoComplete,
  error,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete: string;
  error?: string;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required
        aria-required="true"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-[#f0c2b8]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  placeholder,
  options,
  error,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  error?: string;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <select
        id={id}
        name={id}
        defaultValue=""
        required
        aria-required="true"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-[#f0c2b8]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
