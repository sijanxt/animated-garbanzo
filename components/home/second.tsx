import ScrollButton from "@/components/home/scroll-button"

export default function Second() {
  return (
    <section id="second" className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Some are forgotten.
        </h2>
        <ScrollButton targetId="third">
          Explore the experience
        </ScrollButton>
      </div>
    </section>
  )
}
