import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about bg-success d-flex justify-content-center align-content-center text-white  py-5 ">
          <div className="container ">
            <h2 className="fw-bold mt-5 fw-bold text-center">
              ABOUT COMPONENT
            </h2>
            <div className="line text-center pb-3">
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-6">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
