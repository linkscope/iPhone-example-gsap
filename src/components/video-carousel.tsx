import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { highlightSlideList } from '@/constants'
import { pauseImg, playImg, replayImg } from '@/utils'
import { cn } from '@/lib/utils.ts'

gsap.registerPlugin(ScrollTrigger)

export default function VideoCarousel() {
  const videoRef = useRef<(HTMLVideoElement | null)[]>([])
  const videoSpanRef = useRef<(HTMLSpanElement | null)[]>([])
  const videoDivRef = useRef<(HTMLDivElement | null)[]>([])

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  })
  const [loadedData, setLoadedData] = useState<React.SyntheticEvent<HTMLVideoElement, Event>[]>([])

  const { isEnd, startPlay, videoId, isPlaying, isLastVideo } = video

  useGSAP(() => {
    gsap.to('#slider', {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: 'power2.inOut',
    })

    // 当滚动到视频模块时，设置视频状态
    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none', // 重置onEnter钩子，激活onComplete钩子
      },
      onComplete: () => {
        setVideo(prev => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }))
      },
    })
  }, [isEnd, videoId])

  useEffect(() => {
    // 当视频数据加载完毕并且滚动到视频模块进行自动播放/暂停
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause()
      }
      else {
        startPlay && videoRef.current[videoId]?.play()
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData])

  // 设置底部按钮状态
  useEffect(() => {
    let currentProgress = 0
    const span = videoSpanRef.current

    if (span && span[videoId]) {
      const animate = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(animate.progress() * 100)

          if (progress !== currentProgress) {
            currentProgress = progress

            gsap.to(videoDivRef.current[videoId], {
              width: window.innerWidth < 760 ? '10vw' : window.innerWidth < 1200 ? '10vw' : '4vw',
            })

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: 'white',
            })
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: '12px',
            })

            gsap.to(span[videoId], {
              backgroundColor: '#afafaf',
            })
          }
        },
      })

      if (videoId === 0) {
        animate.restart()
      }

      const animateUpdate = () => {
        animate.progress(videoRef.current[videoId]!.currentTime / highlightSlideList[videoId].videoDuration)
      }

      if (isPlaying) {
        gsap.ticker.add(animateUpdate)
      }
      else {
        gsap.ticker.remove(animateUpdate)
      }
    }
  }, [videoId, startPlay])

  const handleProcess = (type: 'video-reset' | 'video-end' | 'video-last' | 'play' | 'pause', index?: number) => {
    switch (type) {
      // 播放结束自动播放下一个
      case 'video-end':
        setVideo(prev => ({
          ...prev,
          isEnd: true,
          videoId: index! + 1,
        }))
        break
        // 播放至最后一个暂停
      case 'video-last':
        setVideo(prev => ({
          ...prev,
          isLastVideo: true,
        }))
        break
        // 播放至最后一个点击按钮重置到第一个播放
      case 'video-reset':
        setVideo(prev => ({
          ...prev,
          isLastVideo: false,
          videoId: 0,
        }))
        break
      case 'play':
      case 'pause':
        setVideo(prev => ({
          ...prev,
          isPlaying: !prev.isPlaying,
        }))
        break
      default:
        return video
    }
  }

  return (
    <>
      <div className="flex items-center">
        {highlightSlideList.map((list, index) => (
          <div key={list.id} id="slider" className="relative pr-10 sm:pr-20">
            <div
              className="video-carousel_container flex items-center justify-center overflow-hidden rounded-3xl bg-black"
            >
              <video
                className={cn(list.id === 2 && 'translate-x-44', 'pointer-events-none')}
                ref={el => videoRef.current[index] = el}
                id="video"
                playsInline
                preload="auto"
                muted
                onPlay={() => setVideo(prev => ({
                  ...prev,
                  isPlaying: true,
                }))}
                onEnded={() => index !== highlightSlideList.length - 1 ? handleProcess('video-end', index) : handleProcess('video-last')}
                onLoadedMetadata={e => setLoadedData(prev => [...prev, e])}
              >
                <source src={list.video} type="video/mp4" />
              </video>
            </div>
            <div className="absolute left-[5%] top-12 z-10">
              {list.textLists.map(text => (
                <p key={text} className="text-xl font-medium md:text-2xl">
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <div
          className="flex items-center justify-center gap-x-4 rounded-full bg-gray-300 px-7 py-5 backdrop-blur"
        >
          {videoRef.current.map((_, index) => (
            <div
              key={index}
              ref={el => videoDivRef.current[index] = el}
              className="relative size-3 cursor-pointer rounded-full bg-gray-200"
            >
              <span
                className="absolute size-full rounded-full"
                ref={el => videoSpanRef.current[index] = el}
              />
            </div>
          ))}
        </div>

        <button type="button" className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
            onClick={isLastVideo ? () => handleProcess('video-reset') : !isPlaying ? () => handleProcess('play') : () => handleProcess('pause')}
          />
        </button>
      </div>
    </>
  )
}
