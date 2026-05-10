import ScrollButton from "@/components/home/scroll-button"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
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
