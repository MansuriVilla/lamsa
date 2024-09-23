import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Whatwedo from "./pages/Whatwedo.jsx";
import Whoweare from "./pages/whoweeare.jsx";
import "./assets/css/App.css";
import "./assets/js/app.js";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Whatwedo" element={<Whatwedo />} />
          <Route path="Whoweare" element={<Whoweare />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}
