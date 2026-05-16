'use client'

import { useEffect, useState } from "react"

export default function Preloader() {
  const [entered, setEntered] = useState(false)
  const [hidden, setHidden] = useState(false)
  const handleEnter = () => {
    window.dispatchEvent(new CustomEvent("site:entered"))
    setEntered(true)
  }

  useEffect(() => {
    if (entered) {
      const timer = window.setTimeout(() => setHidden(true), 700)
      document.body.style.overflow = ""
      return () => window.clearTimeout(timer)
    }

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [entered])

  if (hidden) {
    return null
  }

  return (
    <div
      className={`preloader ${entered ? "preloader--exit" : ""}`}
      aria-hidden={entered}
    >
      <button
        type="button"
        className="preloader__enter"
        onClick={handleEnter}
        aria-label="Enter site"
      >
        <span className="preloader__line" />
        <span className="preloader__label">ENTER</span>
      </button>
    </div>
  )
}
