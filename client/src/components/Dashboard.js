import React, { useState } from 'react';
import Form from './Form';


export default function Dashboard ({ postItem }) {

  return (
    <div>
      <Form postItem={postItem} />
    </div>
  )
}

