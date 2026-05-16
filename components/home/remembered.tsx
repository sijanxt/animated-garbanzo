type RememberedProps = {
  startTimeline: boolean
}

export default function Remembered({ startTimeline }: RememberedProps) {
  return (
    <section id="remembered" className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm text-zinc-300/90 sm:text-base animate-fade-in">
          Some are forgotten, some are remembered.
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-px w-[min(72vw,880px)] -translate-x-1/2 bg-white/15">
        <span
          className={`absolute left-0 top-0 h-full w-full bg-white/70 origin-left ${startTimeline ? "timeline-progress" : "scale-x-0"}`}
          style={{ animationDuration: "5000ms" }}
        />
      </div>
    </section>
  )
}
