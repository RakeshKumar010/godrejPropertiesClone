import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import HomesDetailsPage from "../pages/HomesDetailsPage";
import NavBar from "../components/NavBar";

const Loyout = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="properties-details" element={<HomesDetailsPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Loyout;
