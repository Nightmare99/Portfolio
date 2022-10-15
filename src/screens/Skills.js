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
                    <h1 className="display-4 color-cycle">Technical<span role="img" aria-label="trophy">🏆</span></h1>
                    <ul>
                        <li>REST APIs</li>
                        <li>Databases: Mongodb, Couchbase, Oracle, Postgres</li>
                        <li>Back-end: Express, Flask, Django, Spring MVC</li>
                        <li>Front-end: React, Vue, Angular, ExtJS</li>
                        <li>Mobile dev: React Native, Android Studio</li>
                        <li>Electron</li>
                    </ul>
                </div>
                <div className="animate__animated animate__bounceInUp">
                    <h1 className="display-4 color-cycle">Non-technical<span role="img" aria-label="guitar">🎸</span></h1>
                    <ul>
                        <li>Chess</li>
                        <li>Guitar</li>
                        <li>Music Composition</li>
                        <li>Valorant (peak diamond 3)</li>
                    </ul>
                    <p className="display-6">Honestly, there's a lot more. This page wouldn't be enough.</p>
                </div>
                <h3 className="gray-text">Projects <span className="color-cycle">&rArr;</span></h3>
            </Col>
          </Row>
        </Container>
    );
}

export default Skills;