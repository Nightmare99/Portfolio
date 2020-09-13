import React from 'react';
import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import Home from './screens/Home.js';
import About from './screens/About.js';
function App() {
  return (
    <AwesomeSlider buttons={true} animation="fallAnimation" bullets={false} fillParent={true} infinite={false}>
      <div className="max dark-background">
        <Home/>
      </div>
      <div className="max dark-background">
        <About/>
      </div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
  );
}

export default App;
