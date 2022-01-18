import React from 'react'
import './style.css'

export default function ItemDetail ({ item }) {
  return (
    <div className='detail'>
      <div className='detail-content'>
        <div className='detail-image'>
          <img className='detail-photo' src={item.image} />
          <h4 className='detail-location' >{item.location}</h4>
        </div>
        <div className='detail-info'>
          <div className='detail-title'>
            <h1 className='detail-name'>{item.name}</h1>
          </div>
          <div className='detail-descripiton'>
            <h4 className='detail-description'>{item.description}</h4>
          </div>
          <div className='detail-form-div'>
            <form className='detail-form'>
              <label>Send a message if you want this item!</label>
              <input className='reply' type='text' />
              <button className='ask'>Ask For Item</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
