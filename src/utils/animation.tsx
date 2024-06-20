// @ts-expect-error
import type gsap from 'gsap'
import type * as THREE from 'three'

export function animateWithGsapTimeline(
  timeline: gsap.core.Timeline,
  rotationRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
  rotationState: number,
  firstTarget: string,
  secondTarget: string,
  animationProps: gsap.TweenVars,
) {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  })

  timeline.to(firstTarget, {
    ...animationProps,
    ease: 'power2.inOut',
  }, '<')

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<',
  )
}
