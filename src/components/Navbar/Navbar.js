import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p>Roxana Dumitrescu</p>
      </div>
      <ul className="navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#solutions">Solutions</a>
        </li>
        <li className="p__opensans">
          <a href="#events">Events and Workshops</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="social-links">
        <li className="p__opensans">
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
        <li className="p__opensans">
          <a href="#">
            <FaFacebookSquare />
          </a>
        </li>
        <li className="p__opensans">
          <a href="#">
            <FaInstagramSquare />
          </a>
        </li>
        <li className="p__opensans">
          <a href="#">
            <FaTwitterSquare />
          </a>
        </li>
      </ul>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          color="var(--color-black)"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#solutions" onClick={() => setToggleMenu(false)}>
                  Solutions
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Events and Workshops
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
