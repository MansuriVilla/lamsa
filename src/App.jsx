import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Whatwedo from "./pages/Whatwedo.jsx";
import Whoweare from "./pages/whoweeare.jsx";
import Support from "./pages/Support.jsx";
import ServicesPage from "./pages/ServicDetail.jsx";
import "./assets/css/App.css";
import "./assets/js/app.js";

function DynamicTitle() {
  const location = useLocation();
  const [services, setServices] = useState([]); // Define state for services

  // Fetch services data
  useEffect(() => {
    fetch("/services.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch services data");
        return response.json();
      })
      .then((data) => {
        setServices(data.services || []); // Store services array
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  // Set document title based on route
  useEffect(() => {
    let pageTitle = "LAMSA INFOSOLUTIONS";
    if (location.pathname === "/") {
      pageTitle += " | Home";
    } else if (location.pathname.toLowerCase().includes("whatwedo")) {
      pageTitle += " | What We Do";
    } else if (location.pathname.toLowerCase().includes("whoweare")) {
      pageTitle += " | Who We Are";
    } else if (location.pathname.startsWith("/services/")) {
      const slug = location.pathname.split("/services/")[1];
      const service = services.find((s) => s.slug === slug);
      pageTitle += service ? ` | ${service.title}` : " | Service";
    }
    document.title = pageTitle;
  }, [location, services]);

  return null;
}

export default function App() {
  return (
    <Router>
      <DynamicTitle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Whatwedo" element={<Whatwedo />} />
        <Route path="/Whoweare" element={<Whoweare />} />
        <Route path="/services/:slug" element={<ServicesPage />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}
