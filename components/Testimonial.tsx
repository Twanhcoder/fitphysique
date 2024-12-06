'use client'

import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa6"

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

const testimonialData = [
  {
    img: '/assets/img/testimonial/lucy.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    name: 'Lucy Anthony',
  },
  {
    img: '/assets/img/testimonial/michael.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    name: 'Michael Smith',
  },
  {
    img: '/assets/img/testimonial/maria.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    name: 'Maria Garcia',
  },
  {
    img: '/assets/img/testimonial/lucy.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    name: 'Lucy Anthony',
  },
  {
    img: '/assets/img/testimonial/lucy.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    name: 'Lucy Anthony',
  },
  {
    img: '/assets/img/testimonial/michael.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    name: 'Michael Smith',
  },
  {
    img: '/assets/img/testimonial/maria.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    name: 'Maria Garcia',
  },
  {
    img: '/assets/img/testimonial/lucy.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.',
    name: 'Lucy Anthony',
  },
]

const Testimonial = () => {
  return (
    <section className='py-12 xl:py-28' id='testimonial'>
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center">Our Testimonials</motion.h2>
        <motion.div variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.2 }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[320px]">
            {testimonialData.map((item, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div

                    className="flex flex-col items-center justify-center gap-6 text-center h-full"
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      className="rounded-full border-2 border-accent"
                      width={90}
                      height={90}
                    />
                    <div className="flex flex-col items-center justify-center text-center">
                      <FaQuoteLeft className="text-gray-300 text-2xl" />
                      <p className="max-w-[380px] mb-4">{item.message}</p>
                      <span className="text-2xl text-accent">{item.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial