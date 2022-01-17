import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item/Item';
import './style.css';


export default function Dashboard () {

  const itemList = useSelector(state => state.items_reducer)
  return (
    <div className='items-content'>
      <div className='item-list'>
        {itemList.map((item, i) => <Item key={i} item={item} />)}
      </div>
    </div>
  )
}

