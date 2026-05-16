'use client'

import { useEffect, useState } from "react"

export default function Hero() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const preloader = document.querySelector(".preloader")

    if (!preloader) {
      const immediateStart = window.setTimeout(() => setStarted(true), 0)
      return () => window.clearTimeout(immediateStart)
    }

    const onEntered = () => setStarted(true)
    window.addEventListener("site:entered", onEntered)

    return () => {
      window.removeEventListener("site:entered", onEntered)
    }
  }, [])

  useEffect(() => {
    if (!started) {
      return
    }

    const timer = window.setTimeout(() => {
      const target = document.getElementById("remembered")
      target?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [started])

  return (
    <section id="hero" className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-zinc-400 animate-fade-in">
          Every interface has a story
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-px w-[min(72vw,880px)] -translate-x-1/2 bg-white/15">
        <span className={`absolute left-0 top-0 h-full w-full bg-white/70 origin-left ${started ? "timeline-progress" : "scale-x-0"}`} />
      </div>
    </section>
  )
}
