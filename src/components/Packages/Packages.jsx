import React from 'react';
import "./packages.css";
import Package from "./Package";
import img1 from "./img-1.jpg"
import img2 from "./img-2.jpg"
import img3 from "./img-3.jpg"
import img4 from "./img-4.jpg"
import img5 from "./img-5.jpg"
import img6 from "./img-6.jpg"

const Packages = ({windowSize}) => {
  return (
    <section id='packages' className='packages' style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
        <h2 className='package-heading'>
        Popular Packages
        </h2>
        <div className="packages-container">
            <Package image={img1}/>
            <Package image={img2}/>
            <Package image={img3}/>
            <Package image={img4}/>
            <Package image={img5}/>
            <Package image={img6}/>
            <Package image={img2}/>
            <Package image={img4}/>
            <Package image={img5}/>
        </div>
    </section>
  )
}

export default Packages