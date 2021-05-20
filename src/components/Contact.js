import React, { useState } from "react";
import "../App.css";
import { send } from "emailjs-com";

const Contact = () => {
  const [userDetails, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emptyField, setShow] = useState(false);

  const inputHandler = (event) => {
    console.log("Previous ", userDetails);
    console.log(`target value${event.target.value}`);
    setDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
    console.log("After", userDetails);
  };

  const submitHandler = (event) => {
    if (
      userDetails.firstName !== "" &&
      userDetails.lastName !== "" &&
      userDetails.email !== "" &&
      userDetails.subject !== ""
    ) {
      setShow(false);
      console.log("submit");
      event.preventDefault();
      let template = {
        to_name:"Shataxi Dubey",
        from_name: userDetails.firstName,
        reply_to: "",
        message: JSON.stringify(userDetails),
      };
      send(
        "service_qx8l1og",
        "template_yxf3fgr",
        template,
        "user_U7M3PtiqewhW657jagBM3"
      )
        .then((response) => {
          console.log("SUCCESS", response.status, response.text);
        })
        .catch((error) => {
          console.log("FAILED", error);
        });
    } else {
      setShow(true);
      console.log("fill all the fields");
    }
    setDetails({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="container">
      <div className="row m-5 p-5 content">
        <div className="col-6 gy-5 ">
          <h1 className="text-right">Contact</h1>
          <p className="text-left">Looking forward to hearing from you</p>
          <h5 className="text-left">Phone</h5>
          <h5 className="text-left font-weight-light">123-456-789</h5>
          <h5 className="text-left">Email</h5>
          <a
            href="#info"
            className="float-left font-weight-light noTextDecorationOnly "
          >
            info@mysite.com
          </a>
        </div>
        <div className="col-6 gy-5">
          <div className="row">
            {emptyField && (
              <p className="d-flex justify-content-center bg-warning">
                Fill the starred fields
              </p>
            )}
            <div className="col-3 p-0 mx-5">
              <label htmlFor="firstName " className=" float-left">
                First Name*
              </label>
              <br></br>
              <input
                type="text"
                value={userDetails.firstName}
                name="firstName"
                onChange={inputHandler}
              ></input>
            </div>
            <div className="col-3 p-0 mx-5">
              <label htmlFor="lastName" className="float-left">
                Last Name*
              </label>
              <br></br>
              <input
                type="text"
                value={userDetails.lastName}
                name="lastName"
                onChange={inputHandler}
              ></input>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 p-0 mx-5">
              <label htmlFor="email" className="float-left">
                Email*
              </label>
              <br></br>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={inputHandler}
                className="float-left"
              ></input>
            </div>
            <div className="col-3 mx-5 p-0">
              <label htmlFor="subject" className="float-left">
                Subject*
              </label>
              <br></br>
              <input
                type="text"
                name="subject"
                value={userDetails.subject}
                onChange={inputHandler}
              ></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col p-0 mx-5">
              <label htmlFor="message" className="float-left">
                Message
              </label>
              <br></br>
              <textarea
                type="text"
                name="message"
                value={userDetails.message}
                onChange={inputHandler}
              ></textarea>
            </div>
            <div className="col submitDiv">
              <button className="rounded-circle" onClick={submitHandler}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
