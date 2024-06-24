import { footerLinkList } from '@/constants'
import { cn } from '@/lib/utils.ts'

export default function Footer() {
  return (
    <footer className="p-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            更多选购方式：
            <span className="text-blue underline">查找你附近的 Apple Store 零售店</span>及
            <span className="text-blue underline">更多门店</span>
            <span className="text-xs font-semibold text-gray">，或者致电 400-666-8800。</span>
          </p>
        </div>
        <div className="my-5 h-px w-full bg-neutral-700"></div>
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">Copyright © 2024 Apple Inc. 保留所有权利。</p>
          <div className="flex">
            {footerLinkList.map((link, index) => (
              <p
                className={cn(
                  'text-xs font-semibold text-gray px-2',
                  index !== footerLinkList.length - 1 && 'border-r-[1px] border-gray',
                )}
                key={link}
              >
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
