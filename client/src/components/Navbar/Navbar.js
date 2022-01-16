import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './MenuList';
import './style.css';



export default function Navbar () {
  const list = [...Menu];
  return (
    <nav>
      <div className='logo'>
        <div className='blue'>
          <h1 className='for'>For</h1>
        </div>
        <div className='nude'>
          <h1 className='free'>Free</h1>
        </div>
      </div>
      <div className='menu'>
        <div className='home dec'>
          <Link to={`${list[0].url}`}>
            <div className='icon i-home'>
              <div className='title'>
                <p>Home</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='my-items dec'>
          <Link to={`${list[1].url}`}>
            <div className='icon i-items'>
              <div className='title'>
                <p>My Items</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='new dec'>
          <Link to={`${list[2].url}`}>
            <div className='icon i-new'>
              <div className='title'>
                <p>Give away!</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}
