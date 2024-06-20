import NavBar from '@/components/nav-bar.tsx'
import Hero from '@/components/hero.tsx'
import HighLights from '@/components/high-lights.tsx'
import Model from '@/components/model.tsx'
import Features from '@/components/features.tsx'

export default function App() {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <HighLights />
      <Model />
      <Features />
    </main>
  )
}
