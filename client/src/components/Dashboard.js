import React, { useState } from 'react'


export default function Dashboard ({ uploadImg }) {
  const [img, setImg] = useState('');
  const [imgname, setImgname] = useState('Choose Image');
  const [uploadedFile, setUploadedFile] = useState({});

  function fileHandler (e) {
    setImg(e.target.files[0]);
    console.log(e.target.files[0]);
    setImgname(e.target.files[0].name);
  }

  function submitHandler (e) {
    e.preventDefault();
    uploadImg(img);
    setImgname('Choose Image');
    setImg('');

  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input type='file' onChange={fileHandler} />
          <label>{imgname}</label>
        </div>
        <button type='submit'>submit</button>
      </form>

    </div>
  )
}

