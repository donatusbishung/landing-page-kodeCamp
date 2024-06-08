import React from "react";
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Projects from "./Pages/Projects/Projects";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
function Header() {
  const navigate = useNavigate();
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <div>
      <header className="fixed-top bg-light">
        <div className="container-sm justify-content-between d-flex align-items-center">
          <img src="logo.png" alt="" srcset="" className="img-fluid pt-2" />
          <nav
            ref={navRef}
            className=" d-flex justify-content-between p-3 align-items-center">
            <ul className="d-flex pt-2">
              <li
                className="__active __headerLi"
                onClick={() => {
                  navigate("/");
                }}>
                <a>MAIN</a>
              </li>
              <li
                className="__headerLi"
                onClick={() => {
                  navigate("/Gallery");
                }}>
                <a>GALLERY</a>
              </li>
              <li
                className="__headerLi"
                onClick={() => {
                  navigate("/Projects");
                }}>
                <a>PROJECTS</a>
              </li>
              <li className="__headerLi">
                <a>CERTIFICATIONS</a>
              </li>
              <li className="__headerLi">
                <a>CONTACTS</a>
              </li>
            </ul>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
