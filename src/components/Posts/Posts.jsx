import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Post from "./Post";
// Import Swiper styles
import 'swiper/css';
import "./posts.css"
const Posts = ({windowSize}) => {
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
    <section id='blogs' className="posts" style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
        <h2 className="posts-heading">
        Client's posts
        </h2>
        <Swiper
        slidesPerView={numOfReviews}
        spaceBetween={40}

        loop
        >
            <SwiperSlide>
                <Post image="images/img-1.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Post image="images/img-2.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Post image="images/img-3.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Post image="images/img-4.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Post image="images/img-5.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Post image="images/img-6.jpg"/>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Posts