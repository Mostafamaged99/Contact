import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer bg-primary text-white  text-center">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4">
                <div className="px-4 footerSecOne">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="px-4 footerSecTwo">
                  <h3>AROUND THE WEB</h3>
                  <div className="footerSecTwoIcons d-flex justify-content-center p-3 ">
                    <i class="fa-brands px-3 fa-facebook"></i>
                    <i class="fa-brands px-3 fa-twitter"></i>
                    <i class="fa-brands px-3 fa-linkedin"></i>
                    <i class="fa-solid px-3 fa-globe"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="px-4 footerSecThree">
                  <h3>ABOUT FREELANCER</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary text-center text-white py-3">
          <p>Copyright © Your Website 2021</p>
        </div>
      </>
    );
  }
}
