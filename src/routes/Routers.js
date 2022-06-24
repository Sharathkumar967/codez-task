import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import Service from "../pages/Service";
import Api from "../components/api/Api";
import LandingPage from "../pages/LandingPage";
import Navbar from "../components/navbar/Navbar";
import Form from "../components/Form";

const Routers = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/service" element={<Service />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
