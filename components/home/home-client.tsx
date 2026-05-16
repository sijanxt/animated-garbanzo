'use client'

import { useState } from "react"
import Hero from "@/components/home/hero"
import Preloader from "@/components/home/preloader"
import Second from "@/components/home/second"
import Third from "@/components/home/third"

export default function HomeClient() {
  const [hasEntered, setHasEntered] = useState(false)

  return (
    <main>
      <Preloader onEnter={() => setHasEntered(true)} />
      <Hero show={hasEntered} />
      <Second />
      <Third />
    </main>
  )
}
