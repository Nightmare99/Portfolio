import React from 'react';
import '../App.css';
import Resume from '../Resume.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import TypeIt from 'typeit-react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

function Home() {
    return (
        <Container className="p-3">
          <Row>
            <Col className="animate__animated animate__bounceInLeft">
              <h1 className="display-1 gray-text">I'm</h1>
              <h1 className="display-1">Vishal Kumar</h1>
              <a className="btn btn-lg btn-outline-light" href={Resume}>My Resume</a>
            </Col>
            <Col>
              <h1 className="display-4 gray-text animate__animated animate__bounceInRight">And I'm a</h1>
              <TypeIt
                element={"h3"} 
                options={{
                  loop: true,
                  speed: 200
                }}
                getBeforeInit={instance => {
                  instance
                    .pause(750)
                    .type("<span class='cyan-text'>Programmer</span>")
                    .pause(750)
                    .delete(10)
                    .pause(500)
                    .type("<span class='lime-text'>Gamer</span>")
                    .pause(750)
                    .delete(5)
                    .pause(500)
                    .type("<span class='magenta-text'>Musician</span>")
                    .pause(750)
                    .delete(8)
                    .pause(500);
                  return instance;
                }}
              />
              <br/>
              <h3 className="animate__animated animate__bounceInRight">(And yes, I really like the <span className="color-cycle"> RGB </span>color-cycle effect)</h3>
              <br/>
              <h3 className="gray-text animate__animated animate__bounceInRight">About me <span className="color-cycle">=&gt;</span></h3>
            </Col>
          </Row>
        </Container>
    );
}

export default Home;