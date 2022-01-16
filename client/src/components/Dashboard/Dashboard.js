import React from 'react';
import Item from '../Item/Item';
import './style.css';


export default function Dashboard ({ items }) {
  const itemList = [...items];
  console.log('itemList', itemList);

  return (
    <div className='items-content'>
      <div className='item-list'>
        {itemList.map((item, i) => <Item key={i} item={item} />)}
      </div>
    </div>
  )
}

