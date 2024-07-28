import FooterVector from "../../assets/images/footer-vector.svg";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-top-inner">
              <ul className="footer-ul custom-d-flex">
                <li className="footer-li">
                  <div className="footer-li-inner">
                    <a className="footer-a" href="#">
                      Contact Us
                    </a>
                    <div className="cols">
                      <ul className="col-ul custom-d-flex">
                        <li className="col-li">
                          <a href="#" className="link">
                            Email Here
                          </a>
                        </li>
                        <li className="col-li">
                          <a href="#" className="link">
                            Phone Number Here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="footer-li">
                  <div className="footer-li-inner">
                    <a className="footer-a" href="#">
                      About
                    </a>
                    <div className="cols">
                      <ul className="col-ul">
                        <li className="col-li">
                          <a href="#" className="link">
                            About us
                          </a>
                        </li>
                        <li className="col-li">
                          <a href="#" className="link">
                            Terms &amp; Condition
                          </a>
                        </li>
                        <li className="col-li">
                          <a href="#" className="link">
                            Privacy Policy{" "}
                          </a>
                        </li>
                        <li className="col-li">
                          <a href="#" className="link">
                            Why Choose Us{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="footer-li">
                  <div className="footer-li-inner">
                    <a className="footer-a" href="#">
                      Follow Us
                    </a>
                    <div className="cols">
                      <ul className="col-ul">
                        <li className="col-li">
                          <a href="#" className="link">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </li>
                        <li className="col-li">
                          <a href="#" className="link">
                            <i className="fa-brands fa-facebook" />
                          </a>
                        </li>
                        <li className="col-li">
                          <a href="#" className="link">
                            <i className="fa-brands fa-x-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <img src={FooterVector} alt="Lamsa Vector" />
          </div>
        </div>
      </div>
    </>
  );
}
