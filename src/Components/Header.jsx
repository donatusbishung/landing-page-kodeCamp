import React from "react";
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Projects from "./Pages/Projects/Projects";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav className="container-sm d-flex justify-content-between p-3 align-items-center">
          <img src="logo.png" alt="" srcset="" />
          <ul className="d-inline-flex">
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
        </nav>
      </header>
    </div>
  );
}

export default Header;
