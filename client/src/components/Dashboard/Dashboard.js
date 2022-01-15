import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from '../Form/Form'
import MyItems from '../MyItems/MyItems'
import Navbar from '../Navbar/Navbar';


export default function Dashboard ({ postItem }) {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/items' element={<MyItems />} />
          <Route path='/items/upload' element={<Form postItem={postItem} />} />
        </Routes>
      </Router>
    </div>
  )
}

