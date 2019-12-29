import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <header>
      <nav className="nav-wrapper black">
        <div className="container green-text green-accent-2">
          <a
            className="brand-logo"
            style={{
              fontFamily: "Metal Mania",
              fontSize: "50px",
              
            }}>
            Web Resume
          </a>
          <ul className="right nav-stuff hide-on-med-and-down">
            <li>
              <Link className="nav-el" to="/">
                Home
              </Link>
            </li>
            <li>
            <a href="#Projects" className="nav-el">
              The Projects
            </a>
            </li>
            <li>
             <a href="#About" className="nav-el">
               About
             </a>
            </li>
            <li>
            <a href="#Contact" className="nav-el">
            Contact Me
            </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
