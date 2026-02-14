import FooterVector from "../../assets/images/footer-vector.svg";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./footer.css";

export default function Footer() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services || []))
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  return (
    <>
      <div className="footer">
        <div className="footer-inner custom-container">
          <div className="footer-top">
            <div className="footer-top-inner">
              <ul className="footer-ul custom-d-flex">
                <li className="footer-li">
                  <div className="footer-li-inner">
                    <a className="footer-a" href="#">
                      Contact Us
                    </a>
                    <div className="cols">
                      <ul className="col-ul">
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
                          <Link to="/who-we-are" className="link">
                            Who We Are
                          </Link>
                        </li>
                        <li className="col-li">
                          <Link to="/what-we-do" className="link">
                            What we do
                          </Link>
                        </li>
                        <li className="col-li">
                          <a href="#" className="link">
                            Terms & Condition
                          </a>
                        </li>
                        <li className="col-li">
                          <a href="#" className="link">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="footer-li">
                  <div className="footer-li-inner">
                    <a className="footer-a" href="#">
                      Services
                    </a>
                    <div className="cols">
                      <ul className="col-ul">
                        {services.map((service) => (
                          <li key={service.id} className="col-li">
                            <Link
                              to={`/services/${service.slug}`}
                              className="link"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
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
                      <ul className="col-ul custom-d-flex">
                        <li className="col-li">
                          <a href="#" className="link">
                            <svg
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.7675 5.26172C14.2275 5.26172 13.6875 5.71172 13.6875 6.34172C13.6875 6.97172 14.1375 7.42172 14.7675 7.42172C15.3975 7.42172 15.8475 6.97172 15.8475 6.34172C15.7575 5.71172 15.3075 5.26172 14.7675 5.26172Z"
                                fill="white"
                              />
                              <path
                                d="M9.99984 6.61133C7.56984 6.61133 5.58984 8.59133 5.58984 11.0213C5.58984 13.4513 7.56984 15.4313 9.99984 15.4313C12.4298 15.4313 14.4098 13.4513 14.4098 11.0213C14.4998 8.59133 12.5198 6.61133 9.99984 6.61133ZM9.99984 13.9013C8.46984 13.9013 7.11984 12.6413 7.11984 11.0213C7.11984 9.49133 8.37984 8.14133 9.99984 8.14133C11.5298 8.14133 12.8798 9.40133 12.8798 11.0213C12.8798 12.6413 11.6198 13.9013 9.99984 13.9013Z"
                                fill="white"
                              />
                              <path
                                d="M13.6 1.93164H6.4C3.43 1.93164 1 4.36164 1 7.33164V14.5316C1 17.5016 3.43 19.9316 6.4 19.9316H13.6C16.57 19.9316 19 17.5016 19 14.5316V7.33164C19 4.36164 16.57 1.93164 13.6 1.93164ZM17.29 14.5316C17.29 16.6016 15.58 18.2216 13.6 18.2216H6.4C4.33 18.2216 2.71 16.5116 2.71 14.5316V7.33164C2.71 5.26164 4.42 3.64164 6.4 3.64164H13.6C15.67 3.64164 17.29 5.35164 17.29 7.33164V14.5316Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="col-li">
                          <a href="#" className="link">
                            <svg
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_1738_1758)">
                                <path
                                  d="M5.61542 11.536H7.6476V19.9022C7.6476 20.0673 7.78144 20.2012 7.94662 20.2012H11.3923C11.5574 20.2012 11.6913 20.0673 11.6913 19.9022V11.5754H14.0274C14.1793 11.5754 14.3071 11.4614 14.3245 11.3106L14.6793 8.23056C14.689 8.14582 14.6622 8.06096 14.6055 7.99739C14.5487 7.93375 14.4675 7.89733 14.3823 7.89733H11.6914V5.96664C11.6914 5.38463 12.0048 5.0895 12.6229 5.0895C12.711 5.0895 14.3823 5.0895 14.3823 5.0895C14.5475 5.0895 14.6813 4.9556 14.6813 4.79049V1.96334C14.6813 1.79816 14.5475 1.66432 14.3823 1.66432H11.9576C11.9405 1.66348 11.9025 1.66211 11.8465 1.66211C11.4258 1.66211 9.96343 1.7447 8.80827 2.8074C7.52836 3.98505 7.70627 5.3951 7.74879 5.63958V7.89727H5.61542C5.45025 7.89727 5.31641 8.03111 5.31641 8.19629V11.2369C5.31641 11.4021 5.45025 11.536 5.61542 11.536Z"
                                  fill="white"
                                  stroke="white"
                                  stroke-width="0.8"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1738_1758">
                                  <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                    transform="translate(0 0.931641)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </li>
                        <li className="col-li">
                          <a href="#" className="link">
                            <svg
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.3383 2.61914H18.1603L11.9642 9.67403L19.2032 19.2441H13.5224L9.0748 13.4285L3.98301 19.2441H1.16105L7.72516 11.6985L0.792969 2.61914H6.61479L10.633 7.93178L15.3383 2.61914ZM14.3506 17.5878H15.915L5.79274 4.21416H4.11183L14.3506 17.5878Z"
                                fill="white"
                              />
                            </svg>
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
