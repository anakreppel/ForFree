import React from 'react';
import { Menu } from '../../MenuList';
import './style.css';
import { useState } from 'react';


export default function Form ({ postItem }) {
  const [img, setImg] = useState(null);
  const ref = React.useRef();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});

  function submitHandler (e) {
    e.preventDefault();
    if (!name || !location || !description) return alert("Please fill in all the form befor send it")
    const image = img.name.split('.').slice(-1)[0];
    console.log('image', image);
    postItem(name, location, description, image, img);
    setImg(null);
    ref.current.value = "";
    setName('');
    setLocation('');
    setDescription('');
    return alert('New Item Submited!');
  }

  function fileHandler (e) {
    const file = e.target.files[0];
    if (file.type !== "image/png" && file.type !== "image/jpg" && file.type !== "image/jpeg") {
      setImg(null);
      e.target.value = null;
      return alert('Only .png, .jpg and .jpeg format allowed!');
    } else {
      setImg(file);
    }
    console.log(file);
  }

  function itemHandler (e) {
    setName(e.target.value);
  }

  function locationHandler (e) {
    setLocation(e.target.value);
  }

  function descriptionHandler (e) {
    setDescription(e.target.value);
  }

  return (
    <div className='photo-upload' >
      <form className='photo-form' onSubmit={submitHandler}>
        <div className='photo-input'>
          <label>Select Image</label>
          <input className='photo-select'
            type='file' onChange={fileHandler} ref={ref}
            id='image-uploads'
          />
        </div>
        <div className='items-inputs'>
          <div className='photo-item'>
            <label>Item</label>
            <input className='photo-item-inputs' type='text' placeholder='Tell us what your item is'
              value={name}
              onChange={itemHandler}
            />
          </div>
          <div className='photo-location' >
            <label>location</label>
            <input className='photo-item-inputs' type='text' placeholder='e.g Charlottenburg - 10587'
              value={location}
              onChange={locationHandler}
            />
          </div>
          <div className='photo-description'>
            <label>Description</label>
            <input className='photo-item-inputs' type='text'
              placeholder='Tell us more about your item, e.g. use condition, size, colour. '
              value={description}
              onChange={descriptionHandler}
            />
          </div>

          <button className='photo-submit' type='submit'>submit</button>

        </div>
      </form>
    </div>
  )
}