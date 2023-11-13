import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from "./Review";
// Import Swiper styles
import 'swiper/css';
import "./reviews.css"
import img1 from "./pic-1.png"
import img2 from "./pic-2.png"
import img3 from "./pic-3.png"
import img4 from "./pic-4.png"
import img5 from "./pic-5.png"
import img6 from "./pic-6.png"

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
                <Review image={img1}/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image={img2}/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image={img3}/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image={img4}/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image={img5}/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image={img6}/>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Reviews