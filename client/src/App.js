import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import ApiService from './ApiService';
import { addItems, addItem, savedItem } from './actions';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import MyItems from './components//MyItems/MyItems';
import Detail from './components/Detail/Detail';
import Navbar from './components//Navbar/Navbar';

function App () {
  //const items = useSelector(state => state.items_reducer);

  const dispatch = useDispatch();


  useEffect(() => {
    ApiService.getItems().then(data => dispatch(addItems(data)));
  }, [])


  function postItem (name, location, description, image, img) {
    return ApiService.postItem({
      name: name,
      location: location,
      image: image,
      description: description
    }).then(data => {
      console.log('data', data);
      ApiService.uploadImg(img, data._id);
      dispatch(addItem(data));
    });
  }


  return (
    <div className='App-container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/items' element={<MyItems />} />
          <Route path='/item/upload' element={<Form postItem={postItem} />} />
          <Route path='/item/:id' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
