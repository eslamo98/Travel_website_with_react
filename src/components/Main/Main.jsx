import React from 'react'
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import "./main.css"
const Main = () => {
  return (
    <main id="main">
        <Swiper
    modules={[Navigation]}
      slidesPerView={1}
      navigation={true}
      loop
    >
        <SwiperSlide>
                <div className="slide_1 slide " style={{backgroundImage: "url('images/home-bg-1.jpg')"}}> 
                    <div className="slide-content">
                        <span className='slide_title'>Never Stop</span>
                        <span className='slide_name'>Exploring</span>
                        <p className="slide-details">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam minus blanditiis quo deserunt accusantium sit ipsa alias quas, explicabo ex natus ea asperiores rerum optio labore repudiandae? Molestiae, illum.
                        </p>
                        <button className="get-started">
                            Get Started
                        </button>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide_2 slide " style={{backgroundImage: "url('images/home-bg-2.jpg')"}}> 
                <div className="slide-content">
                    <span className='slide_title'>Make Tour</span>
                    <span className='slide_name'>Amazing</span>
                    <p className="slide-details">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam minus blanditiis quo deserunt accusantium sit ipsa alias quas, explicabo ex natus ea asperiores rerum optio labore repudiandae? Molestiae, illum.
                    </p>
                    <button className="get-started">
                        Get Started
                    </button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide_3 slide " style={{backgroundImage: "url('images/home-bg-3.jpg')"}}> 
                <div className="slide-content">
                    <span className='slide_title'>Explore The</span>
                    <span className='slide_name'>New World</span>
                    <p className="slide-details">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam minus blanditiis quo deserunt accusantium sit ipsa alias quas, explicabo ex natus ea asperiores rerum optio labore repudiandae? Molestiae, illum.
                    </p>
                    <button className="get-started">
                        Get Started
                    </button>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    </main>
  )
}

export default Main