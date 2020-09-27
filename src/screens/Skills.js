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
            <Col sm>
                <h1 className="display-1 color-cycle">What I'm Good at</h1>
            </Col>
            <Col sm>
                <h1 className="display-4">Technical</h1>
                <ul>
                    <li>Backend: Express, Flask, Django</li>
                    <li>Frontend: React, Vue</li>
                    <li>Mobile dev: React Native, Android Studio</li>
                    <li>Electron</li>
                    <li>REST APIs</li>
                </ul>
                <h1 className="display-4">Non-technical</h1>
                <ul>
                    <li>Chess</li>
                    <li>Guitar</li>
                    <li>Music Composition</li>
                </ul>
                <p className="display-6">Honestly, there's a lot more. This page wouldn't be enough.</p>
            </Col>
          </Row>
        </Container>
    );
}

export default Skills;