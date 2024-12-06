'use client'

import Image from "next/image"
import Link from "next/link"

import { FaMapMarkedAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"

import CustomButton from "./CustomButton"

import { motion } from "framer-motion"

const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: 'linear'
    }
  }
}

const footerItem = {
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

const Footer = () => {
  return (
    <footer className='pt-24 bg-primary-300'>
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariant} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.2 }}
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-4 gap-y-12">
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image src="/assets/img/logo.png" width={117} height={55} alt="" />
            </Link>
            <p className="max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit nostrum porro magnam adipisci ab temporibus asperiores quo quis quaerat ut modi consectetur ipsam, odit culpa nihil eius sit beatae.</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkedAlt className="text-xl text-accent" />
                <span>Lincoln Park Chicago, Illinois</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(510) 710-3464 (510) 640-6366</span>
              </li>
              <li className="flex items-center gap-4">
                <Link className="flex items-center gap-4" href="#">

                  <FaEnvelope className="text-xl text-accent" />
                  <span>sayhello@gamil.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Recent blog posts</h4>

            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href='#' className="hover:text-accent transition-all ">
                <h5 className="h5 leading-snug">How to stay motivated for all exercies</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">September 22, 2024</p>
              </Link>
            </div>

            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href='#' className="hover:text-accent transition-all ">
                <h5 className="h5 leading-snug">How to stay motivated for all exercies</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">September 22, 2024</p>
              </Link>
            </div>

            <div className="flex flex-col gap-3 pb-3 mb-4">
              <Link href='#' className="hover:text-accent transition-all ">
                <h5 className="h5 leading-snug">How to stay motivated for all exercies</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">September 22, 2024</p>
              </Link>
            </div>
          </motion.div>
          <motion.div variants={footerItem} >
            <h4 className="h4 text-accent mb-4">Gallery</h4>

            <div className="flex flex-wrap gap-2">
              <Link href='#'>
                <Image src="/assets/img/trainers/david.jpg" width={100} height={100} alt="" />
              </Link>
              <Link href='#'>
                <Image src="/assets/img/trainers/matt.jpg" width={100} height={100} alt="" />
              </Link>
              <Link href='#'>
                <Image src="/assets/img/trainers/rosy.jpg" width={100} height={100} alt="" />
              </Link>
              <Link href='#'>
                <Image src="/assets/img/trainers/sofia.jpg" width={100} height={100} alt="" />
              </Link>
              <Link href='#'>
                <Image src="/assets/img/trainers/david.jpg" width={100} height={100} alt="" />
              </Link>
              <Link href='#'>
                <Image src="/assets/img/trainers/matt.jpg" width={100} height={100} alt="" />
              </Link>
              <Link href='#'>
                <Image src="/assets/img/trainers/rosy.jpg" width={100} height={100} alt="" />
              </Link>
            </div>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo, minus at cumque ipsum placeat ullam quisquam totam voluptatum? Totam omnis quidem sequi non, expedita eligendi ratione quam unde aperiam.
              </p>
              <form>
                <input type="text" placeholder="Your email address" className="h-[50px] outline-none px-4 text-primary-300" />

                <CustomButton text='Send' containerStyles="h-[50px] px-8" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright 2024, Fitphysique</span>
            <ul className="flex gap-4 text-xl">
              <li><Link href='#' className="hover:text-accent transition-all text-white"><FaFacebook /></Link></li>
              <li><Link href='#' className="hover:text-accent transition-all text-white"><FaTwitter /></Link></li>
              <li><Link href='#' className="hover:text-accent transition-all text-white"><FaYoutube /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer