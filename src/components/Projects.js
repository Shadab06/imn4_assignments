import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import proj1 from './proj1.jpg';
import proj2 from './proj2.jpg';
import proj3 from './proj3.jpg';

class Projects extends Component {
    render() {
        return (
            <div class="Projects">
                <h1>Projects</h1>
                <div class="proj-row">
                   <Container>
                       <Row>
                          <Col>
                          <h2> Project 1 </h2>
                          <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                          Just click “Edit Text” or double click me to add your own content and make changes
                          to the font. I’m a great place for you to tell a story and let your users know a
                          little more about you. </p>
                          </Col>
                          <Col>
                          <img src={proj1} classname="proj-img" alt="project-1" />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                          <h2> Project 2 </h2>
                          <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                          Just click “Edit Text” or double click me to add your own content and make changes
                          to the font. I’m a great place for you to tell a story and let your users know a
                          little more about you. </p>
                          </Col>
                          <Col>
                          <img src={proj2} classname="proj-img" alt="project-2" />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                          <h2> Project 3 </h2>
                          <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                          Just click “Edit Text” or double click me to add your own content and make changes
                          to the font. I’m a great place for you to tell a story and let your users know a
                          little more about you. </p>
                          </Col>
                          <Col>
                          <img src={proj3} classname="proj-img" alt="project-3" />
                          </Col>
                       </Row>
                   </Container>
                   </div>
            </div>
        )
    }
}

export default Projects
