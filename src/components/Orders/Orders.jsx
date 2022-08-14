import React from 'react';
import "./orders.css";
import Order from "./Order";
const Orders = ({windowSize}) => {
  return (
    <section className='orders' style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
        <h2 className='orders-heading'>
        Popular orders
        </h2>
        <div className="orders-container">
            <Order image="images/serv-1.png"/>
            <Order image="images/serv-2.png"/>
            <Order image="images/serv-3.png"/>
            <Order image="images/serv-4.png"/>
            <Order image="images/serv-5.png"/>
            <Order image="images/serv-6.png"/>
            
        </div>
    </section>
  )
}

export default Orders