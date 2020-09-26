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
                <img src={Me} className="rounded-circle img-fluid p-3" alt="mee"/>
            </Col>
            <Col sm>
              <h1 className="display-4 cyan-text color-cycle">About me</h1>
              <h5 className="white-text">
                I'm a fun-loving creature who enjoys sleep and quality italian food. 
                If I'm not coding or learning something cool, I'm either working out, writing songs, 
                playing video games, or baking something drool-worthy in the oven.
              </h5>
              <h5 className="white-text">
                Currently, I'm on a quest to rediscover myself. 
              </h5>
              <h3 className="gray-text">My Projects <span className="color-cycle">=&gt;</span></h3>
            </Col>
          </Row>
        </Container>
    );
}

export default About;