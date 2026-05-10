'use client'

type ScrollButtonProps = {
  targetId: string
  children: React.ReactNode
}

export default function ScrollButton({ targetId, children }: ScrollButtonProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <button type="button" onClick={handleClick} className="creative-cta">
      {children}
    </button>
  )
}

