import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center pa2'>
             <img alt='' src={imageUrl} />
        </div>
    )
}

  export default FaceRecognition;