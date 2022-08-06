import React from 'react'

const Package = ({image}) => {
  return (
    <div className='package'>
        <img src={image} alt="image" />
        <span className="package-name">Featured Tour Package</span>
        <span className="package-details">Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Numquam, Eos.</span>
        <span className="package-price">$250 - $450</span>
        <a href="#" className='get-started package-btn'>Learn More</a>
    </div>
  )
}

export default Package