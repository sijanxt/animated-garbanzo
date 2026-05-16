type HeroProps = {
  startTimeline: boolean
  phase: "intro" | "forgotten" | "remembered" | "revealed"
}

export default function Hero({ startTimeline, phase }: HeroProps) {
  const showIntro = phase === "intro"
  const showForgotten = phase === "forgotten"
  const showRemembered = phase === "remembered"
  const showReveal = phase === "revealed"

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p
          className={`text-xs uppercase tracking-[0.45em] text-zinc-400 transition-all duration-700 ${
            showIntro ? "opacity-100 scale-100 animate-fade-in" : "opacity-0 scale-95"
          }`}
        >
          Every interface has a story
        </p>

        <p
          className={`absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6 text-sm text-zinc-300/90 transition-all duration-700 sm:text-base ${
            showForgotten ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          Some are forgotten.
        </p>

        <p
          className={`absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6 text-lg font-semibold uppercase tracking-[0.22em] text-white transition-all duration-700 sm:text-2xl ${
            showRemembered ? "opacity-100 scale-110 hero-zoom-in" : "opacity-0 scale-90"
          }`}
        >
          Some are remembered.
        </p>

        <div
          className={`transition-all duration-1000 ${
            showReveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hero Revealed
          </h1>
          <p className="mt-3 text-zinc-300">Motion. Memory. Storytelling.</p>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          showReveal ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 h-px w-[min(72vw,880px)] -translate-x-1/2 bg-white/15">
        <span
          className={`absolute left-0 top-0 h-full w-full bg-white/70 origin-left ${startTimeline ? "timeline-progress" : "scale-x-0"}`}
          style={{ animationDuration: "8500ms" }}
        />
      </div>
    </section>
  )
}
