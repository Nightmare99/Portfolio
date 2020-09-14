import React from 'react';
import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import Home from './screens/Home.js';
import About from './screens/About.js';
import Projects from './screens/Projects.js';

function App() {
  return (
    <div className="no-scroll">
      <AwesomeSlider buttons={true} organicArrows={true} animation="fallAnimation" bullets={false} fillParent={true} infinite={false}>
        <div className="max dark-background">
          <Home/>
        </div>
        <div className="max dark-background">
          <About/>
        </div>
        <div className="max dark-background">
          <Projects/>
        </div>
        <div>4</div>
      </AwesomeSlider>
    </div>
  );
}

export default App;
