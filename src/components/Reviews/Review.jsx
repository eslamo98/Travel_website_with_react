import React from 'react'

const Review = ({image}) => {
  return (
    <div className='review'>
        <div className="review-body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptas, soluta dolores quis molestiae ratione adipisci, dignissimos placeat nobis, sapiente quia nam non? Ducimus facilis error, ad obcaecati minus officiis?
        </div>
        <div className="review-writer">
            <img className='writer-img' src={image} alt="person" />
            <div className="writer-info">
                <span className="writer-name">Jhon Doe</span>
                <span className="writer-title">Designer</span>

            </div>
        </div>
    </div>
  )
}

export default Review