import React, {useEffect} from 'react';
import "./features.css";
import Feature from "./Feature"
import { Navigation } from 'swiper';
import img1 from "./product-1.jpg"
import img2 from "./product-2.jpg"
import img3 from "./product-3.jpg"
import img4 from "./product-4.jpg"
import img5 from "./product-5.jpg"
import img6 from "./product-6.jpg"

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
                <Feature slideNum={1} image={img1}/>
            </SwiperSlide>
            <SwiperSlide>
                <Feature slideNum={2} image={img2}/>
            </SwiperSlide>
            <SwiperSlide>
                <Feature slideNum={3} image={img3}/>
            </SwiperSlide>
            <SwiperSlide>
                <Feature slideNum={4} image={img4}/>
            </SwiperSlide>
            <SwiperSlide>
                <Feature slideNum={5} image={img5}/>
            </SwiperSlide>
            <SwiperSlide>
                <Feature slideNum={6} image={img6}/>
            </SwiperSlide>
        </Swiper>
    </section>
    
  )
} 

export default Features