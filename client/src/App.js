import './App.css';
import Dashboard from './components/Dashboard';
import ApiService from './ApiService';
import { useState, useEffect } from 'react';

function App () {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([])

  useEffect(() => {
    ApiService.getItems().then(data => setItems(data));
  }, [])

  function uploadImg (file) {
    ApiService.uploadImg(file)
      .then(data => setImages(prev => prev.concat(data)));
  }
  return (
    <Dashboard uploadImg={uploadImg} />
  );
}

export default App;
