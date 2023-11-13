import React from 'react';
import "./orders.css";
import Order from "./Order";
import img1 from "./serv-1.png"
import img2 from "./serv-2.png"
import img3 from "./serv-3.png"
import img4 from "./serv-4.png"
import img5 from "./serv-5.png"
import img6 from "./serv-6.png"


const Orders = ({windowSize}) => {
  return (
    <section className='orders' style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
        <h2 className='orders-heading'>
        Popular orders
        </h2>
        <div className="orders-container">
            <Order image={img1}/>
            <Order image={img2}/>
            <Order image={img3}/>
            <Order image={img4}/>
            <Order image={img5}/>
            <Order image={img6}/>
            
        </div>
    </section>
  )
}

export default Orders