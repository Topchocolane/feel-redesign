"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "首頁", en: "HOME", num: "01" },
  { href: "/service", label: "服務", en: "SERVICE", num: "02" },
  { href: "/about", label: "關於", en: "ABOUT", num: "03" },
  { href: "/contact", label: "聯絡", en: "CONTACT", num: "04" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="flex items-baseline gap-3 group"
          aria-label="FEEL 車體工藝"
        >
          <span className="font-display text-3xl tracking-wider text-ink group-hover:text-orange transition-colors">
            FEEL
          </span>
          <span className="hidden sm:inline-block h-3 w-px bg-orange" />
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-[0.3em] text-ink-muted">
            CAR / GARAGE
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-2 px-4 py-2 transition-colors ${
                      active ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-orange">
                      {item.num}
                    </span>
                    <span className="font-display text-sm tracking-wider">
                      {item.en}
                    </span>
                    {active && (
                      <span className="absolute -bottom-1 left-4 right-4 h-px bg-orange" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="https://line.me/R/ti/p/@510urlbi"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-3 bg-orange px-5 py-2.5 font-display text-sm tracking-wider text-bg hover:bg-orange-glow transition-colors"
        >
          <span className="h-1.5 w-1.5 bg-bg blink" />
          BOOK NOW
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          aria-label="開啟選單"
        >
          <span
            className={`h-0.5 w-7 bg-ink transition-all ${
              open ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-7 bg-orange transition-all ${
              open ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg-elev">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between border-b border-line px-6 py-5"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-orange">
                      {item.num}
                    </span>
                    <span className="font-display text-xl tracking-wider">
                      {item.en}
                    </span>
                  </span>
                  <span className="text-sm text-ink-muted">{item.label}</span>
                </Link>
              </li>
            ))}
            <li className="px-6 py-5">
              <a
                href="https://line.me/R/ti/p/@510urlbi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-orange px-5 py-3 font-display text-base tracking-wider text-bg"
              >
                <span className="h-2 w-2 bg-bg blink" />
                BOOK NOW
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
