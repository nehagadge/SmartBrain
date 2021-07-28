import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
      <div>
        <p className='f4 b white'>
          {'This app detects faces in pictures. Just give it a try!'}
        </p>
        <div className='center'>
          <div className='form  center br4 shadow-5'>
            <input className='f5 w-100 center' type='text' onChange={onInputChange}/>
            <button
              className='grow pa3 f5 link pv2 dib white b bg-dark-pink'
              onClick={onButtonSubmit}
            >Detect</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ImageLinkForm;