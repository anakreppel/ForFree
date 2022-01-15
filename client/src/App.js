import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import ApiService from './ApiService';
import { useState, useEffect } from 'react';

function App () {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    ApiService.getItems().then(data => setItems(data));
  }, [])

  /* function uploadImg (file) {
    ApiService.uploadImg(file)
      .then(data => setImages(prev => prev.concat(data)));
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
    <div>
      <Dashboard postItem={postItem} />
    </div>
  );
}

export default App;
