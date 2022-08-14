import React from 'react'

const AdventureElement = ({image, title}) => {
  return (
    <div className="adventure-element">
        <img className='adventure-img' src={image} alt="Bungee Jump" />
        <span className="adventure-title">{title}</span>
        <p className='adventure-details'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Laborum, Id.</p>
        <button className='get-started'>Read More</button>
    </div>
  )
}

export default AdventureElement