import React from 'react'
import AdventureElement from "./AdventureElement";
import "./adventure.css"
const Adventure = ({windowSize}) => {
  return (
    <section className="adventure" style={{padding: windowSize > 1334 ? "5rem 9%" : "5rem 1rem"}}>
        <h2 className='adventure-heading'>Adventure Idea!</h2>
        <div className="container"
        style={{justifyContent: windowSize > 1128 ? "flex-start" : "center"}}
        >
            <AdventureElement image="./images/category-1.jpg" title="Bungee Jump"/>
            <AdventureElement image="./images/category-2.jpg" title="Zip Lines"/>
            <AdventureElement image="./images/category-3.jpg" title="Canoeing"/>
            <AdventureElement image="./images/category-4.jpg" title="Kayaking"/>
        </div>
    </section>
  )
}

export default Adventure