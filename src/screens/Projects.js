import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Thumb from '../components/Thumb.js';

function Projects() {
    return (
        <Container className="p-3">
          <Row>
            <Col sm>
              <h1 className="display-3 lime-text text-center m-5">Projects</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm>
              <a href="https://github.com/Project-Quest/SteamQuest" className="btn">
                <Thumb>
                  <h3 className="teal-text">SteaM QuesT</h3>
                </Thumb>
              </a>
            </Col>
            <Col sm>
              <a href="https://github.com/Nightmare99/UnDanger" className="btn">
                <Thumb>
                  <h3>Un<span className="blue-text">Danger</span></h3>
                </Thumb>
              </a>
            </Col>
            <Col sm>
              <a href="https://github.com/Nightmare99/HashFiend" className="btn">
                <Thumb>
                  <h3><span className="red-text">Hash</span>Fiend</h3>
                </Thumb>
              </a>
            </Col>
            <Col sm>
              <a href="https://github.com/Nightmare99/BullsNCows" className="btn">
                <Thumb>
                  <h3>BullsNCows</h3>
                </Thumb>
              </a>
            </Col>
            <Col sm>
              <a href="https://github.com/Nightmare99/Vapourizer" className="btn">
                <Thumb>
                  <h3 className="magenta-text">Vapourizer</h3>
                </Thumb>
              </a>
            </Col>
            <Col sm>
              <a href="https://github.com/Nightmare99/CoronaBot" className="btn">
                <Thumb>
                  <h3>Corona<span className="lime-text">Bot</span></h3>
                </Thumb>
              </a>
            </Col>
          </Row>
        </Container>
    );
}

export default Projects;