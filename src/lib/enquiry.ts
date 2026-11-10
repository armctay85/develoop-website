import { z } from "zod";

export const siteVolumeValues = ["1-2", "3-5", "6-15", "16+"] as const;
export const budgetValues = ["diagnostic", "module", "systems", "retainer", "unsure"] as const;

export const siteVolumeOptions: { value: (typeof siteVolumeValues)[number]; label: string }[] = [
  { value: "1-2", label: "1 to 2" },
  { value: "3-5", label: "3 to 5" },
  { value: "6-15", label: "6 to 15" },
  { value: "16+", label: "16 or more" },
];

export const budgetOptions: { value: (typeof budgetValues)[number]; label: string }[] = [
  { value: "diagnostic", label: "Diagnostic, from A$6,500" },
  { value: "module", label: "A systems module, from A$5,000" },
  { value: "systems", label: "Systems build, from A$15,000" },
  { value: "retainer", label: "Retainer, from A$4,000 a month" },
  { value: "unsure", label: "Not sure yet" },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const enquirySchema = z.object({
  name: z
    .string({ error: "Enter your name." })
    .trim()
    .min(2, "Enter your name.")
    .max(120, "Name is too long."),
  email: z
    .string({ error: "Enter your email." })
    .trim()
    .max(200, "Email is too long.")
    .refine((value) => emailPattern.test(value), "Enter a valid email."),
  company: z
    .string({ error: "Enter your company." })
    .trim()
    .min(2, "Enter your company.")
    .max(160, "Company name is too long."),
  role: z
    .string({ error: "Enter your role." })
    .trim()
    .min(2, "Enter your role.")
    .max(120, "Role is too long."),
  sitesPerYear: z.enum(siteVolumeValues, {
    error: "Select how many sites you expect to deliver in a year.",
  }),
  pain: z
    .string({ error: "Tell us about the delivery pain." })
    .trim()
    .min(10, "Tell us a little more about the delivery pain.")
    .max(2000, "Please keep this under 2000 characters."),
  budget: z.enum(budgetValues, {
    error: "Select a budget band.",
  }),
});

export type Enquiry = z.infer<typeof enquirySchema>;

export function fieldErrorsFromZod(error: z.ZodError): Record<string, string> {
  const fieldErrors: Record<string, string> = {};

  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !fieldErrors[key]) {
      fieldErrors[key] = issue.message;
    }
  }

  return fieldErrors;
}

export function labelForSiteVolume(value: Enquiry["sitesPerYear"]): string {
  return siteVolumeOptions.find((option) => option.value === value)?.label ?? value;
}

export function labelForBudget(value: Enquiry["budget"]): string {
  return budgetOptions.find((option) => option.value === value)?.label ?? value;
}

export function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

export function enquiryText(enquiry: Enquiry): string {
  return [
    "New Develoop enquiry",
    "",
    `Name: ${oneLine(enquiry.name)}`,
    `Email: ${oneLine(enquiry.email)}`,
    `Company: ${oneLine(enquiry.company)}`,
    `Role: ${oneLine(enquiry.role)}`,
    `Sites per year: ${labelForSiteVolume(enquiry.sitesPerYear)}`,
    `Budget band: ${labelForBudget(enquiry.budget)}`,
    "",
    "Biggest delivery pain:",
    enquiry.pain.trim(),
  ].join("\n");
}

export type MailConfig = {
  apiKey: string;
  to: string[];
  from: string;
};

function addressInside(value: string): string {
  const wrapped = value.match(/<([^>]+)>/);
  return (wrapped?.[1] ?? value).trim();
}

function plausibleAddress(value: string): boolean {
  return emailPattern.test(addressInside(value));
}

export function readMailConfig(env: NodeJS.ProcessEnv = process.env): MailConfig | null {
  const apiKey = env.RESEND_API_KEY?.trim() ?? "";
  const toRaw = env.ENQUIRY_TO_EMAIL?.trim() ?? "";
  const from = env.ENQUIRY_FROM_EMAIL?.trim() ?? "";

  if (!apiKey || !toRaw || !from) return null;
  if (!plausibleAddress(from)) return null;

  const to = toRaw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (to.length === 0 || to.some((item) => !plausibleAddress(item))) return null;

  return { apiKey, to, from };
}
