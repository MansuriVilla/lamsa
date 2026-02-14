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
import Whoweare from "./pages/whoweeare.jsx";
import Support from "./pages/Support.jsx";
import ServicesPage from "./pages/ServicDetail.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import BlogsCollection from "./blogs/BlogsCollection.jsx";
import ServicesCollection from "./collections/ServiceCollection/ServicesCollection.jsx";

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
        <Route path="/pages/who-we-are" element={<Whoweare />} />
        <Route path="/collections/services" element={<ServicesCollection />} />
        <Route path="/services/:slug" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogsCollection />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />

        <Route path="/pages/support" element={<Support />} />
      </Routes>
      <GetinTouch />
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}
