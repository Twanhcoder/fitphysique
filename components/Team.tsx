'use client'

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import Image from "next/image"

import Link from "next/link"
import CustomButton from "./CustomButton"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

const trainerData = [
  {
    image: '/assets/img/trainers/david.jpg',
    name: 'David Williams',
    role: 'Body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    socials: [
      {
        icon: FaFacebook,
        link: 'https://www.facebook.com'
      },
      {
        icon: FaTwitter,
        link: 'https://www.twitter.com'
      },
      {
        icon: FaYoutube,
        link: 'https://www.youtube.com'
      },
    ]
  },
  {
    image: '/assets/img/trainers/rosy.jpg',
    name: 'Rosy Rivera',
    role: 'Body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    socials: [
      {
        icon: FaFacebook,
        link: 'https://www.facebook.com'
      },
      {
        icon: FaTwitter,
        link: 'https://www.twitter.com'
      },
      {
        icon: FaYoutube,
        link: 'https://www.youtube.com'
      },
    ]
  },
  {
    image: '/assets/img/trainers/matt.jpg',
    name: 'Matt Stone',
    role: 'Body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    socials: [
      {
        icon: FaFacebook,
        link: 'https://www.facebook.com'
      },
      {
        icon: FaTwitter,
        link: 'https://www.twitter.com'
      },
      {
        icon: FaYoutube,
        link: 'https://www.youtube.com'
      },
    ]
  },
  {
    image: '/assets/img/trainers/sofia.jpg',
    name: 'Sofia Lauren',
    role: 'Body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    socials: [
      {
        icon: FaFacebook,
        link: 'https://www.facebook.com'
      },
      {
        icon: FaTwitter,
        link: 'https://www.twitter.com'
      },
      {
        icon: FaYoutube,
        link: 'https://www.youtube.com'
      },
    ]
  }
]


const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id='team'>
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6">Our trainers</motion.h2>

        <motion.div variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          layout

          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {trainerData.map((item, index) => {
            return (
              <div

                className="flex flex-col items-center text-center"
                key={index}
              >
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={item.image} fill alt="" />
                </div>
                <h4 className="h4 mb-2">{item.name}</h4>
                <p className="uppercase text-xs tracking-[3px] mb-2">{item.role}</p>
                <p className="mb-2 max-w-[320px] mx-auto">{item.description}</p>
                <div className="flex gap-12 justify-center">
                  {item.socials.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link href={social.link} className="hover:text-accent transition-all">
                          <social.icon className="text-lg" />
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </motion.div>

        <motion.div variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}>
          <CustomButton text='See all trainers' containerStyles='w-[196px] h-[62px]' />
        </motion.div>
      </div>
    </section>
  )
}

export default Team