"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname === `${href}/`;
}

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <Link href="/" className="min-h-11 min-w-11 shrink-0 rounded-sm" aria-label="Develoop, home">
          <Logo size="sm" className="sm:hidden" />
          <Logo size="md" className="hidden sm:flex" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center px-3 text-sm text-foreground-muted hover:text-foreground",
                isCurrent(pathname, item.href) && "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-3">
            Book a call
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="relative block h-4 w-4">
            <span
              className="absolute left-0 h-px w-4 bg-current"
              style={{ top: "50%", transform: open ? "translateY(-50%) rotate(45deg)" : "translateY(-6px)" }}
            />
            <span
              className="absolute left-0 h-px w-4 bg-current"
              style={{ top: "50%", transform: "translateY(-50%)", opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 h-px w-4 bg-current"
              style={{ top: "50%", transform: open ? "translateY(-50%) rotate(-45deg)" : "translateY(5px)" }}
            />
          </span>
        </button>
      </div>
    </header>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <ul className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                  className="flex min-h-11 items-center text-lg text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link href="/contact" className="btn-primary w-full">
                Book a call
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}
