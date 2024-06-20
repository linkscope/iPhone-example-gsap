import NavBar from '@/components/nav-bar.tsx'
import Hero from '@/components/hero.tsx'
import HighLights from '@/components/high-lights.tsx'
import Model from '@/components/model.tsx'

export default function App() {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <HighLights />
      <Model />
    </main>
  )
}
