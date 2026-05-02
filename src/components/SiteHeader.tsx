"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "首頁", en: "Home" },
  { href: "/service", label: "服務項目", en: "Service" },
  { href: "/about", label: "關於我們", en: "About" },
  { href: "/contact", label: "聯絡我們", en: "Contact" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        <Link
          href="/"
          className="font-display text-xl tracking-[0.3em] text-ink"
          aria-label="FEEL 車體工藝"
        >
          FEEL
          <span className="ml-2 text-bronze">·</span>
          <span className="ml-2 text-[10px] tracking-[0.4em] text-ink-muted">
            車體工藝
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative inline-flex flex-col items-center text-[11px] tracking-[0.3em] transition-colors ${
                      active ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    <span className="font-display text-[10px] uppercase tracking-[0.4em] text-bronze">
                      {item.en}
                    </span>
                    <span className="mt-1">{item.label}</span>
                    <span
                      className={`absolute -bottom-2 h-px bg-bronze transition-all duration-500 ${
                        active ? "w-6" : "w-0 group-hover:w-6"
                      }`}
                    />
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
          className="hidden md:inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-[10px] tracking-[0.3em] text-ink hover:bg-ink hover:text-bg transition-all duration-500"
        >
          立即預約
          <span className="font-display">→</span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          aria-label="開啟選單"
        >
          <span
            className={`h-px w-6 bg-ink transition-all ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-baseline justify-between border-b border-line px-6 py-5"
                >
                  <span className="text-sm tracking-[0.3em]">{item.label}</span>
                  <span className="font-display text-xs tracking-[0.3em] text-bronze">
                    {item.en}
                  </span>
                </Link>
              </li>
            ))}
            <li className="px-6 py-5">
              <a
                href="https://line.me/R/ti/p/@510urlbi"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-ink px-5 py-3 text-center text-[10px] tracking-[0.3em]"
              >
                立即預約 →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
