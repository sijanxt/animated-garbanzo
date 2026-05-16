import Hero from "@/components/home/hero"
import Preloader from "@/components/home/preloader"
import Second from "@/components/home/second"
import Third from "@/components/home/third"

export default function Home() {
  return (
    <main>
      <Preloader />
      <Hero />
      <Second />
      <Third />
    </main>
  )
}
