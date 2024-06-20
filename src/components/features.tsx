import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useRef } from 'react'
import { animateWithGsap } from '@/utils/animation.tsx'
import { explore1Img, explore2Img, exploreVideo } from '@/utils'

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      onComplete: () => {
        videoRef.current?.play()
      },
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
    })

    animateWithGsap('#features_title', {
      y: 0,
      opacity: 1,
    })

    animateWithGsap('.features_subtitle', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.25,
    })

    animateWithGsap(
      '.g_grow',
      {
        scale: 1,
        opacity: 1,
        ease: 'power1',
      },
      {
        scrub: 5.5,
      },
    )

    animateWithGsap('.g_text', {
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
    })
  }, [])

  return (
    <section className="common-padding relative h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            展开来说说。
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mb-24 mt-32 w-full sm:px-10">
            <h2 className="features_subtitle translate-y-5 text-5xl font-semibold opacity-0 lg:text-7xl">iPhone，</h2>
            <h2 className="features_subtitle translate-y-5 text-5xl font-semibold opacity-0 lg:text-7xl">
              钛金属强势加身。
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center sm:px-10">
            <div className="relative flex h-[50vh] w-full items-center">
              <video
                ref={videoRef}
                playsInline
                id="exploreVideo"
                className="size-full object-cover object-center"
                preload="none"
                muted
                autoPlay
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="relative flex w-full flex-col">
              <div className="feature-video-container">
                <div className="h-[50vh] flex-1 overflow-hidden">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="h-[50vh] flex-1 overflow-hidden">
                  <img src={explore2Img} alt="titanium" className="feature-video g_grow" />
                </div>
              </div>
            </div>
            <div className="feature-text-container">
              <div className="flex flex-1 items-center justify-center">
                <p className="feature-text g_text">
                  iPhone 15 Pro
                  <span className="text-white">是首款在设计中采用航空级钛金属的 iPhone</span>
                  ，这种合金也被用在执行火星探测任务的航天器中。
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <p className="feature-text g_text">
                  钛的强度重量比傲视绝大多数金属，由此成就了我们
                  <span className="text-white">迄今最轻的 Pro 机型</span>
                  。上手的那一刻，你就会感受到它的不同。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
