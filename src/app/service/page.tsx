import Link from "next/link";
import { SERVICES } from "@/lib/services";

export const metadata = {
  title: "服務項目 — FEEL 車體工藝",
  description:
    "FEEL 車體工藝提供六項專業服務：汽車美容、車體鍍膜、洗車、汽車包膜、影音改裝、內裝清潔。",
};

export default function ServicePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-bg pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 diag-stripes opacity-30" />
        <div className="pointer-events-none absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-orange/15 blur-[160px]" />

        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-orange">
              /// 02 — SERVICE
            </span>
            <span className="h-px w-16 bg-orange" />
          </div>

          <h1 className="font-display text-7xl leading-[0.85] tracking-wider text-ink lg:text-9xl">
            SIX CRAFTS.
            <br />
            <span className="text-orange">ONE FEELING.</span>
          </h1>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-base leading-relaxed text-ink-soft">
                從手工洗車到完整鍍膜方案，我們將每一道工序視為一次對品質的對話。
                以下六項服務皆由技師親自評估，依照車況與你的需求量身搭配。
              </p>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <div className="border-l-2 border-orange pl-4">
                <div className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
                  COUNT
                </div>
                <div className="font-display text-5xl text-orange leading-none mt-2">
                  06
                </div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-ink-muted mt-1">
                  PROFESSIONAL CRAFTS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="bg-bg">
        {SERVICES.map((s, idx) => (
          <article
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 border-b border-line py-24 ${
              idx % 2 === 1 ? "bg-bg-elev" : ""
            }`}
          >
            <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-12">
                {/* LEFT: Sticky title */}
                <div className="lg:col-span-5">
                  <div className="sticky top-28">
                    {/* Number bib */}
                    <div className="flex items-center gap-4">
                      <span className="font-display text-[10rem] leading-none text-orange">
                        {s.number}
                      </span>
                      <div className="space-y-1">
                        <div className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
                          // {s.en.toUpperCase().replace(/\s/g, "_")}
                        </div>
                        <div className="h-px w-12 bg-orange" />
                      </div>
                    </div>

                    <h2 className="mt-8 text-5xl font-black tracking-widest text-ink lg:text-6xl">
                      {s.title}
                    </h2>
                    <p className="mt-4 font-display text-2xl tracking-[0.2em] text-ink-soft">
                      {s.en.toUpperCase()}
                    </p>
                    <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted">
                      {s.tagline}
                    </p>
                  </div>
                </div>

                {/* RIGHT: Description + INCLUDES + CTA */}
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="text-lg leading-relaxed text-ink-soft">
                    {s.description}
                  </p>

                  {/* INCLUDES grid */}
                  <div className="mt-12 border-t border-line pt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-orange">
                        // INCLUDES
                      </span>
                      <span className="h-px flex-1 bg-line" />
                    </div>
                    <ul className="grid grid-cols-2 gap-px bg-line">
                      {s.details.map((d, i) => (
                        <li
                          key={d}
                          className="bg-bg p-5 flex items-baseline gap-3"
                        >
                          <span className="font-mono text-[10px] text-orange">
                            /{String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm tracking-wider text-ink">
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a
                      href="https://line.me/R/ti/p/@510urlbi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-orange px-7 py-3.5 font-display text-sm tracking-wider text-bg hover:bg-orange-glow transition-colors"
                    >
                      <span className="h-1.5 w-1.5 bg-bg blink" />
                      BOOK THIS SERVICE
                    </a>
                    <a
                      href="tel:0916969531"
                      className="font-mono text-xs tracking-[0.2em] text-ink-soft hover:text-orange transition-colors"
                    >
                      OR CALL 0916.969.531
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA STRIP */}
      <section className="border-t border-line bg-bg-elev py-16">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="font-mono text-[10px] tracking-[0.4em] text-orange">
                // NEED HELP
              </div>
              <h3 className="mt-4 font-display text-4xl tracking-wider lg:text-5xl">
                不確定哪項適合你？
              </h3>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-orange bg-orange/5 px-8 py-4 font-display text-base tracking-wider text-orange hover:bg-orange hover:text-bg transition-colors"
            >
              ASK A SPECIALIST <span className="font-mono">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
