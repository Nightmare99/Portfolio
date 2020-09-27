import React from 'react';
import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import Home from './screens/Home.js';
import About from './screens/About.js';
import Skills from './screens/Skills.js';
import Projects from './screens/Projects.js';
import Contact from './screens/Contact.js';

function App() {
  return (
    <div className="no-scroll">
      <AwesomeSlider className="black" buttons={true} organicArrows={true} animation="fallAnimation" bullets={false} fillParent={true} infinite={false}>
        <div className="max dark-background border-cycle">
          <Home/>
        </div>
        <div className="max dark-background border-cycle">
          <About/>
        </div>
        <div className="max dark-background border-cycle">
          <Skills/>
        </div>
        <div className="max dark-background border-cycle">
          <Projects/>
        </div>
        <div className="max dark-background border-cycle">
          <Contact/>
        </div>
      </AwesomeSlider>
    </div>
  );
}

export default App;
