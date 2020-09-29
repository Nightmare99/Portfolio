import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

function Skills() {
    return (
        <Container className="p-3">
          <Row>
            <Col sm className="animate__animated animate__bounceInLeft">
                <h1 className="display-1 color-cycle">What I'm good at</h1>
            </Col>
            <Col sm>
                <div className="animate__animated animate__bounceInDown">
                    <h1 className="display-4">Technical</h1>
                    <ul>
                        <li>Backend: Express, Flask, Django</li>
                        <li>Frontend: React, Vue</li>
                        <li>Mobile dev: React Native, Android Studio</li>
                        <li>Electron</li>
                        <li>REST APIs</li>
                    </ul>
                </div>
                <div className="animate__animated animate__bounceInUp">
                    <h1 className="display-4">Non-technical</h1>
                    <ul>
                        <li>Chess</li>
                        <li>Guitar</li>
                        <li>Music Composition</li>
                    </ul>
                    <p className="display-6">Honestly, there's a lot more. This page wouldn't be enough.</p>
                </div>
            </Col>
          </Row>
        </Container>
    );
}

export default Skills;