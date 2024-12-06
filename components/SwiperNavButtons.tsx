'use client'

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const SwiperNavButtons = ({ containerStyles, btnStyles, iconStyles }: { containerStyles: string, btnStyles: string, iconStyles: string }) => {
  const swiper = useSwiper();
  return (
    <div className={`${containerStyles}`}>
      <button className={`${iconStyles}`} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={`${btnStyles} ${iconStyles}`} />
      </button>
      <button className={`${iconStyles}`} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={`${btnStyles} ${iconStyles}`} />
      </button>
    </div>
  )
}

export default SwiperNavButtons