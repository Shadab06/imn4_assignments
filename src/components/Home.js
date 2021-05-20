import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Projects from './components/Projects.js';
import { Container, Row, Col } from 'react-bootstrap';
import profile from './profile.png';
import { useHistory } from 'react-router-dom';

const Home = (props) =>  {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
               <img src={profile} classname="profile" alt="Profile Pic" />
            </Col>
            <Col>
              <div class="mainpage">
                 <h1> Hello </h1>
                 <h3> A Bit About Me </h3>
                 <p> I'm a paragraph. Click here to add your own text and edit me.
                 I’m a great place for you to tell a story and let your users know a little more about you. </p>
                 <button onClick={() => history.push('/Resume.js')} class="main-button resume-btn"> Resume </button>
                 <button onClick={() => history.push('/Projects.js')} class="main-button project-btn"> Projects </button>
                  <button onClick={() => history.push('/Contact.js')} class="main-button contact-btn"> Contact </button>
               </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Home;
