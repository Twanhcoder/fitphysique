'use client'

import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import CustomButton from "./CustomButton";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const membershipData = [
  {
    title: 'Standard',
    price: '30',
    benefits: [
      {
        icon: FaCheck,
        text: 'Includes membership'
      },
      {
        icon: FaCheck,
        text: 'Access to all gym facilities'
      },
      {
        icon: MdClose,
        text: 'Diet plan included'
      },
      {
        icon: FaCheck,
        text: 'Healthy and fitness tips'
      },
      {
        icon: MdClose,
        text: 'Monday-Friday gym access'
      },
      {
        icon: FaCheck,
        text: 'Full access to everything'
      }, {
        icon: MdClose,
        text: 'No additional amenities'
      }

    ]
  },
  {
    title: 'Ultimate',
    price: '45',
    benefits: [
      {
        icon: FaCheck,
        text: 'Includes membership'
      },
      {
        icon: FaCheck,
        text: 'Access to all gym facilities'
      },
      {
        icon: FaCheck,
        text: 'Diet plan included'
      },
      {
        icon: FaCheck,
        text: 'Healthy and fitness tips'
      },
      {
        icon: FaCheck,
        text: 'Monday-Friday gym access'
      },
      {
        icon: FaCheck,
        text: 'Full access to everything'
      }, {
        icon: MdClose,
        text: 'No additional amenities'
      }

    ]
  },
  {
    title: 'Professional',
    price: '60',
    benefits: [
      {
        icon: FaCheck,
        text: 'Includes membership'
      },
      {
        icon: FaCheck,
        text: 'Access to all gym facilities'
      },
      {
        icon: FaCheck,
        text: 'Diet plan included'
      },
      {
        icon: FaCheck,
        text: 'Healthy and fitness tips'
      },
      {
        icon: FaCheck,
        text: 'Monday-Friday gym access'
      },
      {
        icon: FaCheck,
        text: 'Full access to everything'
      }, {
        icon: FaCheck,
        text: 'No additional amenities'
      }

    ]
  }
]

const MembershipSlider = () => {
  return <Swiper
    slidesPerView={1}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }}
    className="min-h-[680px]"
  >
    {membershipData.map((item, index) => {
      return <SwiperSlide key={index}>
        <div className="border border-accent hover:bg-primary-300/80
        transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto
        ">
          <div className="py-5 px-[60px] border-b border-accent">
            <h4 className="h4">{item.title}</h4>
          </div>
          <div className="py-[30px] px-[60px]">
            <ul className="flex flex-col gap-5 mb-7">
              {item.benefits.map((benefit, index) => {
                return (
                  <li className="flex items-center gap-2" key={index}>
                    <benefit.icon className="text-accent text-lg" />
                    {benefit.text}
                  </li>
                )
              })}
            </ul>

            <p className="text-accent mb-8 flex gap-1 items-center">
              <sup className="text-4xl">$</sup>
              <strong className="text-6xl">{item.price}</strong>
              <em className="text-2xl self-end">/month</em>
            </p>

            <CustomButton text='Buy Now' containerStyles='w-[196px] h-[62px]' />
          </div>
        </div>
      </SwiperSlide>
    })}
  </Swiper>;
}

export default MembershipSlider;