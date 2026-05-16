import Hero from "@/components/home/hero"
import Preloader from "@/components/home/preloader"
import Remembered from "@/components/home/remembered"
import Second from "@/components/home/second"
import Third from "@/components/home/third"

export default function Home() {
  return (
    <main>
      <Preloader />
      <Hero />
      <Remembered />
      <Second />
      <Third />
    </main>
  )
}
