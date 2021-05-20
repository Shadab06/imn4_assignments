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
              <a href="https://www.linkedin.com/company/rehabilitation-society-of-visually-impaired/">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="" />
              </a>
              <a href="#twitterLink">
                <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" />
              </a>
            </div>
            <div className="col">
              <p>
                &copy;2023 By Innovative Minds.<br></br>Proudly created with
                &nbsp;
                <a href="https://www.linkedin.com/company/rehabilitation-society-of-visually-impaired/">
                  RSVI
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
