import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '@/utils'
import { animateWithGsap } from '@/utils/animation.tsx'

export default function HowItWorks() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="my-20 flex w-full items-center justify-center">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="fle flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro 芯片，
            <br />
            游戏猛兽新出笼。
          </h2>
          <p className="hiw-subtitle">Apple 重新设计的图形处理器，树立了新的里程碑。</p>
        </div>
        <div className="mb-14 mt-10 md:mt-20">
          <div className="relative flex h-full items-center justify-center">
            <div className="overflow-hidden">
              <img src={frameImg} alt="frame" className="relative z-10 bg-transparent" />
            </div>
            <div className="hiw-video">
              <video muted className="pointer-events-none" playsInline preload="none" autoPlay ref={videoRef}>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="mt-3 text-center font-semibold text-gray">《崩坏：星穹铁道》</p>
          <div className="hiw-text-container mt-8">
            <div className="flex flex-1 flex-col justify-center gap-y-8 md:px-32">
              <p className="hiw-text g_fadeIn">
                A17 Pro 是<span className="text-white">创新的 3 纳米制程芯片</span>在 iPhone 上的首秀。这是 iPhone
                芯片的又一次颠覆，
                <span className="text-white">实现了超越以往的图形性能</span>。
              </p>
              <p className="hiw-text g_fadeIn">
                手机
                <span className="text-white">游戏的画面和体验沉浸感十足</span>
                ，场景环境细致入微，人物形象也更真实。而傲人的速度和能效，也让 A17 Pro 飙出新高度。
              </p>
            </div>
            <div className="g_fadeIn flex flex-1 flex-col justify-center">
              <p className="hiw-text">新一代</p>
              <p className="hiw-bigtext">Pro 级</p>
              <p className="hiw-bigtext">图形处理器</p>
              <p className="hiw-text">6 核驱动</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
