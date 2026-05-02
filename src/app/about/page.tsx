import Link from "next/link";

export const metadata = {
  title: "關於我們 — FEEL 車體工藝",
  description:
    "FEEL 車體工藝位於台中市北屯區，堅持以專業技術與極致細節，為您的愛車帶來全新的汽美體驗。",
};

const PRINCIPLES = [
  {
    no: "01",
    en: "FOCUS",
    zh: "專注",
    body: "每一台進場的車，技師會給予完整、不分心的時間。我們不採排隊式流水線。",
  },
  {
    no: "02",
    en: "DETAIL",
    zh: "細節",
    body: "從輪框內側到車頂縫隙，從引擎艙到後座地毯，沒有一個被忽略的角落。",
  },
  {
    no: "03",
    en: "FEELING",
    zh: "感覺",
    body: "技藝最終服務於感受。當你再次坐進駕駛座，那份微妙的不同就是答案。",
  },
];

const SPECS = [
  { num: "06", label: "PROFESSIONAL CRAFTS", zh: "專業服務項目" },
  { num: "10+", label: "YEARS OF EXPERIENCE", zh: "年汽車美容資歷" },
  { num: "100%", label: "SPECIALIST APPRAISAL", zh: "技師親自評估" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-bg pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 diag-stripes opacity-30" />
        <div className="pointer-events-none absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-orange/15 blur-[160px]" />

        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-orange">
              /// 03 — ABOUT
            </span>
            <span className="h-px w-16 bg-orange" />
          </div>

          <h1 className="font-display text-7xl leading-[0.85] tracking-wider text-ink lg:text-9xl">
            WE DON&apos;T
            <br />
            WASH CARS.
            <br />
            <span className="text-orange">WE TUNE THEM.</span>
          </h1>

          <div className="mt-12 max-w-2xl">
            <p className="text-base leading-relaxed text-ink-soft">
              FEEL 車體工藝座落於台中北屯崇德八路一段一處低調的工坊。
              我們相信，車不是消耗品。它是駕駛者與道路之間的延伸。
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-bg py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-[10px] tracking-[0.4em] text-orange">
                // STORY_01
              </div>
              <h2 className="mt-6 font-display text-5xl tracking-wider text-ink lg:text-6xl">
                THE STORY.
              </h2>
            </div>
            <div className="space-y-6 lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-relaxed text-ink">
                歡迎光臨 FEEL 車體工藝。我們堅持以專業技術與極致細節，
                為你的愛車帶來全新的汽美體驗。
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                我們深知——車不僅是代步工具，更是駕駛者個性與品味的延伸。
                因此，我們以專注的態度、細膩的工藝，為你打造人車合一的極致享受。
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                在服務品質、耗材和技術方面始終保持高水準。
                根據客戶的需求和預算，由技師進行車輛狀況評估後，提供最佳建議。
              </p>
              <div className="flex items-center gap-4 pt-6">
                <span className="h-px w-12 bg-orange" />
                <p className="font-mono text-xs tracking-[0.3em] text-orange">
                  PRICE TRANSPARENT · NO PUSHY UPSELL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-y border-line bg-bg-elev py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="mb-16">
            <div className="font-mono text-[10px] tracking-[0.4em] text-orange">
              // PRINCIPLES
            </div>
            <h2 className="mt-6 font-display text-5xl tracking-wider text-ink lg:text-7xl">
              THREE CORE
              <br />
              <span className="text-orange">BELIEFS.</span>
            </h2>
          </div>

          <div className="grid gap-px bg-line lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.no} className="bg-bg-elev p-10 group hover:bg-bg-card transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-display text-6xl text-orange leading-none">
                    {p.no}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
                    /{p.en}
                  </span>
                </div>

                <h3 className="mt-12 text-5xl font-black tracking-widest text-ink">
                  {p.zh}
                </h3>
                <p className="mt-3 font-display text-xl tracking-[0.2em] text-ink-soft">
                  {p.en}
                </p>

                <div className="mt-8 h-px w-16 bg-orange" />

                <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="bg-bg py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="mb-12">
            <div className="font-mono text-[10px] tracking-[0.4em] text-orange">
              // SPECS
            </div>
          </div>
          <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-3">
            {SPECS.map((s) => (
              <div key={s.label} className="bg-bg p-10">
                <p className="font-display text-8xl text-ink leading-none">
                  {s.num}
                </p>
                <p className="mt-6 font-mono text-[10px] tracking-[0.3em] text-orange">
                  {s.label}
                </p>
                <p className="mt-2 text-sm tracking-wider text-ink-soft">
                  {s.zh}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line bg-bg-elev py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.02] checker" />
        <div className="pointer-events-none absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-orange/20 blur-[180px]" />

        <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10 text-center">
          <div className="font-mono text-[10px] tracking-[0.4em] text-orange">
            // VISIT US
          </div>
          <h2 className="mt-6 font-display text-6xl leading-[0.9] tracking-wider lg:text-8xl">
            COME TO THE
            <br />
            <span className="text-orange">GARAGE.</span>
          </h2>
          <Link
            href="/contact"
            className="mt-12 group inline-flex items-center gap-3 bg-orange px-8 py-4 font-display text-base tracking-wider text-bg hover:bg-orange-glow transition-colors"
          >
            <span className="h-1.5 w-1.5 bg-bg blink" />
            GET CONTACT INFO <span className="font-mono">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
