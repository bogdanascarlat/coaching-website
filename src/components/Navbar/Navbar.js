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
          <a href="#home">Acasa</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Despre</a>
        </li>
        <li className="p__opensans">
          <a href="#solutions">Solutii</a>
        </li>
        <li className="p__opensans">
          <a href="#events">Evenimente si Workshopuri</a>
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
                  Acasa
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Despre
                </a>
              </li>
              <li>
                <a href="#solutions" onClick={() => setToggleMenu(false)}>
                  Solutii
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Evenimente si Workshopuri
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
