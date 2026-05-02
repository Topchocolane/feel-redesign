import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg-alt/40">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-display text-3xl tracking-[0.2em] text-ink"
            >
              FEEL
              <span className="ml-3 text-bronze">·</span>
              <span className="ml-3 text-sm tracking-[0.3em] text-ink-soft">
                車體工藝
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-loose text-ink-soft">
              專注於每一處細節，以工藝級的態度為您的愛車服務。
              <br />
              我們相信，極致的呵護源自對品質的堅持。
            </p>
            <div className="mt-10 font-display text-[11px] tracking-[0.4em] text-bronze">
              FOCUS · DETAIL · FEEL
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-[10px] uppercase tracking-[0.4em] text-bronze">
              Navigation
            </h4>
            <ul className="mt-6 space-y-4">
              {[
                { href: "/", label: "首頁" },
                { href: "/service", label: "服務項目" },
                { href: "/about", label: "關於我們" },
                { href: "/contact", label: "聯絡我們" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm tracking-widest text-ink-soft hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display text-[10px] uppercase tracking-[0.4em] text-bronze">
              Contact
            </h4>
            <dl className="mt-6 space-y-4 text-sm tracking-wider text-ink-soft">
              <div>
                <dt className="text-[10px] tracking-[0.3em] text-ink-muted">
                  服務專線
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:0916969531"
                    className="font-display text-xl tracking-wider text-ink hover:text-bronze transition-colors"
                  >
                    0916–969–531
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.3em] text-ink-muted">
                  營業時間
                </dt>
                <dd className="mt-1">09:00 — 19:00 ／週一公休</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.3em] text-ink-muted">
                  服務地址
                </dt>
                <dd className="mt-1 leading-relaxed">
                  406 台中市北屯區
                  <br />
                  崇德八路一段 199 號
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-[10px] tracking-[0.3em] text-ink-muted">
            © 2026 FEEL CAR ATELIER · ALL RIGHTS RESERVED
          </p>
          <p className="text-[10px] tracking-[0.3em] text-ink-muted">
            CRAFTED IN TAICHUNG
          </p>
        </div>
      </div>
    </footer>
  );
}
