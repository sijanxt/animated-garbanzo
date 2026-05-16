'use client'

import { useEffect, useState } from "react"
import Hero from "@/components/home/hero"
import Preloader from "@/components/home/preloader"
import Second from "@/components/home/second"
import Third from "@/components/home/third"

export default function HomeClient() {
  const [hasEntered, setHasEntered] = useState(false)
  const [showRememberedLine, setShowRememberedLine] = useState(false)

  useEffect(() => {
    if (!hasEntered) {
      return
    }

    const revealTimer = window.setTimeout(() => {
      setShowRememberedLine(true)
    }, 4000)

    return () => {
      window.clearTimeout(revealTimer)
    }
  }, [hasEntered])

  return (
    <main>
      <Preloader onEnter={() => setHasEntered(true)} />
      <Hero startTimeline={hasEntered} showRememberedLine={showRememberedLine} />
      <Second />
      <Third />
    </main>
  )
}
