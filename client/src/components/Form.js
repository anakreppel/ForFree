import React from 'react';
import { useState } from 'react';


const Form = ({ uploadImg }) => {
  const [img, setImg] = useState(null);
  const ref = React.useRef();
  const [imgname, setImgname] = useState('Choose Image');
  const [uploadedFile, setUploadedFile] = useState({});
  function fileHandler (e) {
    const file = e.target.files[0];
    if (file.type !== "image/png" && file.type !== "image/jpg" && file.type !== "image/jpeg") {
      setImg(null);
      e.target.value = null;
      return alert('Only .png, .jpg and .jpeg format allowed!')
    } else {
      setImg(file);
    }
    console.log(file);
    setImgname(e.target.files[0].name);
  }

  function submitHandler (e) {
    e.preventDefault();
    uploadImg(img);
    setImgname('Choose Image');
    setImg(null);
    ref.current.value = "";
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='file' onChange={fileHandler} ref={ref} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Form
