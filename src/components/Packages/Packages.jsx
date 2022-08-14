import React from 'react';
import "./packages.css";
import Package from "./Package";
const Packages = ({windowSize}) => {
  return (
    <section id='packages' className='packages' style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
        <h2 className='package-heading'>
        Popular Packages
        </h2>
        <div className="packages-container">
            <Package image="images/img-1.jpg"/>
            <Package image="images/img-2.jpg"/>
            <Package image="images/img-3.jpg"/>
            <Package image="images/img-4.jpg"/>
            <Package image="images/img-5.jpg"/>
            <Package image="images/img-6.jpg"/>
            <Package image="images/img-2.jpg"/>
            <Package image="images/img-4.jpg"/>
            <Package image="images/img-5.jpg"/>
        </div>
    </section>
  )
}

export default Packages