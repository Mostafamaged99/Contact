import React, { Component } from "react";
import img1 from "../../images/port1.png";
import img2 from "../../images/port2.png";
import img3 from "../../images/port3.png";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="potfolio bg-light">
          <div className="header pt-4 fw-bold text-center">
            <h2 className="fw-bold">PORTFOLIO COMPONENT</h2>
            <div className="line ">
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="container">
            <div className="row gy-4 py-3">
              <div className="col-md-4">
                <img className="w-100 border rounded-3" src={img1} alt="" />
              </div>
              <div className="col-md-4">
                <img className="w-100 border rounded-3" src={img2} alt="" />
              </div>
              <div className="col-md-4">
                <img className="w-100 border rounded-3" src={img3} alt="" />
              </div>
              <div className="col-md-4">
                <img className="w-100 border rounded-3" src={img1} alt="" />
              </div>
              <div className="col-md-4">
                <img className="w-100 border rounded-3" src={img2} alt="" />
              </div>
              <div className="col-md-4">
                <img className="w-100 border rounded-3" src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
