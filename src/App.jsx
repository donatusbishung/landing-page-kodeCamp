import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Gallery from "./Components/Pages/Gallery/Gallery";
import Projects from "./Components/Pages/Projects/Projects";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
