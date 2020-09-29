import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Thumb from '../components/Thumb.js';
import BigThumb from '../components/BigThumb.js';

function Projects() {
    return (
        <Container className="text-center">
          <Row>
            <Col sm className="animate__animated animate__bounceInDown">
              <h1 className="display-5 color-cycle text-center m-5">Projects</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm>
              <a href="https://github.com/Project-Quest/SteamQuest" className="btn animate__animated animate__bounceIn">
                <Thumb>
                  <h3 className="teal-text">SteaM QuesT</h3>
                </Thumb>
              </a>
            </Col>
            <Col sm>
              <a href="https://github.com/Nightmare99/UnDanger" className="btn animate__animated animate__bounceIn">
                <Thumb>
                  <h3>Un<span className="blue-text">Danger</span></h3>
                </Thumb>
              </a>
            </Col>
            <Col sm>
              <a href="https://github.com/Nightmare99/HashFiend" className="btn animate__animated animate__bounceIn">
                <Thumb>
                  <h3><span className="red-text">Hash</span>Fiend</h3>
                </Thumb>
              </a>
            </Col>
            <Col sm>
              <a href="https://github.com/Nightmare99/BullsNCows" className="btn animate__animated animate__bounceIn">
                <Thumb>
                  <h3>BullsNCows</h3>
                </Thumb>
              </a>
            </Col>
            <Col sm>
              <a href="https://github.com/Nightmare99/Vapourizer" className="btn animate__animated animate__bounceIn">
                <Thumb>
                  <h3 className="magenta-text">Vapourizer</h3>
                </Thumb>
              </a>
            </Col>
            <Col sm>
              <a href="https://github.com/Nightmare99/LANMine" className="btn animate__animated animate__bounceIn">
                <Thumb>
                  <h3>LAN<span className="lime-text">Mine</span></h3>
                </Thumb>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="animate__animated animate__bounceInUp">
              Want more?<span className="color-cycle"><a href="https://github.com/Nightmare99"> Click here</a></span>
            </Col>
          </Row>
          <Row>
            <Col className="animate__animated animate__bounceInUp">
              <h1 className="display-5 color-cycle text-center m-5">Work Experience</h1>
            </Col>
          </Row>
          <Row>
            <Col sm className="animate__animated animate__bounceInUp">
              <BigThumb>
                  <h2>Python Django Web Developer Intern</h2>
                  <h3 className="gray-text">@ CloverBridge Technologies</h3>
                  <h5 className="cyan-text">01/05/2019 – 30/06/2019</h5>
                  <p>
                    As an intern, I was given training
                    in the Python Django framework and
                    the opportunity to work in one of
                    the projects that the company was
                    currently working on for an offshore
                    client. 
                  </p>
              </BigThumb>
            </Col>
          </Row>
          <Row>
            <Col sm className="animate__animated animate__bounceInUp">
              <BigThumb>
                  <h2>Web Developer Intern</h2>
                  <h3 className="gray-text">@ Astra Engineering and Solutions</h3>
                  <h5 className="cyan-text">01/06/2020 – 30/06/2020</h5>
                  <p>
                    As an intern, I was tasked to work
                    on a market analysis application
                    called SteamQuest to predict the
                    prices of items on the Steam
                    community market. Popular games
                    like PUBG, CSGO and DotA 2 were
                    taken and the prices of their items
                    were predicted for the next 30 days.
                  </p>
              </BigThumb>
            </Col>
          </Row>
        </Container>
    );
}

export default Projects;