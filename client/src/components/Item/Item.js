import React from 'react'
import './style.css';


export default function Item ({ item }) {
  return (
    <div className='outside'>
      <div className='item-content'>
        <div className='image'></div>
        <div className='info'>
          <h4>{item.name}</h4>
          <p>{item.location}</p>
        </div>
      </div>
    </div>
  )
}
