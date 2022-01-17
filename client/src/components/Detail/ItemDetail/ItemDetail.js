import React from 'react'
import './style.css'

export default function ItemDetail ({ item }) {
  return (
    <div className='detail'>
      <div className='detail-content'>
        <div className='detail-image'>
          <img className='photo' src={item.image} />
        </div>
        <div className='detail-info'>
          <h1>{item.name}</h1>
          <h2 className='detail-location' >{item.location}</h2>
          <div className='detail-descripiton'>
            <h3>{item.description}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
