import React from 'react'
import './style.css';
import { Menu } from '../../MenuList';



export default function Item ({ item }) {
  const list = [...Menu];
  const ref = list[3].url + item._id;

  return (
    <div className='outside'>
      <div className='item-content'>
        <div className='image'>
          <img className='photo' src={item.image} />
        </div>
        <div className='info'>
          <div className='text'>
            <h4 className='text-name'>{item.name}</h4>
            <p className='location' >{item.location}</p>
          </div>
          <div className='description'>
            <a href={ref} >
              <p>+ Detail</p> </a>
          </div>
        </div>
      </div>
    </div>
  )
}
