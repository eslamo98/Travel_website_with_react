import React from 'react'

const Order = ({image}) => {
  return (
    <div className='order'>
        <img src={image} alt="image" />
        <span className="order-name">Featured Tour order</span>
        <span className="order-details">Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Numquam, Eos.</span>
        <span className="order-price">$250 - $450</span>
        <a href="#" className='get-started order-btn'>Learn More</a>
    </div>
  )
}

export default Order