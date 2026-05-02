import Link from "next/link";
import { SERVICES } from "@/lib/services";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-bg pt-24">
        {/* Diagonal stripes background */}
        <div className="pointer-events-none absolute inset-0 -z-10 diag-stripes opacity-40" />
        {/* Orange glow */}
        <div className="pointer-events-none absolute -right-40 top-1/4 h-[600px] w-[600px] rounded-full bg-orange/20 blur-[180px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange/10 blur-[140px]" />

        {/* Top tape strip */}
        <div className="absolute top-24 left-0 right-0 h-1.5 tape opacity-90" />

        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1500px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-8">
            {/* Top meta */}
            <div className="fade-up flex items-center gap-4 mb-10">
              <span className="font-mono text-xs tracking-[0.3em] text-orange">
                /// EST. 2024
              </span>
              <span className="h-px w-12 bg-orange" />
              <span className="font-mono text-xs tracking-[0.3em] text-ink-muted">
                TAICHUNG · 北屯
              </span>
            </div>

            {/* Main headline */}
            <h1 className="fade-up fade-up-delay-1 font-display text-[clamp(4rem,12vw,11rem)] leading-[0.85] tracking-tight text-ink">
              FEEL
              <br />
              <span className="relative inline-block">
                EVERY
                <span className="absolute -right-4 top-0 font-mono text-xs text-orange">
                  ®
                </span>
              </span>
              <br />
              <span className="text-orange text-glow">DETAIL.</span>
            </h1>

            {/* Subline */}
            <p className="fade-up fade-up-delay-2 mt-10 max-w-xl text-base leading-relaxed text-ink-soft">
              專注 · 細節 · 成就感覺。
              <br />
              FEEL 車體工藝以賽道級工序對待每一次保養。
              你的愛車值得更好的對待。
            </p>

            {/* CTAs */}
            <div className="fade-up fade-up-delay-3 mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/service"
                className="group relative inline-flex items-center gap-3 bg-orange px-8 py-4 font-display text-base tracking-wider text-bg hover:bg-orange-glow transition-colors"
              >
                <span>EXPLORE SERVICE</span>
                <span className="font-mono text-xs">→</span>
              </Link>
              <a
                href="https://line.me/R/ti/p/@510urlbi"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-line px-8 py-4 font-display text-base tracking-wider text-ink hover:border-orange hover:text-orange transition-colors"
              >
                <span className="h-1.5 w-1.5 bg-orange blink" />
                BOOK ON LINE
              </a>
            </div>
          </div>

          {/* Spec card / dashboard */}
          <div className="fade-up fade-up-delay-4 lg:col-span-4">
            <div className="relative border border-line bg-bg-card p-6">
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-mono text-[10px] tracking-[0.3em] text-orange">
                  // FILE_001
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-ink-muted">
                  STATUS: ACTIVE
                </span>
              </div>

              {/* Big number */}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-7xl text-ink leading-none">
                  06
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  / 服務項目
                </span>
              </div>

              {/* Service list (中文) */}
              <dl className="mt-8 space-y-2.5 text-sm">
                {SERVICES.map((s, i) => (
                  <div
                    key={s.id}
                    className={`flex items-baseline justify-between pb-2 ${
                      i === SERVICES.length - 1 ? "" : "border-b border-line/60"
                    }`}
                  >
                    <dt className="tracking-widest text-ink-soft">
                      {s.title}
                    </dt>
                    <dd className="font-mono text-xs text-ink">[ ON ]</dd>
                  </div>
                ))}
              </dl>

              {/* Bottom tag */}
              <div className="mt-6 inline-flex items-center gap-2 bg-orange/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 bg-orange blink" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-orange">
                  GARAGE OPEN
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-line bg-bg-elev py-4">
          <div className="flex marquee-track whitespace-nowrap font-display text-2xl tracking-wider text-ink-muted">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-8 px-8">
                <span>FEEL</span>
                <span className="text-orange">/</span>
                <span>EVERY</span>
                <span className="text-orange">/</span>
                <span>DETAIL</span>
                <span className="text-orange">/</span>
                <span>專 注 細 節 成 就 感 覺</span>
                <span className="text-orange">/</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO / PHILOSOPHY */}
      <section className="border-y border-line bg-bg-elev py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-[10px] tracking-[0.4em] text-orange">
                // MANIFESTO_01
              </div>
              <h2 className="mt-6 font-display text-6xl leading-[0.9] tracking-wider text-ink lg:text-7xl">
                NOT JUST
                <br />
                <span className="text-orange">A WASH.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-relaxed text-ink-soft">
                車不是工具。它是延伸的駕駛感官。
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div className="border-l-2 border-orange pl-6">
                  <p className="text-3xl font-bold tracking-widest text-ink">
                    專注
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    不流水線、不趕車。每一台進場的車都是當天的主角。
                  </p>
                </div>
                <div className="border-l-2 border-orange pl-6">
                  <p className="text-3xl font-bold tracking-widest text-ink">
                    細節
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    輪框內側到引擎艙縫隙，沒有一個被忽略的角落。
                  </p>
                </div>
                <div className="border-l-2 border-orange pl-6">
                  <p className="text-3xl font-bold tracking-widest text-ink">
                    速度
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    不是趕，是節奏。每道工序按賽道計時的精準執行。
                  </p>
                </div>
                <div className="border-l-2 border-orange pl-6">
                  <p className="text-3xl font-bold tracking-widest text-ink">
                    感覺
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    完成不是終點。是你下次坐進駕駛座那一刻的不同。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-bg py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="font-mono text-[10px] tracking-[0.4em] text-orange">
                // SERVICE_LIST
              </div>
              <h2 className="mt-6 font-display text-6xl leading-[0.9] tracking-wider text-ink lg:text-7xl">
                SIX CRAFTS.
                <br />
                <span className="text-orange">ONE FEELING.</span>
              </h2>
            </div>
            <Link
              href="/service"
              className="group inline-flex items-center gap-3 border border-line px-6 py-3 font-display text-sm tracking-wider hover:border-orange hover:text-orange transition-colors"
            >
              VIEW ALL <span className="font-mono">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/service#${s.id}`}
                className="group relative block bg-bg p-8 hover:bg-bg-card transition-colors"
              >
                {/* Number bib */}
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl text-orange leading-none">
                    {s.number}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    OPEN →
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-12 font-display text-3xl tracking-wider text-ink group-hover:text-orange transition-colors">
                  {s.en.toUpperCase()}
                </h3>
                <p className="mt-1 text-sm tracking-wider text-ink-soft">
                  {s.title}
                </p>

                {/* Tagline */}
                <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                  {s.tagline}
                </p>

                {/* Bottom stripe */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line bg-bg-elev py-32">
        {/* Checker pattern overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.02] checker" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-orange/20 blur-[180px]" />

        <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.4em] text-orange">
                // BOOKING
              </div>
              <h2 className="mt-6 font-display text-6xl leading-[0.9] tracking-wider lg:text-8xl">
                READY TO
                <br />
                <span className="text-orange">FEEL IT?</span>
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft">
                每一次預約由技師親自評估與報價。
                沒有標準套餐，只有為你的車量身規劃的方案。
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-6">
                <a
                  href="tel:0916969531"
                  className="group flex items-center justify-between border border-line bg-bg-card p-6 hover:border-orange transition-colors"
                >
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.3em] text-orange">
                      // CALL
                    </div>
                    <div className="mt-2 font-display text-3xl tracking-wider text-ink group-hover:text-orange transition-colors">
                      0916.969.531
                    </div>
                  </div>
                  <span className="font-mono text-2xl text-ink-muted group-hover:text-orange group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </a>

                <a
                  href="https://line.me/R/ti/p/@510urlbi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-line bg-bg-card p-6 hover:border-orange transition-colors"
                >
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.3em] text-orange">
                      // LINE
                    </div>
                    <div className="mt-2 font-display text-3xl tracking-wider text-ink group-hover:text-orange transition-colors">
                      @510URLBI
                    </div>
                  </div>
                  <span className="font-mono text-2xl text-ink-muted group-hover:text-orange group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
