'use client'

import Image from "next/image"
import Link from "next/link"

import { motion } from 'framer-motion'

const brandContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: 'linear'
    }
  }
}

const brandItem = {
  hidden: {
    y: 20, 
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    }
  }
}

const brandImages = [
  {
    src: '/assets/img/brands/brand-1.png',
    href: ''
  },
  {
    src: '/assets/img/brands/brand-2.png',
    href: ''
  },
  {
    src: '/assets/img/brands/brand-3.png',
    href: ''
  },
  {
    src: '/assets/img/brands/brand-4.png',
    href: ''
  },
  {
    src: '/assets/img/brands/brand-5.png',
    href: ''
  },
]

const Brands = () => {
  return (
    <section className='py-8' id='contact'>
      <div className="container mx-auto">
        <motion.div
          variants={brandContainerVariant} initial='hidden' whileInView='show'
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 py-8">
          {brandImages.map((item, index) => {
            return (
              <motion.div
                variants={brandItem}
                className="flex justify-center items-center" key={index}>
                <Link className="group" href={item.href}>
                  <Image src={item.src} width={204} height={106} alt="" className="opacity-50 group-hover:opacity-100 transition-all mx-auto" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Brands