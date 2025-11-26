import LogoVector from "../../assets/images/Logo-vector-header.svg";
import BluredLayer from "../BluredLayer/BluredLayer";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./header.css";

export default function Header() {
  const [services, setServices] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuCleanupRef = useRef([]); // To store cleanup functions

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services || []))
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  // Scroll effect
  const isMenuOpenRef = useRef(isMenuOpen);
  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

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

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100 &&
        !isMenuOpenRef.current
      ) {
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
        // Only trigger hover on desktop (when mobile menu is NOT open)
        if (window.innerWidth > 991) {
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
        }
      };

      const onMouseLeave = () => {
        if (window.innerWidth > 991) {
          gsap.to(megaMenu, { height: 0, duration: 0.3, ease: "power1.in" });
          gsap.to(items, { opacity: 0, y: 20, duration: 0.2 });
          setTimeout(() => {
            megaMenu.classList.remove("site_megaMenu__Active");
            if (link) link.classList.remove("site_megaMenu__Active");
            megaMenu.style.pointerEvents = "none";
          }, 300);
        }
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileSubmenuOpen(false); // Close submenu when closing main menu
  };

  const toggleMobileSubmenu = (e) => {
    e.preventDefault();
    setMobileSubmenuOpen(!mobileSubmenuOpen);
  };

  // Mobile Submenu Animation
  useEffect(() => {
    const mobileSubmenu = headerRef.current?.querySelector(
      ".services-dropdown-menu"
    );
    if (!mobileSubmenu) return;

    const items = mobileSubmenu.querySelectorAll("li");

    if (mobileSubmenuOpen) {
      // Open animation
      gsap.to(mobileSubmenu, {
        height: "auto",
        duration: 0.3,
        ease: "power1.out",
      });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
        overwrite: true, // Ensure we overwrite any conflicting animations
      });
    } else {
      // Close animation
      gsap.to(items, {
        opacity: 0,
        y: 20,
        duration: 0.2,
        overwrite: true,
      });
      gsap.to(mobileSubmenu, { height: 0, duration: 0.3, ease: "power1.in" });
    }
  }, [mobileSubmenuOpen]);

  return (
    <div className="header" ref={headerRef}>
      <BluredLayer />
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={LogoVector} alt="Lamsa Logo" />
          </Link>

          <button
            className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <div className={`mobile-menu-container ${isMenuOpen ? "open" : ""}`}>
            <div className="mobile-menu-body">
              <div className="header-right">
                <ul className="nav-list">
                  <li className="header-li" key="whatwedo">
                    <Link to="/Whatwedo" onClick={closeMenu}>
                      WHAT WE DO
                    </Link>
                  </li>
                  <li className="header-li" key="whoweare">
                    <Link to="/Whoweare" onClick={closeMenu}>
                      WHO WE ARE
                    </Link>
                  </li>

                  <li
                    className={`header-li menu-item-has-children position-relative ${
                      mobileSubmenuOpen ? "submenu-open" : ""
                    }`}
                    key="services"
                  >
                    <Link
                      to="#"
                      className="d-flex align-items-center gap-2 py-3"
                      onClick={toggleMobileSubmenu}
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
                        style={{
                          transform: mobileSubmenuOpen
                            ? "rotate(180deg)"
                            : "none",
                          transition: "transform 0.3s",
                        }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Link>

                    <ul
                      className={`sub-menu services-dropdown-menu ${
                        mobileSubmenuOpen ? "mobile-visible" : ""
                      }`}
                    >
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="dropdown-item px-4 py-3"
                            onClick={closeMenu}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="header-li" key="knowledge">
                    <Link to="/" onClick={closeMenu}>
                      KNOWLEDGE
                    </Link>
                  </li>
                  <li className="header-li" key="support">
                    <Link to="/support" onClick={closeMenu}>
                      SUPPORT
                    </Link>
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
