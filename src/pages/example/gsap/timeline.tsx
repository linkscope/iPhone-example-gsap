import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function GsapTimeline() {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  })

  useGSAP(() => {
    timeline.to('#box', {
      x: 250,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut',
    })

    timeline.to('#box', {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut',
    })

    timeline.to('#box', {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: '8px',
      duration: 2,
      ease: 'back.inOut',
    })
  }, [])

  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-10">
      <button
        type="button"
        className="rounded-lg border-b-4 border-slate-500/80 bg-slate-400/80 p-4 text-white active:border-b-2"
        onClick={() => {
          if (timeline.paused()) {
            timeline.play()
          } else {
            timeline.pause()
          }
        }}
      >
        播放/暂停
      </button>
      <div id="box" className="size-20 rounded-lg bg-yellow-500" />
    </div>
  )
}
