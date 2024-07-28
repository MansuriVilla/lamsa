import LogoVector from "../../assets/images/Logo-vector.png";
import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner custom-container custom-d-flex">
        <div className="header-left">
          <a href="/" className="custom-d-flex">
            <span>
              <img src={LogoVector} alt="Lamsa Logo" />
            </span>
            <span>
              <p>LAMSA INFOSOLUTIONS</p>
              <p> Your Safety Net in a Digital World.</p>
            </span>
          </a>
        </div>
        <div className="header-right">
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
  );
}
