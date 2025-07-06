import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm.js";
import LogoVector from "../../assets/images/Logo-vector-header.svg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./header.css";

export default function Header() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from src/data/services.json
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("Error fetching services:", error));

    const header = document.querySelector(".header");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Setup GSAP animations after services are loaded
    function animateToAutoHeight(element) {
      const curHeight = element.offsetHeight;
      element.style.height = "auto";
      const autoHeight = element.offsetHeight;
      element.style.height = curHeight + "px";
      gsap.to(element, {
        height: autoHeight,
        duration: 0.3,
        ease: "linear",
      });
    }

    function closeAllMenus(currentItem) {
      document.querySelectorAll(".menu-item-has-children").forEach((item) => {
        if (item !== currentItem) {
          const menu = item.querySelector(".sub-menu");
          const link = item.querySelector(".sub-menu li a");
          if (menu) {
            menu.classList.remove("site_megaMenu__Active");
            if (link) link.classList.remove("site_megaMenu__Active");
            gsap.to(menu, { height: 0, duration: 0.3, ease: "linear" });
            const items = menu.querySelectorAll(".sub-menu li");
            gsap.to(items, {
              opacity: 0,
              y: 20,
              duration: 0.2,
              ease: "linear",
            });
          }
        }
      });
    }

    document.querySelectorAll(".menu-item-has-children").forEach((item) => {
      const megaMenu = item.querySelector(".sub-menu");
      const navLink = item.querySelector("li a");
      if (!megaMenu) return;
      const items = megaMenu.querySelectorAll(".sub-menu li");
      gsap.set(items, { opacity: 0, y: 20 });

      item.addEventListener("mouseenter", () => {
        closeAllMenus(item);
        megaMenu.classList.add("site_megaMenu__Active");
        if (navLink) navLink.classList.add("site_megaMenu__Active");
        megaMenu.style.pointerEvents = "auto";
        animateToAutoHeight(megaMenu);
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.2,
          stagger: 0.1, // Stagger animation restored
          ease: "linear",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(megaMenu, { height: 0, duration: 0.3, ease: "linear" });
        gsap.to(items, {
          opacity: 0,
          y: 20,
          duration: 0.2,
          ease: "linear",
        });
        megaMenu.classList.remove("site_megaMenu__Active");
        if (navLink) navLink.classList.remove("site_megaMenu__Active");
        megaMenu.style.pointerEvents = "none";
      });
    });
  }, [services]); // Run this effect when services state changes

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
            <div className="offcanvas-body custom-body-offcanvas">
              <div className="header-right ms-auto">
                <ul className="custom-d-flex">
                  <li className="header-li">
                    <Link to="/Whatwedo">WHAT WE DO</Link>
                  </li>
                  <li className="header-li">
                    <Link to="/Whoweare">WHO WE ARE</Link>
                  </li>
                  <li
                    className="header-li menu-item-has-children"
                    style={{ position: "relative" }}
                  >
                    <a
                      href="javascript:void(0)"
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        padding: "20px 0",
                      }}
                    >
                      SERVICES{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="#CCCCCC"
                            strokeWidth="0.096"
                          />
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                              fill="#ffffff"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                    <ul
                      className="sub-menu services-dropdown-menu"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "fit-content",
                        background: "var(--background-color)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                        height: 0,
                        pointerEvents: "none",
                        zIndex: 1000,
                        margin: 0,
                        padding: 0,
                        listStyle: "none",
                      }}
                    >
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="dropdown-item"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="header-li">
                    <Link to="/">KNOWLEDGE</Link>
                  </li>
                  <li className="header-li">
                    <Link to="/">SUPPORT</Link>
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
