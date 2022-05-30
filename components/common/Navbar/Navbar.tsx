import Image from 'next/image'
import styles from './Navbar.module.css'
import { useUIContext } from '@components/ui/Context'
// import className from 'classnames'
import classNames from 'classnames/bind'
let cx = classNames.bind(styles)

const Navbar = () => {
  const { toggleSidebar, displaySidebar } = useUIContext()
  console.log(displaySidebar)
  return (
    <>
      <nav className="flex flex-row items-center justify-between h-[87px] py-[8px] px-[10px] w-screen fixed top-0 left-0 right-0 bg-white z-[999]">
        <div
          className={cx('navBarContainer', '')}
          onClick={toggleSidebar}
        >
          <div
            className={cx('bar1', {
              '-rotate-45 translate-x-[0px] translate-y-[10px]':
                displaySidebar,
            })}
          ></div>
          <div className={cx('bar2', { 'opacity-0': displaySidebar })}></div>
          <div
            className={cx('bar3', {
              'rotate-45 translate-x-[0px] translate-y-[-11px]': displaySidebar,
            })}
          ></div>
        </div>
        <Image
          src="/assets/images/fupre-sdsn.png"
          alt="main-logo"
          height={32}
          width={32}
        />
      </nav>
    </>
  )
}

export default Navbar
