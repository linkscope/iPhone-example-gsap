import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function GsapFromTo() {
  useGSAP(() => {
    gsap.fromTo(
      '#box',
      {
        x: 0,
        rotation: 0,
        borderRadius: '0%',
      },
      {
        x: 250,
        repeat: -1, // -1为无限次重复
        yoyo: true, // 每次迭代都以相反的方向运行 1-2-3-3-2-1
        borderRadius: '100%',
        rotation: 360,
        duration: 2,
        ease: 'bounce.out',
      },
    )
  }, [])

  return (
    <div className="flex h-full items-center justify-center">
      <div id="box" className="size-20 rounded-lg bg-amber-500" />
    </div>
  )
}
