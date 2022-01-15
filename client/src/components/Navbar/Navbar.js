import React from 'react';
import { Menu } from './MenuList';


export default function Navbar () {
  const list = [...Menu];
  return (
    <nav>
      <div className='logo'>Logo goes here</div>
      <div className='menu'>
        <ul className='list'>
          {list.map(el => {
            return (
              <li key={el.title}>
                <a href={el.url}>{el.title}</a>
              </li>
            )
          })
          }
        </ul>
      </div>
    </nav>
  )
}
