import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
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
            <h4 className="d-inline font-weight-light mx-1">Editor</h4>
          </div>
        </div>
        <div className="col-4 gy-2">
          <NavLink
            to="/resume"
            className="noTextDecoration "
            activeClassName="active"
          >
            Resume
          </NavLink>
          <NavLink to="/projects" className="noTextDecoration">
            Projects
          </NavLink>
          <NavLink to="/contact" className="noTextDecoration">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

