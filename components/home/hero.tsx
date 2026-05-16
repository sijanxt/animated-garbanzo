type HeroProps = {
  show: boolean
}

export default function Hero({ show }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hero Revealed
          </h1>
          <p className="mt-3 text-zinc-300">Motion. Memory. Storytelling.</p>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>
    </section>
  )
}
