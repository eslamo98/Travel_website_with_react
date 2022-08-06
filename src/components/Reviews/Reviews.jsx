import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from "./Review";
// Import Swiper styles
import 'swiper/css';
import "./reviews.css"
const Reviews = ({windowSize}) => {
    const [numOfReviews, setNumOfReviews]=React.useState(3);
  
    useEffect(() => {
      if(windowSize > 912) {
        setNumOfReviews(3)
      } else if(windowSize < 912 && windowSize > 620) {
        setNumOfReviews(2)
      }  else {
        setNumOfReviews(1)
      }
    
      
    }, [windowSize])
  return (
    <section id='Reviews' className="reviews" style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
        <h2 className="reviews-heading">
        Client's Reviews
        </h2>
        <Swiper
        slidesPerView={numOfReviews}
        spaceBetween={50}

        loop
        >
            <SwiperSlide>
                <Review image="images/pic-1.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image="images/pic-2.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image="images/pic-3.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image="images/pic-4.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image="images/pic-5.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image="images/pic-6.png"/>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Reviews