import React from 'react'
import "./outdoor.css"
const Outdoor = ({windowSize}) => {
  return (
    <section id='outdoor' className="outdoor" style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
        <div className="outdoor-cont">
            <div className="outdoor-img">
                <img src="./images/about-img.jpg" alt="outdoor image" />
            </div>
            <div className="outdoor-info">
                <span className="outdoor-heading">
                Memorable Outdoor Experiences
                </span>
                <p className="outdoor-details">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Neque Voluptates Corrupti Natus Necessitatibus Beatae Voluptatibus, Deserunt Quo Soluta Minima Libero Laborum, Corporis Error Esse Vitae Placeat Blanditiis Reiciendis Vel? Minima.
                    <br /><br />
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Provident Dicta Doloremque Placeat Porro, Ipsam Quia At Beatae Atque Odit Iste?
                </p>
                <button className="get-started">Read More</button>
            </div>
        </div>
    </section>
  )
}

export default Outdoor