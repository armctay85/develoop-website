"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { companyInfo } from "@/lib/data";
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, this would send to your API
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="section">
          <div className="section-inner">
            <FadeIn className="max-w-3xl">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                Contact
              </p>
              <h1 className="text-display-lg text-foreground mb-6">
                Let&apos;s discuss your project
              </h1>
              <p className="text-body-lg text-foreground-secondary">
                Ready to simplify your retail development? Get in touch to schedule 
                a consultation or learn more about how we can help.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-background-secondary">
          <div className="section-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <FadeIn>
                <div className="space-y-8">
                  <h2 className="text-display-sm text-foreground mb-8">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Email</p>
                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="text-body-sm text-foreground-muted hover:text-accent transition-colors"
                        >
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Location</p>
                        <p className="text-body-sm text-foreground-muted">Australia</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Response Time</p>
                        <p className="text-body-sm text-foreground-muted">Within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-background-elevated border border-border rounded-lg mt-8">
                    <h3 className="text-lg font-medium text-foreground mb-4">Schedule a Call</h3>
                    <p className="text-body-sm text-foreground-muted mb-4">
                      Prefer to book a time directly? Use our Calendly integration 
                      to find a time that works for you.
                    </p>
                    <a
                      href="#"
                      className="btn-secondary text-xs w-full justify-center"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Calendly integration placeholder - configure with your Calendly link");
                      }}
                    >
                      Book a Time (Calendly)
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Contact Form */}
              <FadeIn delay={0.2}>
                <div className="bg-background-elevated border border-border rounded-lg p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-serif text-foreground mb-4">Message Sent!</h3>
                      <p className="text-body-sm text-foreground-muted">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register("name")}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" /> {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email")}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="you@company.com"
                        />
                        {errors.email && (
                          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" /> {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          {...register("company")}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="Your company"
                        />
                        {errors.company && (
                          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" /> {errors.company.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          {...register("message")}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                          placeholder="Tell us about your project..."
                        />
                        {errors.message && (
                          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" /> {errors.message.message}
                          </p>
                        )}
                      </div>

                      {submitError && (
                        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                          <p className="text-sm text-red-500">{submitError}</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-foreground-subtle text-center">
                        We respect your privacy. Your information will never be shared.
                      </p>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
