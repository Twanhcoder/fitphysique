'use client'

import { FaUsers } from 'react-icons/fa'
import { IoIosPricetag } from 'react-icons/io'
import { FaDumbbell } from 'react-icons/fa6'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import { div } from 'framer-motion/client'
import Achievements from './Achievements'

const featured = [
  {
    icon: <FaUsers />,
    title: 'awards-winning trainers',
    description: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore atque illum dolores eligendi. Delectus veniam nulla similique mollitia dolorum molestias unde sed ut a animi, beatae nemo in repudiandae.',
  },

  {
    icon: <IoIosPricetag />,
    title: 'exellent prices',
    description: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore atque illum dolores eligendi. Delectus veniam nulla similique mollitia dolorum molestias unde sed ut a animi, beatae nemo in repudiandae.',
  },
  {
    icon: <FaDumbbell />,
    title: 'modern equipment',
    description: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore atque illum dolores eligendi. Delectus veniam nulla similique mollitia dolorum molestias unde sed ut a animi, beatae nemo in repudiandae.',
  },
]

const About = () => {
  return (
    <section className='pt-8 pb-14 lg"pt-16 lg:pb-28' id='about'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center gap-2 mb-8'>
          <motion.h2
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className='h2 text-center'
          >About us</motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className='max-w-[600px] mx-auto text-center'
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod obcaecati illum nesciunt, enim rerum eum assumenda voluptatem adipisci ducimus rem dignissimos est blanditiis repudiandae, officiis laudantium odit debitis aut porro.</motion.p>
        </div>

        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16'
        >
          {featured.map((item, index) => {
            return (
              <div key={index} className='flex flex-col justify-center items-center gap-4 border p-10'>
                <div className='text-4xl bg-primary-300 text-white w-[80px] h-[80px] 
                rounded-full flex justify-center items-center'>{item.icon}</div>
                <div className='flex flex-col justify-center items-center gap-2 text-center'>
                  <h4 className='h4 text-accent'>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>)
          })}
        </motion.div>
        <motion.div
          variants={fadeIn('up', 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  )
}

export default About