import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm.js";
import LogoVector from "../../assets/images/Logo-vector-header.svg";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  useEffect(() => {
    const header = document.querySelector(".header");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run this effect only once when the component mounts

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
                  <p>Your Safety Net in a Digital World.</p>
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
                    <Link to="Whatwedo">WHAT WE DO</Link>
                  </li>
                  <li className="header-li">
                    <Link to="Whoweare">WHO WE ARE</Link>
                  </li>
                  <li className="header-li">
                    <Link to="/">KNOWLEDGE</Link>
                  </li>
                  <li className="header-li">
                    <Link to="/">SUPPORT</Link>
                  </li>
                  <li className="header-li">
                    <Link to="/">BROADBAND SERVICES</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
