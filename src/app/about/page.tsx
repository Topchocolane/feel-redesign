import Link from "next/link";

export const metadata = {
  title: "關於我們 — FEEL 車體工藝",
  description:
    "FEEL 車體工藝位於台中市北屯區，堅持以專業技術與極致細節，為您的愛車帶來全新的汽美體驗。",
};

const PRINCIPLES = [
  {
    no: "01",
    en: "Focus",
    zh: "專注",
    body: "每一台進場的車，技師會給予完整、不分心的時間。我們不採排隊式流水線。",
  },
  {
    no: "02",
    en: "Detail",
    zh: "細節",
    body: "從輪框內側到車頂縫隙，從引擎艙到後座地毯，沒有一個被忽略的角落。",
  },
  {
    no: "03",
    en: "Feeling",
    zh: "感覺",
    body: "技藝最終服務於感受。當您再次坐進駕駛座，那份微妙的不同就是答案。",
  },
];

const STATS = [
  { num: "06", label: "專業服務項目" },
  { num: "10+", label: "年汽車美容資歷" },
  { num: "100%", label: "技師親評估" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-bg pt-40 pb-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-bronze-soft/15 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-display text-[11px] tracking-[0.5em] text-bronze">
                — ABOUT
              </p>
              <h1 className="mt-8 font-display text-6xl leading-[0.95] tracking-tight text-ink lg:text-8xl">
                We don&apos;t
                <br />
                wash cars.
                <br />
                <em className="not-italic text-bronze">We restore them.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-12">
              <div className="border-l border-bronze/40 pl-8">
                <p className="font-display text-[10px] tracking-[0.4em] text-bronze">
                  EST · TAICHUNG
                </p>
                <p className="mt-4 text-sm leading-loose text-ink-soft">
                  FEEL 車體工藝座落於
                  <br />
                  台中北屯崇德八路一段
                  <br />
                  一處低調的工坊。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-bg py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="font-display text-[11px] tracking-[0.5em] text-bronze">
                — 01 STORY
              </p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-ink">
                我們的故事
              </h2>
            </div>
            <div className="space-y-8 text-lg leading-loose text-ink-soft lg:col-span-7 lg:col-start-5">
              <p>
                歡迎光臨 FEEL 車體工藝。在 FEEL，
                我們堅持以專業技術與極致細節，為您的愛車帶來全新的汽美體驗。
              </p>
              <p>
                我們深知——車不僅是代步工具，
                更是駕駛者個性與品味的延伸。
                因此，我們以專注的態度、細膩的工藝，
                為您打造人車合一的極致享受。
              </p>
              <p>
                不僅在服務品質、耗材和技術方面保持高水準，
                根據客戶的需求和預算，
                經過技師進行車輛狀況評估後，
                為您提供最佳建議。
              </p>
              <p className="pt-4 font-display text-2xl tracking-wider text-ink">
                價格透明 · 歡迎提前電話預約
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-y border-line bg-bg-alt/30 py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-20">
            <p className="font-display text-[11px] tracking-[0.5em] text-bronze">
              — 02 PRINCIPLES
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-wide text-ink lg:text-5xl">
              三項核心信念
            </h2>
          </div>

          <div className="grid gap-px bg-line lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.no} className="bg-bg-alt/30 p-12">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-xs tracking-[0.4em] text-bronze">
                    {p.no}
                  </span>
                  <span className="font-display text-sm tracking-[0.3em] text-ink-muted">
                    {p.en.toUpperCase()}
                  </span>
                </div>
                <h3 className="mt-12 font-display text-5xl tracking-wide text-ink">
                  {p.zh}
                </h3>
                <p className="mt-8 text-sm leading-loose text-ink-soft">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-bg py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {STATS.map((s) => (
              <div key={s.label} className="py-10 text-center">
                <p className="font-display text-7xl tracking-tight text-ink">
                  {s.num}
                </p>
                <p className="mt-4 text-[11px] tracking-[0.4em] text-ink-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-32 text-bg">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
          <p className="font-display text-[11px] tracking-[0.5em] text-bronze-soft">
            — VISIT US
          </p>
          <h2 className="mt-8 font-display text-5xl leading-tight tracking-wide lg:text-7xl">
            親臨工坊，
            <br />
            <em className="not-italic text-bronze-soft">親自感受。</em>
          </h2>
          <Link
            href="/contact"
            className="mt-12 group inline-flex items-center gap-4 border border-bronze px-8 py-4 text-[11px] tracking-[0.4em] text-bronze-soft transition-all hover:bg-bronze hover:text-bg"
          >
            聯繫我們
            <span className="font-display transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
