export const metadata = {
  title: "聯絡我們 — FEEL 車體工藝",
  description:
    "FEEL 車體工藝服務專線：0916-969531，地址：台中市北屯區崇德八路一段199號。歡迎來電預約。",
};

const ADDRESS = "406台中市北屯區崇德八路一段199號";
const MAP_QUERY = encodeURIComponent(ADDRESS);

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-bg pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 diag-stripes opacity-30" />
        <div className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-orange/15 blur-[160px]" />

        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-orange">
              /// 04 — CONTACT
            </span>
            <span className="h-px w-16 bg-orange" />
          </div>

          <h1 className="font-display text-7xl leading-[0.85] tracking-wider text-ink lg:text-9xl">
            LET&apos;S
            <br />
            <span className="text-orange">TALK CARS.</span>
          </h1>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-ink-soft">
            所有預約皆由技師親自評估與報價。挑你最方便的方式，我們在工坊等你。
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-bg py-20">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="grid gap-px bg-line lg:grid-cols-3">
            {/* CALL */}
            <a
              href="tel:0916969531"
              className="group relative block bg-bg p-10 hover:bg-bg-card transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-6xl text-orange leading-none">
                  01
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
                  // CALL
                </span>
              </div>
              <h3 className="mt-12 font-display text-4xl tracking-wider text-ink group-hover:text-orange transition-colors lg:text-5xl">
                0916.969.531
              </h3>
              <p className="mt-3 text-sm tracking-wider text-ink-soft">
                服務專線 / 09:00 — 19:00
              </p>
              <div className="mt-12 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-ink-muted group-hover:text-orange transition-colors">
                <span className="h-px w-8 bg-current" />
                CALL NOW →
              </div>

              {/* Bottom stripe */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>

            {/* LINE */}
            <a
              href="https://line.me/R/ti/p/@510urlbi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-bg p-10 hover:bg-bg-card transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-6xl text-orange leading-none">
                  02
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
                  // LINE
                </span>
              </div>
              <h3 className="mt-12 font-display text-4xl tracking-wider text-ink group-hover:text-orange transition-colors lg:text-5xl">
                @510URLBI
              </h3>
              <p className="mt-3 text-sm tracking-wider text-ink-soft">
                線上預約 / 24H 訊息
              </p>
              <div className="mt-12 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-ink-muted group-hover:text-orange transition-colors">
                <span className="h-px w-8 bg-current" />
                ADD FRIEND →
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>

            {/* VISIT */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-bg p-10 hover:bg-bg-card transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-6xl text-orange leading-none">
                  03
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
                  // VISIT
                </span>
              </div>
              <h3 className="mt-12 text-2xl leading-relaxed font-extrabold tracking-widest text-ink group-hover:text-orange transition-colors lg:text-3xl">
                台中市北屯區
                <br />
                崇德八路一段 199 號
              </h3>
              <p className="mt-3 text-sm tracking-wider text-ink-soft">
                親臨工坊 / 週一公休
              </p>
              <div className="mt-12 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-ink-muted group-hover:text-orange transition-colors">
                <span className="h-px w-8 bg-current" />
                GOOGLE MAPS →
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </section>

      {/* HOURS + MAP */}
      <section className="border-t border-line bg-bg-elev py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-[10px] tracking-[0.4em] text-orange">
                // HOURS
              </div>
              <h2 className="mt-6 font-display text-5xl tracking-wider text-ink lg:text-6xl">
                OPEN.
              </h2>

              <dl className="mt-10 space-y-4 border-t border-line pt-8">
                <div className="flex items-baseline justify-between border-b border-line pb-4">
                  <dt className="font-mono text-xs tracking-[0.2em] text-ink-soft">
                    TUE — SUN
                  </dt>
                  <dd className="font-display text-2xl tracking-wider text-ink">
                    09:00 — 19:00
                  </dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-line pb-4">
                  <dt className="font-mono text-xs tracking-[0.2em] text-ink-soft">
                    MON
                  </dt>
                  <dd className="font-display text-2xl tracking-wider text-orange">
                    CLOSED
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-sm leading-relaxed text-ink-muted">
                為提供完整服務體驗，請務必提前預約。
                <br />
                走進工坊前，先一通電話確保技師已為你騰出時間。
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="font-mono text-[10px] tracking-[0.4em] text-orange">
                // LOCATION
              </div>
              <div className="mt-6 aspect-[16/10] overflow-hidden border border-line bg-bg-card">
                <iframe
                  title="FEEL 車體工藝 地圖"
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) contrast(0.9) saturate(0.6)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
