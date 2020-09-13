import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <Col>
              <h1 className="display-1 gray-text">I'm</h1>
              <h1 className="display-1">Vishal Kumar</h1>
            </Col>
            <Col>
              <h1 className="display-4 gray-text">And I'm a</h1>
              <TypeIt
                element={"h3"}
                options={{
                  loop: true,
                  speed: 200
                }}
                getBeforeInit={instance => {
                  instance
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
              <h3 className="gray-text">About me <span className="color-cycle">=&gt;</span></h3>
            </Col>
          </Row>
        </Container>
    );
}

export default Home;