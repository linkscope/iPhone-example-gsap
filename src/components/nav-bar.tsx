import { appleImg, bagImg, searchImg } from '@/utils'
import { navList } from '@/constants'

export default function NavBar() {
  return (
    <header className="flex w-full items-center justify-between p-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center gap-x-5 max-sm:hidden">
          {navList.map((nav) => (
            <div key={nav} className="cursor-pointer text-sm text-gray transition hover:text-white">
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}
