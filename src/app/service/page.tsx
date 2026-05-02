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
      {/* INTRO */}
      <section className="border-b border-line bg-bg pt-40 pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="font-display text-[11px] tracking-[0.5em] text-bronze">
                — SERVICE
              </p>
              <h1 className="mt-8 font-display text-6xl leading-[0.95] tracking-tight text-ink lg:text-8xl">
                Six crafts.
                <br />
                <em className="not-italic text-bronze">One feeling.</em>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
              <p className="text-lg leading-loose text-ink-soft">
                從手工洗車到完整鍍膜方案，我們將每一道工序視為一次對品質的對話。
              </p>
              <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                以下六項服務皆由技師親自評估，依照車況與您的需求量身搭配。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      <section className="bg-bg">
        {SERVICES.map((s, idx) => (
          <article
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 border-b border-line py-32 ${
              idx % 2 === 1 ? "bg-bg-alt/30" : ""
            }`}
          >
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
              <div className="grid gap-16 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="sticky top-32">
                    <p className="font-display text-[11px] tracking-[0.5em] text-bronze">
                      {s.number} — {s.en.toUpperCase()}
                    </p>
                    <h2 className="mt-8 font-display text-5xl leading-tight tracking-wide text-ink lg:text-6xl">
                      {s.title}
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-ink-soft">
                      {s.tagline}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="text-lg leading-loose text-ink-soft">
                    {s.description}
                  </p>

                  <div className="mt-12 border-t border-line pt-8">
                    <p className="font-display text-[10px] tracking-[0.4em] text-bronze">
                      INCLUDES
                    </p>
                    <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
                      {s.details.map((d, i) => (
                        <li
                          key={d}
                          className="flex items-baseline gap-3 text-sm tracking-wider text-ink"
                        >
                          <span className="font-display text-[10px] text-bronze">
                            ／{String(i + 1).padStart(2, "0")}
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-12 flex flex-wrap items-center gap-6">
                    <a
                      href="https://line.me/R/ti/p/@510urlbi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-4 bg-ink px-8 py-4 text-[11px] tracking-[0.4em] text-bg transition-all hover:bg-bronze"
                    >
                      立即預約
                      <span className="font-display transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                    <a
                      href="tel:0916969531"
                      className="text-[11px] tracking-[0.4em] text-ink-soft hover:text-ink"
                    >
                      或來電 0916–969–531
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA STRIP */}
      <section className="bg-ink py-24 text-bg">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <h3 className="font-display text-3xl tracking-wide lg:text-4xl">
              不確定哪項服務適合您？
            </h3>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 border border-bronze px-8 py-4 text-[11px] tracking-[0.4em] text-bronze-soft transition-all hover:bg-bronze hover:text-bg"
            >
              聯繫技師諮詢
              <span className="font-display transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
