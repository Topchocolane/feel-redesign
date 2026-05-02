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
      <section className="border-b border-line bg-bg pt-40 pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-display text-[11px] tracking-[0.5em] text-bronze">
                — CONTACT
              </p>
              <h1 className="mt-8 font-display text-6xl leading-[0.95] tracking-tight text-ink lg:text-8xl">
                Let&apos;s
                <br />
                <em className="not-italic text-bronze">talk cars.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-12">
              <p className="text-base leading-loose text-ink-soft">
                所有預約皆由技師親自評估與報價。
                請選擇最方便的方式聯繫我們。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="bg-bg py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-px bg-line lg:grid-cols-3">
            <a
              href="tel:0916969531"
              className="group block bg-bg p-12 transition-colors hover:bg-bg-alt/40"
            >
              <p className="font-display text-[10px] tracking-[0.4em] text-bronze">
                01 — CALL
              </p>
              <h3 className="mt-12 font-display text-3xl tracking-wider text-ink lg:text-4xl">
                0916–969–531
              </h3>
              <p className="mt-6 text-sm tracking-wider text-ink-soft">
                服務專線 ／ 09:00 — 19:00
              </p>
              <div className="mt-12 flex items-center gap-3 text-[11px] tracking-[0.4em] text-ink-muted group-hover:text-ink">
                <span className="h-px w-8 bg-ink-muted group-hover:w-12 group-hover:bg-ink transition-all" />
                立即撥打
              </div>
            </a>

            <a
              href="https://line.me/R/ti/p/@510urlbi"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-bg p-12 transition-colors hover:bg-bg-alt/40"
            >
              <p className="font-display text-[10px] tracking-[0.4em] text-bronze">
                02 — LINE
              </p>
              <h3 className="mt-12 font-display text-3xl tracking-wider text-ink lg:text-4xl">
                @510urlbi
              </h3>
              <p className="mt-6 text-sm tracking-wider text-ink-soft">
                線上預約 ／ 全天候訊息
              </p>
              <div className="mt-12 flex items-center gap-3 text-[11px] tracking-[0.4em] text-ink-muted group-hover:text-ink">
                <span className="h-px w-8 bg-ink-muted group-hover:w-12 group-hover:bg-ink transition-all" />
                加入好友
              </div>
            </a>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-bg p-12 transition-colors hover:bg-bg-alt/40"
            >
              <p className="font-display text-[10px] tracking-[0.4em] text-bronze">
                03 — VISIT
              </p>
              <h3 className="mt-12 font-display text-2xl leading-snug tracking-wider text-ink lg:text-3xl">
                406 台中市北屯區
                <br />
                崇德八路一段 199 號
              </h3>
              <p className="mt-6 text-sm tracking-wider text-ink-soft">
                親臨工坊 ／ 週一公休
              </p>
              <div className="mt-12 flex items-center gap-3 text-[11px] tracking-[0.4em] text-ink-muted group-hover:text-ink">
                <span className="h-px w-8 bg-ink-muted group-hover:w-12 group-hover:bg-ink transition-all" />
                Google Maps
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* HOURS + MAP */}
      <section className="border-y border-line bg-bg-alt/30 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-display text-[11px] tracking-[0.5em] text-bronze">
                — HOURS
              </p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-ink">
                營業時間
              </h2>

              <dl className="mt-12 space-y-6 border-t border-line pt-8">
                {[
                  ["週二 — 週日", "09:00 — 19:00"],
                  ["週一", "公休"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between border-b border-line pb-6"
                  >
                    <dt className="text-sm tracking-widest text-ink-soft">
                      {k}
                    </dt>
                    <dd className="font-display text-lg tracking-wider text-ink">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 text-sm leading-loose text-ink-muted">
                為提供完整服務體驗，
                <br />
                請務必提前預約。
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="font-display text-[11px] tracking-[0.5em] text-bronze">
                — LOCATION
              </p>
              <div className="mt-8 aspect-[16/10] overflow-hidden border border-line">
                <iframe
                  title="FEEL 車體工藝 地圖"
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
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
