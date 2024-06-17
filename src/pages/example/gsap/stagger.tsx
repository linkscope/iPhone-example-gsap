import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function GsapStagger() {
  useGSAP(() => {
    gsap.to('.stagger-box', {
      y: 250,
      rotation: 360,
      borderRadius: '100%',
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1.5, // 所有交错元素的时间总量
        grid: [2, 1], // 指明有多少行和列，便于GSAP计算，这里使用的是多个子元素，设置为2行1列可以让box沿y轴上下弹跳
        axis: 'y',
        ease: 'circ.inOut',
        from: 'center',
      },
    })
  }, [])

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex gap-x-5">
        <div className="stagger-box size-20 rounded-lg bg-indigo-200" />
        <div className="stagger-box size-20 rounded-lg bg-indigo-300" />
        <div className="stagger-box size-20 rounded-lg bg-indigo-400" />
        <div className="stagger-box size-20 rounded-lg bg-indigo-500" />
        <div className="stagger-box size-20 rounded-lg bg-indigo-600" />
        <div className="stagger-box size-20 rounded-lg bg-indigo-700" />
        <div className="stagger-box size-20 rounded-lg bg-indigo-800" />
      </div>
    </div>
  )
}
