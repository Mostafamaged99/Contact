import React, { Component } from "react";
import img1 from "../../images/images.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center  bg-success text-white text-center">
          <div className="my-5">
            <img src={img1} alt="img1" className="w-100" />
            <h2 className="fw-bold">SART FRAMEWORK</h2>
            <div className="line ">
              <i class="fa-solid fa-star"></i>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </>
    );
  }
}
