import React from 'react';
import '../App.css';
import Me from '../me.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

function About() {
    return (
        <Container className="p-3">
          <Row>
            <Col sm>
                <img src={Me} className="rounded-circle img-fluid p-3 animate__animated animate__bounceInLeft" alt="mee"/>
            </Col>
            <Col sm className="animate__animated animate__bounceInRight">
              <h1 className="display-4 cyan-text color-cycle">About me</h1>
              <h5 className="white-text">
                I'm a fun-loving creature who enjoys sleep and quality italian food. 
                If I'm not coding or learning something cool, I'm either working out, writing songs, 
                playing video games, or baking something drool-worthy in the oven.
              </h5>
              <h5 className="white-text">
                Currently, I'm pursuing an M. Tech. degree at BITS while working at NielsenIQ. 
              </h5>
              <h3 className="gray-text">My Skills <span className="color-cycle">=&gt;</span></h3>
            </Col>
          </Row>
        </Container>
    );
}

export default About;