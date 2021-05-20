import React, { Component } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <hr></hr>
          <div className="row footer">
            <div className="col">
              <h4>Phone</h4>
              <p>123-456-789</p>
            </div>
            <div className="col">
              <h4>Email</h4>
              <p>info@mysite.com</p>
            </div>
            <div className="col">
              <h4>Follow Me</h4>
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="" />
              <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" />
            </div>
            <div className="col">
              <p>
                &copy;2023 By Nicol Rider.<br></br>Proudly created with &nbsp;
                <a href="wix.com">InnovativeMinds.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

