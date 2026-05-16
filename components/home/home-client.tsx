'use client'

import { useEffect, useState } from "react"
import Hero from "@/components/home/hero"
import Preloader from "@/components/home/preloader"
import Remembered from "@/components/home/remembered"
import Second from "@/components/home/second"
import Third from "@/components/home/third"

export default function HomeClient() {
  const [hasEntered, setHasEntered] = useState(false)
  const [heroFading, setHeroFading] = useState(false)
  const [rememberedStarted, setRememberedStarted] = useState(false)

  useEffect(() => {
    if (!hasEntered) {
      return
    }

    const fadeTimer = window.setTimeout(() => {
      setHeroFading(true)
    }, 3300)

    const rememberedTimer = window.setTimeout(() => {
      setRememberedStarted(true)
      const remembered = document.getElementById("remembered")
      remembered?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 4000)

    const secondTimer = window.setTimeout(() => {
      const second = document.getElementById("second")
      second?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 9000)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(rememberedTimer)
      window.clearTimeout(secondTimer)
    }
  }, [hasEntered])

  return (
    <main>
      <Preloader onEnter={() => setHasEntered(true)} />
      <Hero startTimeline={hasEntered} fadeOut={heroFading} />
      <Remembered startTimeline={rememberedStarted} />
      <Second />
      <Third />
    </main>
  )
}
