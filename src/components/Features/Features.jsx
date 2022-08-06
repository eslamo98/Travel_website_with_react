import React, {useEffect} from 'react';
import "./features.css";
import Feature from "./Feature"
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Features = ({windowSize}) => {
  const [numOfImages, setNumOfImages]=React.useState(4);
  
  useEffect(() => {
    if(windowSize > 1192) {
      setNumOfImages(4)
    } else if(windowSize < 1192 && windowSize > 877) {
      setNumOfImages(3)
    } else if(windowSize < 877 && windowSize > 577) {
      setNumOfImages(2)
    } else {
      setNumOfImages(1)
    }
  
    
  }, [windowSize])

  
  
  return ( 
    <section className="features" id='features'>
      <h3 className="features-heading">
        Featured Products
      </h3>
        <Swiper
        modules={[Navigation]}
        slidesPerView={numOfImages}
        spaceBetween={50}
        navigation={true}
        
        >
            <SwiperSlide>
                <Feature slideNum={1} image="images/product-1.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Feature slideNum={2} image="images/product-2.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Feature slideNum={3} image="images/product-3.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Feature slideNum={4} image="images/product-4.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Feature slideNum={5} image="images/product-5.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Feature slideNum={6} image="images/product-6.jpg"/>
            </SwiperSlide>
        </Swiper>
    </section>
    
  )
} 

export default Features