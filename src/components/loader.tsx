import { Html } from '@react-three/drei'

export default function Loader() {
  return (
    <Html>
      <div className="absolute left-0 top-0 flex size-full items-center justify-center">
        <div className="size-[10vw] rounded-full">加载中...</div>
      </div>
    </Html>
  )
}
