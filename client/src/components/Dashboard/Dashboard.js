import React from 'react';
import Item from '../Item/Item';
import './style.css';


export default function Dashboard ({ items, getItem }) {
  const itemList = [...items];
  return (
    <div className='items-content'>
      <div className='item-list'>
        {itemList.map((item, i) => <Item key={i} item={item} getItem={getItem} />)}
      </div>
    </div>
  )
}

