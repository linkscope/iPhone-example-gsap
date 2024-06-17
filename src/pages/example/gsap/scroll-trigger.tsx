import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function GsapScrollTrigger() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const boxes: Element[] = gsap.utils.toArray(scrollRef.current?.children || [])
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box)),
        rotation: 360,
        borderRadius: '100%',
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom', // ScrollTrigger起始位置
          end: 'top 10%', // ScrollTrigger结束位置
          scrub: true, // 将动画进度连接到滚动跳上
        },
        ease: 'power1.inOut',
      })
    })
  }, { scope: scrollRef })

  return (
    <>
      <div className="h-96 w-full text-center leading-[24rem]">向下滚动查看动画效果</div>
      <div ref={scrollRef} className="flex h-screen w-full flex-col items-center justify-center gap-y-4">
        <div id="scroll-pink" className="scroll-box size-20 rounded-lg bg-pink-500" />
        <div id="scroll-orange" className="scroll-box size-20 rounded-lg bg-orange-500" />
      </div>
    </>
  )
}
