import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TypeIt from 'typeit-react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { 
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaSoundcloud,
    FaReact
} from 'react-icons/fa';

function Contact() {
    return (
        <Container className="p-3">
          <Row>
            <Col sm className="animate__animated animate__bounceInDown">
                <h1 className="display-1 gray-text">Reach out</h1>
                <h3 className="display-4">
                    Let's make your next product
                    <TypeIt
                        element={"span"}
                        options={{
                            speed: 200
                        }}
                        getBeforeInit={instance => {
                        instance
                            .pause(750)
                            .type("<span class='color-cycle'>together</span>");
                        return instance;
                        }}
                    />
                </h3>
                
                <br/><br/>
                <p className="text-center display-5 animate__animated animate__bounceInUp">
                    <h4>Here are a few links you can use to reach me:</h4>
                    <br/><br/>
                    <a href="mailto:vishal.s.kumar99@gmail.com" className="display-4 p-3"><FaEnvelope/></a>
                    <a href="https://www.github.com/Nightmare99" className="display-4 p-3"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/vishal-kumar-91236a154/" className="display-4 p-3"><FaLinkedin/></a>
                    <a href="https://soundcloud.com/m_n_q" className="display-4 p-3"><FaSoundcloud/></a>
                </p>
                <br/><br/>
                <p className="text-center animate__animated animate__fadeIn">Website made with <FaReact/></p>
            </Col>
          </Row>
        </Container>
    );
}

export default Contact;