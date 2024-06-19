import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { rightImg, watchImg } from '@/utils'
import VideoCarousel from '@/components/video-carousel.tsx'

gsap.registerPlugin(ScrollTrigger)

export default function HighLights() {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '#title',
        start: 'bottom 90%',
      },
    })

    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: '.link',
        start: 'bottom 90%',
      },
    })
  }, [])

  return (
    <section id="highlights" className="common-padding h-full w-screen overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 flex w-full justify-between max-md:flex-col">
          <h1 id="title" className="section-heading">先刷重点。</h1>
          <div className="flex items-end gap-5">
            <a
              href="https://www.apple.com.cn/105/media/cn/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/films/product/iphone-15-pro-product-tpl-cn-2023_16x9.m3u8"
              className="link"
            >
              观看影片
              <img src={watchImg} alt="watch" className="ml-2" />
            </a>
            <a href="https://www.apple.com.cn/apple-events/" className="link">
              观看特别活动
              <img src={rightImg} alt="right" className="ml-2" />
            </a>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}
