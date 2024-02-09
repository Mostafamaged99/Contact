import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact container">
          <div className="header py-4 fw-bold text-center">
            <h2 className="fw-bold">CONATCT SECTION</h2>
            <div className="line ">
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control my-3"
            placeholder="userName"
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="userAge"
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="userEmail"
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="userPassword"
          />
          <button className="btn btn-success mb-5">Send Message</button>
        </div>
      </>
    );
  }
}
