import React from 'react'
import { useParams } from 'react-router-dom';


import './style.css';

export default function Detail ({ items }) {
  const { id } = useParams();

  return (
    <div >{id}
    </div>
  )
}
