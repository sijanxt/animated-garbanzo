import ScrollButton from "@/components/home/scroll-button"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-zinc-400 animate-fade-in">
          Every interface has a story
        </p>
        <p className="mb-8 text-sm text-zinc-300/90 sm:text-base animate-fade-in-delay">
          Some are forgotten, some are remembered.
        </p>
        <div className="mb-10 animate-fade-in-delay-2">
          <button
            type="button"
            className="rounded-full border border-white/35 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
          >
            Enter Story
          </button>
        </div>
        {/* Main headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white animate-fade-in">
          Creative Frontend Engineer
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg animate-fade-in-delay">
          crafting immersive digital experiences
          <br />
          through motion, interaction, and storytelling.
        </p>
        <div className="mt-8 flex justify-center animate-fade-in-delay">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/30 shadow-[0_0_60px_rgba(255,255,255,0.2)] sm:h-52 sm:w-52">
            <Image
              src="/profile.jpg"
              alt="Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="animate-fade-in-delay">
          <ScrollButton targetId="second">
            Create the next scene
          </ScrollButton>
        </div>
      </div>
    </section>
  )
}
