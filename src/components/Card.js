import React from 'react'
import { Fragment } from 'react'

const Card = () => {
  return (
    <Fragment>
      <div className='card-container'>
        <img
          src='https://via.placeholder.com/300x200'
          alt='Card Image'
          className='card-image'
        />
        <div className='card-content'>
          <h2 className='card-title'>Card Title</h2>
          <p className='card-description'>
            This is a short description of the card content. It provides more
            details and context.
          </p>
          <a href='#' className='card-button'>
            Read More
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default Card
