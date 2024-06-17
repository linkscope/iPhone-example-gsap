import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import { heroVideo, smallVideo } from '@/utils'

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallVideo : heroVideo)

  const handleVideoSrcChange = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallVideo)
    }
    else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcChange)

    return () => window.removeEventListener('resize', handleVideoSrcChange)
  }, [])

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 2,
    })

    gsap.to('#cta', {
      opacity: 1,
      y: -50,
      delay: 2,
    })
  }, [])

  return (
    <section className="screen-max-width nav-height w-full bg-black">
      <div className="flex h-5/6 w-full flex-col items-center justify-center">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <video className="pointer-events-none w-full" autoPlay muted playsInline key={videoSrc}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <div id="cta" className="flex translate-y-20 flex-col items-center opacity-0">
        <a href="#highlights" className="btn">购买</a>
        <p className="text-xl font-normal">RMB 333/月起或 RMB 7999 起</p>
      </div>
    </section>
  )
}
