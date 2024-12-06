'use client'

import { useEffect, useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'
import { MdMenu } from 'react-icons/md'

const Header = () => {
  const [headerActive, setHeaderActice] = useState(false);
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActice(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${headerActive ? 'h-[76px]' : 'h-[100px]'} 
      fixed max-w-[1920px] top-0 w-full bg-primary-200 transition-all z-50`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href=''>
          <Image src={'/assets/img/logo.png'} width={117} height={55} alt='' /></Link>
        <MobileNav containerStyles={` ${headerActive ? 'top-[90px]' : 'top-[124px]'} 
          ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'} 
          flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium text-white xl:hidden`} />
        <Nav containerStyles='flex gap-4 text-white text-base uppercase font-medium transition-all hidden xl:flex' />

        <div className='flex items-center gap-4'>
          <div className='text-white flex items-center gap-4'>
            <button className='hover:text-accent transition-all text-base uppercase font-medium '>Login</button>
            <button className='hover:text-accent transition-all text-base uppercase font-medium '>Register</button>
          </div>
          <button className='text-white xl:hidden' onClick={() => setOpenNav(!openNav)}>
            <MdMenu className='text-4xl' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header