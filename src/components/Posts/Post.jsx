import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar,faUser } from '@fortawesome/free-solid-svg-icons'


const Post = ({image}) => {
  return (
    <div className='post'>
          <div className="post-body">
              <img className='post-img' src={image} alt="" />
              <div className="post-date">
                <a href='#' className="post-link">
                  <span className="date">
                    <span className="date-icon">
                    <FontAwesomeIcon icon={faCalendar} />
                    </span>
                    21st may, 2021 
                  </span>
                </a>
                <a href='#' className="post-link">
                  <span className="role">
                    <span className="date-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    By Admin
                  </span> 
                </a>
              </div>
          </div>
          <div className="post-info">
              <span className="post-name">Blog title goes here.</span>
              <span className="post-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</span>
              <a href="#" className="get-started">Read More</a>
          </div>
    </div>
  )
}

export default Post