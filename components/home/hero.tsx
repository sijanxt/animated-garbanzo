type HeroProps = {
  startTimeline: boolean
  showRememberedLine: boolean
}

export default function Hero({ startTimeline, showRememberedLine }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className={`mb-4 text-xs uppercase tracking-[0.45em] text-zinc-400 transition-opacity duration-700 ${showRememberedLine ? "opacity-0" : "opacity-100 animate-fade-in"}`}>
          Every interface has a story
        </p>
        <p className={`text-sm text-zinc-300/90 sm:text-base transition-opacity duration-700 ${showRememberedLine ? "opacity-100 animate-fade-in" : "opacity-0"}`}>
          Some are forgotten, some are remembered.
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-px w-[min(72vw,880px)] -translate-x-1/2 bg-white/15">
        <span
          className={`absolute left-0 top-0 h-full w-full bg-white/70 origin-left ${startTimeline ? "timeline-progress" : "scale-x-0"}`}
          style={{ animationDuration: "4000ms" }}
        />
      </div>
    </section>
  )
}
