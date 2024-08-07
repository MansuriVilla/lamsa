import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm.js";
import LogoVector from "../../assets/images/Logo-vector.png";
import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg header-inner">
        <div className="container-fluid custom-container">
          <a
            href="/"
            className="custom-d-flex navbar-brand custom-a"
            id="offcanvasNavbarLabel"
          >
            <span>
              <img src={LogoVector} alt="Lamsa Logo" />
            </span>
            <span>
              <p>LAMSA INFOSOLUTIONS</p>
              <p> Your Safety Net in a Digital World.</p>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end offcanvas-lg"
            tabIndex={"-1"}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <a
                href="/"
                className="custom-d-flex offcanvas-title custom-a"
                id="offcanvasNavbarLabel"
              >
                <span>
                  <img src={LogoVector} alt="Lamsa Logo" />
                </span>
                <span>
                  <p>LAMSA INFOSOLUTIONS</p>
                  <p> Your Safety Net in a Digital World.</p>
                </span>
              </a>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body custom-body-offcanvas">
              <div className="header-right ms-auto">
                <ul className="custom-d-flex">
                  <li className="header-li">
                    <a href="">WHAT WE DO</a>
                  </li>
                  <li className="header-li">
                    <a href="">WHO WE ARE</a>
                  </li>
                  <li className="header-li">
                    <a href="">KNOWLEDGE</a>
                  </li>
                  <li className="header-li">
                    <a href="">SUPPORT</a>
                  </li>
                  <li className="header-li">
                    <a href="">BROADBAND SERVICES</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
  // <div className="header">
  //   <div className="header-inner custom-container custom-d-flex">
  //     <div className="header-left"></div>
  //   </div>
  // </div>;
}
