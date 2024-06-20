import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import ModelView from '@/components/model-view.tsx'
import { yellowImg } from '@/utils'
import { modelList, sizeList } from '@/constants'
import { animateWithGsapTimeline } from '@/utils/animation.tsx'

gsap.registerPlugin(ScrollTrigger)

export default function Model() {
  const [size, setSize] = useState<'small' | 'large'>('small')
  const [model, setModel] = useState({
    title: '原色钛金属 iPhone 15 Pro',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  })
  const cameraControlSmall = useRef()
  const cameraControlLarge = useRef()
  const small = useRef(new THREE.Group())
  const large = useRef(new THREE.Group())
  const [smallRotation, setSmallRotation] = useState(0)
  const [largeRotation, setLargeRotation] = useState(0)

  const timeline = gsap.timeline()

  useEffect(() => {
    if (size === 'large') {
      animateWithGsapTimeline(timeline, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2,
      })
    }

    if (size === 'small') {
      animateWithGsapTimeline(timeline, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 2,
      })
    }
  }, [size])

  useGSAP(() => {
    gsap.to('#heading', {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '#heading',
        start: 'bottom 90%',
      },
    })
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          定睛细看。
        </h1>
        <div className="mt-5 flex flex-col items-center">
          <div className="relative h-[50vh] w-full overflow-hidden">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="size-full"
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                overflow: 'hidden',
              }}
              eventSource={document.getElementById('root')!}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="mb-5 text-center text-sm font-light">{model.title}</p>
            <div className="flex items-center justify-center">
              <ul className="color-container">
                {modelList.map((model, index) => (
                  <li
                    key={index}
                    className="mx-2 size-6 cursor-pointer rounded-full"
                    style={{ backgroundColor: model.color[0] }}
                    onClick={() => setModel(model)}
                  />
                ))}
              </ul>
              <button type="button" className="size-btn-container">
                {sizeList.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? 'white' : 'transparent',
                      color: size === value ? 'black' : 'white',
                    }}
                    onClick={() => setSize(value as 'small' | 'large')}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
