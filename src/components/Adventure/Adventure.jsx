import React from 'react'
import AdventureElement from "./AdventureElement";
import "./adventure.css"
import img1 from "./category-1.jpg"
import img2 from "./category-2.jpg"
import img3 from "./category-3.jpg"
import img4 from "./category-4.jpg"

const Adventure = ({windowSize}) => {
  return (
    <section className="adventure" style={{padding: windowSize > 1334 ? "5rem 9%" : "5rem 1rem"}}>
        <h2 className='adventure-heading'>Adventure Idea!</h2>
        <div className="container"
        style={{justifyContent: windowSize > 1128 ? "flex-start" : "center"}}
        >
            <AdventureElement image={img1} title="Bungee Jump"/>
            <AdventureElement image={img2} title="Zip Lines"/>
            <AdventureElement image={img3} title="Canoeing"/>
            <AdventureElement image={img4} title="Kayaking"/>
        </div>
    </section>
  )
}

export default Adventure