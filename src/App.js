import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: '9828451d8efd480a87da3c92d435dd61'
});

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

class App extends Component {
  constructor() {     //state for user entered value use and update it
    super()
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click')
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, "https://samples.clarifai.com/face-det.jpg")
      .then(
      function (response) { 
        console.log(response);
      }
    )
  }
  render() {
    return (
      <div className="App" >
        <Particles className='particles'
              params={particlesOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        < ImageLinkForm onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition / >
      </div>
    )
  }
}

export default App;
