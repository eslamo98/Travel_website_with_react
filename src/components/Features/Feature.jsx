import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faEye, faShare, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Feature = ({image, slideNum}) => {

    const showIcons = () => {
        document.querySelector(`.feature-btns-${slideNum}`).classList.add("feature-btns-up");
        console.log(slideNum, "on")
    }
    
    const hideIcons = () => {
        document.querySelector(`.feature-btns-${slideNum}`).classList.remove("feature-btns-up");
        console.log(slideNum, "Leaving")
    }
        

  return (
    <div className='feature' onMouseOver={showIcons} onMouseLeave={hideIcons}>
        
        <div className="img-btns-container" >
            <img src={image} alt="product" />
            <div className={`feature-btns feature-btns-${slideNum}`} >
                <a className='btn-cont'><FontAwesomeIcon icon={faShoppingCart} /></a>
                <a className='btn-cont'><FontAwesomeIcon icon={faEye} /></a>
                <a className='btn-cont'><FontAwesomeIcon icon={faShare} /></a>
                
                
            </div>
        </div> 
        <div className="feature-details">
            <span className="feature-name">Survival Kits</span>
            <span className="feature-price">$5.00 - $25.00</span>
            <span className="feature-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
            </span>
        </div>
    </div>
  )
}

export default Feature