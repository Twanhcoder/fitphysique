'use client'

import CountUp from "react-countup"
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa"
import { ImUsers } from "react-icons/im"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    text: "training courses",
  },
  {
    number: 879,
    icon: FaClock,
    text: "working hours",
  },
  {
    number: 150,
    icon: ImUsers,
    text: "happy customers",
  },
  {
    number: 9,
    icon: FaTrophy,
    text: "international awards",
  }
]

const statContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
      ease: "linear",
    }
  }
}

const statsItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    }
  }
}

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          variants={statContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          layout
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-16"
        >
          {stats.map((item, index) => {
            return (
              <motion.div
                variants={statsItem}
                className="flex flex-col items-center justify-center text-center"
                key={index}
              >
                <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                  <div
                    ref={ref}
                    className="border border-accent/30 w-full h-full flex items-center justify-center rounded-full text-5xl"
                  >
                    {
                      inView && (<CountUp start={0} end={item.number} duration={6} />)
                    }

                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                  <item.icon className="text-3xl mb-2" />
                  <h4 className="h4 text-center">{item.text}</h4>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements