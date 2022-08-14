import React, {useEffect} from 'react'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./partners.css";
const Partners = ({windowSize}) => {
    const [numOfPartners, setNumOfPartners]=React.useState(3);
  
    useEffect(() => {
      if(windowSize > 1000) {
        setNumOfPartners(4)
      } else if(windowSize < 1000 && windowSize > 750) {
        setNumOfPartners(3)
      } else if(windowSize < 750 && windowSize > 500) {
        setNumOfPartners(2)
      } else {
        setNumOfPartners(1)
      }
    
      
    }, [windowSize])
  return (
    <section className="partners" style={{margin: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
        <Swiper
        modules={[Navigation]}
      slidesPerView={numOfPartners}
      navigation={true}
      loop
    >
        <SwiperSlide>
            <img src="images/client-logo-1.png" alt="" width="174"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="images/client-logo-2.png" alt="" width="174"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="images/client-logo-3.png" alt="" width="174"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="images/client-logo-4.png" alt="" width="174"/>
        </SwiperSlide>
    </Swiper>
    </section>
  )
}

export default Partners