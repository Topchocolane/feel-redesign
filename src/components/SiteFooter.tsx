import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg-elev">
      {/* TAPE STRIP */}
      <div className="h-2 tape" />

      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-baseline gap-3">
              <span className="font-display text-5xl tracking-wider text-ink">
                FEEL
              </span>
              <span className="h-4 w-px bg-orange" />
              <span className="font-mono text-xs tracking-[0.3em] text-ink-muted">
                CAR / GARAGE
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
              我們不只是洗車。我們把每一台進場的車當作賽道上的戰友——
              從輪框到引擎艙，每一道工序都是為了把你帶回那個第一次握上方向盤的瞬間。
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-[0.4em] text-orange">
                FOCUS
              </span>
              <span className="h-px w-4 bg-line" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-orange">
                DETAIL
              </span>
              <span className="h-px w-4 bg-line" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-orange">
                FEEL
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono text-[10px] tracking-[0.4em] text-ink-muted">
              // NAV
            </h4>
            <ul className="mt-6 space-y-3">
              {[
                { href: "/", num: "01", label: "HOME / 首頁" },
                { href: "/service", num: "02", label: "SERVICE / 服務" },
                { href: "/about", num: "03", label: "ABOUT / 關於" },
                { href: "/contact", num: "04", label: "CONTACT / 聯絡" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline gap-3 text-sm text-ink-soft hover:text-ink transition-colors"
                  >
                    <span className="font-mono text-[10px] text-orange">
                      {item.num}
                    </span>
                    <span className="tracking-wider">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-mono text-[10px] tracking-[0.4em] text-ink-muted">
              // CONTACT
            </h4>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
                  CALL
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:0916969531"
                    className="font-display text-3xl tracking-wider text-ink hover:text-orange transition-colors"
                  >
                    0916.969.531
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
                  HOURS
                </dt>
                <dd className="mt-1 text-sm text-ink-soft">
                  09:00 — 19:00 / MON OFF
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
                  GARAGE
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                  406 台中市北屯區
                  <br />
                  崇德八路一段 199 號
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
            © 2026 FEEL CAR GARAGE / ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
            BUILT IN TAICHUNG / TAIWAN
          </p>
        </div>
      </div>
    </footer>
  );
}
