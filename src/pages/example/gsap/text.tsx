import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function GsapText() {
  useGSAP(() => {
    gsap.to('#text', {
      ease: 'power1.inOut',
      opacity: 1,
      y: 0,
    })

    gsap.fromTo('.para', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      delay: 1,
      stagger: 0.1,
    })
  }, [])

  return (
    <div className="mx-auto w-[320px] py-20">
      <div id="text" className="translate-y-10 text-2xl font-bold opacity-0">Gsap Text</div>
      <p className="para mt-5 text-gray-400/80">
        这是第一段描述文本
      </p>
      <p className="para mt-5 text-gray-400/80">
        这是第二段描述文本
      </p>
      <p className="para mt-5 text-gray-400/80">
        这是第三段描述文本
      </p>
    </div>
  )
}
