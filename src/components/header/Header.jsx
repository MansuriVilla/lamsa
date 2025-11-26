import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm.js";
import LogoVector from "../../assets/images/Logo-vector-header.svg";
import BluredLayer from "../BluredLayer/BluredLayer";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./header.css";

export default function Header() {
  const [services, setServices] = useState([]);
  const headerRef = useRef(null);
  const menuCleanupRef = useRef([]); // To store cleanup functions

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services || []))
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  // Scroll effect
  // Scroll effect
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold -> Hide
        header.classList.remove("header-visible");
        header.classList.add("header-hidden");
      } else {
        // Scrolling up or at top -> Show
        header.classList.remove("header-hidden");
        header.classList.add("header-visible");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Mega Menu Animation – safe for HMR
  useEffect(() => {
    const menuItems = headerRef.current?.querySelectorAll(
      ".menu-item-has-children"
    );
    if (!menuItems || services.length === 0) return;

    // Clear previous listeners
    menuCleanupRef.current.forEach((cleanup) => cleanup());
    menuCleanupRef.current = [];

    const animateToAutoHeight = (el) => {
      const curHeight = el.offsetHeight;
      el.style.height = "auto";
      const autoHeight = el.offsetHeight;
      el.style.height = curHeight + "px";
      gsap.to(el, { height: autoHeight, duration: 0.3, ease: "power1.out" });
    };

    const closeAllMenus = (currentItem) => {
      menuItems.forEach((item) => {
        if (item !== currentItem) {
          const menu = item.querySelector(".sub-menu");
          if (menu) {
            menu.classList.remove("site_megaMenu__Active");
            gsap.to(menu, { height: 0, duration: 0.3 });
            const links = menu.querySelectorAll("li");
            gsap.to(links, { opacity: 0, y: 20, duration: 0.2 });
          }
        }
      });
    };

    menuItems.forEach((item) => {
      const megaMenu = item.querySelector(".sub-menu");
      const link = item.querySelector("a"); // The main <a> that triggers dropdown
      if (!megaMenu) return;

      const items = megaMenu.querySelectorAll("li");
      gsap.set(items, { opacity: 0, y: 20 });

      const onMouseEnter = () => {
        closeAllMenus(item);
        megaMenu.classList.add("site_megaMenu__Active");
        if (link) link.classList.add("site_megaMenu__Active");
        megaMenu.style.pointerEvents = "auto";
        animateToAutoHeight(megaMenu);
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        });
      };

      const onMouseLeave = () => {
        gsap.to(megaMenu, { height: 0, duration: 0.3, ease: "power1.in" });
        gsap.to(items, { opacity: 0, y: 20, duration: 0.2 });
        setTimeout(() => {
          megaMenu.classList.remove("site_megaMenu__Active");
          if (link) link.classList.remove("site_megaMenu__Active");
          megaMenu.style.pointerEvents = "none";
        }, 300);
      };

      item.addEventListener("mouseenter", onMouseEnter);
      item.addEventListener("mouseleave", onMouseLeave);

      // Store for cleanup
      menuCleanupRef.current.push(() => {
        item.removeEventListener("mouseenter", onMouseEnter);
        item.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    return () => {
      menuCleanupRef.current.forEach((cleanup) => cleanup());
      menuCleanupRef.current = [];
    };
  }, [services]);

  return (
    <div className="header" ref={headerRef}>
      <BluredLayer />
      <nav className="navbar navbar-expand-lg header-inner">
        <div className="container-fluid custom-container">
          <Link to="/" className="custom-d-flex navbar-brand custom-a">
            <img src={LogoVector} alt="Lamsa Logo" />
          </Link>

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
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-body custom-body-offcanvas">
              <div className="header-right ms-auto">
                <ul className="custom-d-flex">
                  <li className="header-li" key="whatwedo">
                    <Link to="/Whatwedo">WHAT WE DO</Link>
                  </li>
                  <li className="header-li" key="whoweare">
                    <Link to="/Whoweare">WHO WE ARE</Link>
                  </li>

                  <li
                    className="header-li menu-item-has-children position-relative"
                    key="services"
                  >
                    <Link
                      to="#"
                      className="d-flex align-items-center gap-2 py-3"
                      onClick={(e) => e.preventDefault()}
                    >
                      SERVICES
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Link>

                    <ul
                      className="sub-menu services-dropdown-menu"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        background: "var(--background-color)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        borderRadius: "8px",
                        overflow: "hidden",
                        height: 0,
                        pointerEvents: "none",
                        zIndex: 1000,
                        minWidth: "220px",
                      }}
                    >
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="dropdown-item px-4 py-3"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="header-li" key="knowledge">
                    <Link to="/">KNOWLEDGE</Link>
                  </li>
                  <li className="header-li" key="support">
                    <Link to="/support">SUPPORT</Link>
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
