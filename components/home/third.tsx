import ScrollButton from "@/components/home/scroll-button"

export default function Third() {
  return (
    <section id="third" className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.10),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Some become experiences.
        </h2>

        <ScrollButton targetId="hero">
          Back to the beginning
        </ScrollButton>
      </div>
    </section>
  )
}
