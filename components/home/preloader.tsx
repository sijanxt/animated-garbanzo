'use client'

import { useEffect, useState } from "react"

type PreloaderProps = {
  onEnter?: () => void
}

export default function Preloader({ onEnter }: PreloaderProps) {
  const [phase, setPhase] = useState<"idle" | "intro" | "forgotten" | "remembered" | "done">("idle")
  const [hidden, setHidden] = useState(false)

  const handleEnter = () => {
    setPhase("intro")
  }

  useEffect(() => {
    if (phase === "idle") {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = ""
      }
    }

    if (phase === "intro") {
      const forgottenTimer = window.setTimeout(() => setPhase("forgotten"), 4000)
      const rememberedTimer = window.setTimeout(() => setPhase("remembered"), 6500)
      const doneTimer = window.setTimeout(() => {
        onEnter?.()
        setPhase("done")
      }, 8500)

      return () => {
        window.clearTimeout(forgottenTimer)
        window.clearTimeout(rememberedTimer)
        window.clearTimeout(doneTimer)
      }
    }

    if (phase === "done") {
      const timer = window.setTimeout(() => setHidden(true), 700)
      document.body.style.overflow = ""
      return () => window.clearTimeout(timer)
    }

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [onEnter, phase])

  if (hidden) {
    return null
  }

  return (
    <div
      className={`preloader ${phase === "done" ? "preloader--exit" : ""}`}
      aria-hidden={phase === "done"}
    >
      {phase === "idle" ? (
        <button
          type="button"
          className="preloader__enter"
          onClick={handleEnter}
          aria-label="Enter site"
        >
          <span className="preloader__line" />
          <span className="preloader__label">ENTER</span>
        </button>
      ) : (
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p
            className={`text-xs uppercase tracking-[0.45em] text-zinc-400 transition-all duration-700 ${
              phase === "intro" ? "opacity-100 scale-100 animate-fade-in" : "opacity-0 scale-95"
            }`}
          >
            Every interface has a story
          </p>
          <p
            className={`absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6 text-sm text-zinc-300/90 transition-all duration-700 sm:text-base ${
              phase === "forgotten" ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            Some are forgotten.
          </p>
          <p
            className={`absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6 text-lg font-semibold uppercase tracking-[0.22em] text-white transition-all duration-700 sm:text-2xl ${
              phase === "remembered" ? "opacity-100 scale-110 hero-zoom-in" : "opacity-0 scale-90"
            }`}
          >
            Some are remembered.
          </p>
        </div>
      )}
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-px w-[min(72vw,880px)] -translate-x-1/2 bg-white/15">
        <span
          className={`absolute left-0 top-0 h-full w-full bg-white/70 origin-left ${phase !== "idle" ? "timeline-progress" : "scale-x-0"}`}
          style={{ animationDuration: "8500ms" }}
        />
      </div>
    </div>
  )
}
