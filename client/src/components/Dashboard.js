import React, { useState } from 'react';
import Form from './Form';


export default function Dashboard ({ uploadImg }) {

  return (
    <div>
      <Form uploadImg={uploadImg} />
    </div>
  )
}

