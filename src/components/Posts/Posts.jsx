import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Post from "./Post";
// Import Swiper styles
import 'swiper/css';
import "./posts.css"
import img1 from "./img-1.jpg"
import img2 from "./img-2.jpg"
import img3 from "./img-3.jpg"
import img4 from "./img-4.jpg"
import img5 from "./img-5.jpg"
import img6 from "./img-6.jpg"


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
                <Post image={img1}/>
            </SwiperSlide>
            <SwiperSlide>
                <Post image={img2}/>
            </SwiperSlide>
            <SwiperSlide>
                <Post image={img3}/>
            </SwiperSlide>
            <SwiperSlide>
                <Post image={img4}/>
            </SwiperSlide>
            <SwiperSlide>
                <Post image={img5}/>
            </SwiperSlide>
            <SwiperSlide>
                <Post image={img6}/>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Posts