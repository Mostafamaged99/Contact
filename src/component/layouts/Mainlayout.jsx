import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default class Mainlayout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }
}
