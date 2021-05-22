import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  const changeResumeColor = () => {
    document.getElementById('resume').style.color = 'blue';
    document.getElementById('projects').style.color = 'grey';
    document.getElementById('contact').style.color = 'grey';
  }

  const changeProjectColor = () => {
    document.getElementById('resume').style.color = 'grey';
    document.getElementById('projects').style.color = 'blue';
    document.getElementById('contact').style.color = 'grey';
  }

  const changeContactColor = () => {
    document.getElementById('resume').style.color = 'grey';
    document.getElementById('projects').style.color = 'grey';
    document.getElementById('contact').style.color = 'blue';
  }

  return (
    <div>
      <div className="row mx-0 my-0 ">
        <div className="col-7 mx-3 d-flex justify-content-start">
          <div className="d-inline-block">
            <div className="roundedCircle1 d-inline-block"></div>
          </div>
          <div className="my-2">
            <NavLink to="/" className="noTextDecorationOnly">
              <h4 className="d-inline">Innovative Minds</h4>
            </NavLink>
          </div>
        </div>
        <div className="links col-3 gy-1">
          <NavLink
            to="/resume"
            id="resume"
            className="noTextDecoration "
            activeClassName="active"
            onClick={changeResumeColor}
          >
            Resume
          </NavLink>
          <NavLink to="/projects" id="projects" className="noTextDecoration" onClick={changeProjectColor}>
            Projects
          </NavLink>
          <NavLink to="/contact" id="contact" className="noTextDecoration" onClick={changeContactColor}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
