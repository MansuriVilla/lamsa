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
import BlogDetail from "./pages/BlogDetail.jsx";
import GetinTouch from "./components/GetinTouch/GetinTouch";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import "./assets/css/App.css";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Whatwedo" element={<Whatwedo />} />
        <Route path="/Whoweare" element={<Whoweare />} />
        <Route path="/services/:slug" element={<ServicesPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <GetinTouch />
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}
