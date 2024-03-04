import React from 'react'
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'
import './styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import img1 from '../../assets/imagesCircularTeam/img1.jpeg'
import img2 from '../../assets/imagesCircularTeam/img2.jpeg'
import img3 from '../../assets/imagesCircularTeam/img3.jpeg'
import img4 from '../../assets/imagesCircularTeam/img4.jpeg'
import img5 from '../../assets/imagesCircularTeam/img5.jpeg'
import img6 from '../../assets/imagesCircularTeam/img6.jpeg'
import img7 from '../../assets/imagesCircularTeam/img7.jpeg'
import img8 from '../../assets/imagesCircularTeam/img8.jpeg'


const slides = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img6,
]

const Carousel = () => {
    return (
        <div className='carousel_ui_container'>
            <Swiper
                modules={[EffectCoverflow, Navigation, Pagination]}
                navigation={{
                    prevEl: "car_button_prev",
                    nextEl: "car_button_next",
                }}
                pagination={{ clickable: true }}
                speed={1000}
                slidesPerView={"auto"}
                centeredSlides
                effect='coverflow'
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
            >
                {
                    slides.map((slide, index) => (
                        <SwiperSlide key={index} className='car_slide_inner'>
                            <img src={slide} alt='' />
                        </SwiperSlide>
                    ))
                }
                <div className='car_button_prev'>
                    <FaCircleArrowLeft />
                </div>
                <div className='car_button_next'>
                    <FaCircleArrowRight />
                </div>
            </Swiper>
        </div>
    )
}

export default Carousel