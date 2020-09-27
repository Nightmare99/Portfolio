import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { 
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaSoundcloud
} from 'react-icons/fa';

function Contact() {
    return (
        <Container className="p-3">
          <Row>
            <Col sm>
                <h1 className="display-1 gray-text">Reach out</h1>
                <h3 className="display-4"> Let's make your next product <span className="color-cycle">together</span></h3>
            </Col>
            <Col sm className="justify-content-center text-center">
                <p className="text-center display-5">
                    Here are a few links you can use to reach me:
                    <br/><br/>
                    <a href="mailto:vishal.s.kumar99@gmail.com" className="display-4 p-3"><FaEnvelope/></a>
                    <a href="https://www.github.com/Nightmare99" className="display-4 p-3"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/vishal-kumar-91236a154/" className="display-4 p-3"><FaLinkedin/></a>
                    <a href="https://soundcloud.com/m_n_q" className="display-4 p-3"><FaSoundcloud/></a>
                </p>
            </Col>
          </Row>
        </Container>
    );
}

export default Contact;