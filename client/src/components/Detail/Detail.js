import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';
import './style.css';

export default function Detail () {
  const { id } = useParams();
  const items = useSelector(state => state.items_reducer);
  const item = items.filter(el => el._id === id)[0];
  console.log('item', item);
  return items.map((item, i) =>
    item._id === id ? <ItemDetail key={i} item={item} /> : <p key={i}></p>)
}
