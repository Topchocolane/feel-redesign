import Link from "next/link";
import { SERVICES } from "@/lib/services";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-bg pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-bronze-soft/20 blur-[120px]" />
          <div className="absolute -right-32 bottom-1/4 h-[520px] w-[520px] rounded-full bg-bronze/10 blur-[140px]" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1400px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-7">
            <p className="fade-up font-display text-[11px] tracking-[0.5em] text-bronze">
              EST · TAICHUNG · 北屯
            </p>
            <h1 className="fade-up fade-up-delay-1 mt-8 font-display text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.95] tracking-tight text-ink">
              The art
              <br />
              of <em className="text-bronze not-italic">feeling</em>
              <br />
              your car.
            </h1>
            <p className="fade-up fade-up-delay-2 mt-10 max-w-xl text-base leading-loose text-ink-soft">
              在 FEEL 車體工藝，每一道工序都是對細節的承諾。
              <br />
              我們不只清潔車輛，我們還原它原本應有的樣子。
            </p>

            <div className="fade-up fade-up-delay-3 mt-12 flex flex-wrap items-center gap-6">
              <Link
                href="/service"
                className="group inline-flex items-center gap-4 bg-ink px-8 py-4 text-[11px] tracking-[0.4em] text-bg transition-all hover:bg-bronze"
              >
                探索服務
                <span className="font-display transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <a
                href="https://line.me/R/ti/p/@510urlbi"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[11px] tracking-[0.4em] text-ink-soft hover:text-ink"
              >
                <span className="h-px w-8 bg-ink-soft transition-all group-hover:w-12 group-hover:bg-ink" />
                LINE 即刻預約
              </a>
            </div>
          </div>

          <div className="fade-up fade-up-delay-4 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-ink" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(168,120,82,0.4),transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col justify-between p-10 text-bg">
                <div className="flex items-start justify-between">
                  <span className="font-display text-[10px] tracking-[0.5em]">
                    No.01
                  </span>
                  <span className="font-display text-[10px] tracking-[0.5em]">
                    2026 · WINTER
                  </span>
                </div>
                <div>
                  <p className="font-display text-[10px] tracking-[0.5em] text-bronze-soft">
                    Featured Craft
                  </p>
                  <h3 className="mt-3 font-display text-3xl tracking-wide">
                    Mirror Finish
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-bg/70">
                    多階段研磨 ／ 鏡面修復
                    <br />
                    讓五年的風霜回到出廠那天。
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-[10px] tracking-[0.4em] text-ink-muted">
              <span>SCROLL</span>
              <span className="mx-6 h-px flex-1 bg-line" />
              <span>↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-y border-line bg-bg-alt/30 py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-display text-[11px] tracking-[0.5em] text-bronze">
                — 01 PHILOSOPHY
              </p>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-wide text-ink lg:text-5xl">
                專注 · 細節
                <br />
                成就感覺
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-lg leading-loose text-ink-soft">
                車不僅是代步工具，
                <br />
                更是駕駛者個性與品味的延伸。
              </p>
              <p className="mt-8 leading-loose text-ink-soft">
                我們以專注的態度、細膩的工藝，
                為您打造人車合一的極致享受。在服務品質、耗材與技術上始終保持高水準，
                由技師依照車況評估後，為每位車主提供最合適的方案。
              </p>
              <p className="mt-8 leading-loose text-ink-soft">
                價格透明，不過度推銷。
                <br />
                這是 FEEL 對每一位客戶的承諾。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-20 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="font-display text-[11px] tracking-[0.5em] text-bronze">
                — 02 SERVICES
              </p>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-wide text-ink lg:text-5xl">
                六項工藝
                <br />
                Six Crafts.
              </h2>
            </div>
            <Link
              href="/service"
              className="group inline-flex items-center gap-3 text-[11px] tracking-[0.4em] text-ink-soft hover:text-ink"
            >
              查看全部服務
              <span className="font-display transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 divide-y divide-line border-y border-line md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Link
                key={s.id}
                href={`/service#${s.id}`}
                className={`group block p-10 transition-colors hover:bg-bg-alt/50 ${
                  i >= 3 ? "lg:border-t lg:border-line" : ""
                } ${i % 2 !== 0 && i < 4 ? "md:border-t md:border-line" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs tracking-[0.4em] text-bronze">
                    {s.number}
                  </span>
                  <span className="font-display text-[11px] tracking-[0.3em] text-ink-muted opacity-0 transition-opacity group-hover:opacity-100">
                    EXPLORE →
                  </span>
                </div>
                <h3 className="mt-12 text-2xl tracking-widest text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 font-display text-sm tracking-[0.2em] text-ink-muted">
                  {s.en}
                </p>
                <p className="mt-8 text-sm leading-relaxed text-ink-soft">
                  {s.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-32 text-bg">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-bronze/20 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-bronze/15 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-display text-[11px] tracking-[0.5em] text-bronze-soft">
                — RESERVATION
              </p>
              <h2 className="mt-6 font-display text-5xl leading-tight tracking-wide lg:text-7xl">
                準備好讓您的愛車
                <br />
                <em className="not-italic text-bronze-soft">重新被感受嗎？</em>
              </h2>
              <p className="mt-10 max-w-xl leading-loose text-bg/70">
                每一次預約皆由技師親自評估與報價。
                <br />
                我們保留為您量身規劃的時間，請提前透過電話或 LINE 聯繫。
              </p>
            </div>

            <div className="lg:col-span-5 lg:pl-12">
              <div className="space-y-8 border-l border-bronze/30 pl-10">
                <div>
                  <p className="font-display text-[10px] tracking-[0.5em] text-bronze-soft">
                    CALL
                  </p>
                  <a
                    href="tel:0916969531"
                    className="mt-3 block font-display text-3xl tracking-wider transition-colors hover:text-bronze-soft"
                  >
                    0916–969–531
                  </a>
                </div>
                <div>
                  <p className="font-display text-[10px] tracking-[0.5em] text-bronze-soft">
                    LINE
                  </p>
                  <a
                    href="https://line.me/R/ti/p/@510urlbi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block font-display text-2xl tracking-wider transition-colors hover:text-bronze-soft"
                  >
                    @510urlbi
                  </a>
                </div>
                <div>
                  <p className="font-display text-[10px] tracking-[0.5em] text-bronze-soft">
                    HOURS
                  </p>
                  <p className="mt-3 text-lg tracking-wide">
                    09:00 — 19:00
                    <br />
                    <span className="text-sm text-bg/60">週一公休</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
