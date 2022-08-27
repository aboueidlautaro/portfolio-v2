import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
