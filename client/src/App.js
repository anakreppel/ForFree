import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import ApiService from './ApiService';
import { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import MyItems from './components//MyItems/MyItems';
import Detail from './components/Detail/Detail';
import Navbar from './components//Navbar/Navbar';

function App () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    ApiService.getItems().then(data => setItems(data));
  }, [])


  /* async function getItem (id) {
    try {
      const item = await ApiService.getOneItem(id);
      return item;
    } catch (e) {
      console.log(e);
    }
  } */

  function postItem (name, location, description, image, img) {
    return ApiService.postItem({
      name: name,
      location: location,
      image: image,
      description: description
    }).then(data => {
      console.log('data', data);
      ApiService.uploadImg(img, data._id);
      setItems(prev => prev.concat(data));
    });
  }

  return (
    <div className='App-container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard items={items} />} />
          <Route path='/items' element={<MyItems />} />
          <Route path='/item/upload' element={<Form postItem={postItem} />} />
          <Route path='/item/:id' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
