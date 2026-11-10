import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { navItems } from "@/lib/content";
import { estimateHqUrl } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="container-page grid gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link href="/" className="inline-flex min-h-11 items-center rounded-sm">
            <Logo size="md" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground-muted">
            Consultant-led design, delivery and development advisory for teams scaling a rollout of sites.
          </p>
        </div>

        <nav className="lg:col-span-3" aria-label="Footer">
          <h2 className="font-sans text-sm font-medium tracking-normal text-foreground">Explore</h2>
          <ul className="mt-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 w-full items-center text-sm text-foreground-muted hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="font-sans text-sm font-medium tracking-normal text-foreground">Start</h2>
          <ul className="mt-3">
            <li>
              <Link href="/contact" className="flex min-h-11 w-full items-center text-sm text-foreground-muted hover:text-accent">
                Book a call
              </Link>
            </li>
            <li>
              <a
                href={estimateHqUrl}
                className="flex min-h-11 w-full items-center text-sm text-foreground-muted hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Estimate HQ
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <Link href="/privacy" className="flex min-h-11 w-full items-center text-sm text-foreground-muted hover:text-accent">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="flex min-h-11 w-full items-center text-sm text-foreground-muted hover:text-accent">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground-muted">© {year} Develoop. All rights reserved.</p>
          <p className="text-sm text-foreground-muted">Advisory and coaching. Australia.</p>
        </div>
      </div>
    </footer>
  );
}
