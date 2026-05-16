'use client'

import { useEffect, useState } from "react"
import Hero from "@/components/home/hero"
import Preloader from "@/components/home/preloader"
import Second from "@/components/home/second"
import Third from "@/components/home/third"

type StoryPhase = "intro" | "forgotten" | "remembered" | "revealed"

export default function HomeClient() {
  const [hasEntered, setHasEntered] = useState(false)
  const [phase, setPhase] = useState<StoryPhase>("intro")

  useEffect(() => {
    if (!hasEntered) {
      return
    }

    const forgottenTimer = window.setTimeout(() => {
      setPhase("forgotten")
    }, 4000)

    const rememberedTimer = window.setTimeout(() => {
      setPhase("remembered")
    }, 6500)

    const finalRevealTimer = window.setTimeout(() => {
      setPhase("revealed")
    }, 8500)

    return () => {
      window.clearTimeout(forgottenTimer)
      window.clearTimeout(rememberedTimer)
      window.clearTimeout(finalRevealTimer)
    }
  }, [hasEntered])

  return (
    <main>
      <Preloader onEnter={() => setHasEntered(true)} />
      <Hero startTimeline={hasEntered} phase={phase} />
      <Second />
      <Third />
    </main>
  )
}
