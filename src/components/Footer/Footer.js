import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="box-container">
      <div className="box">
        <a href="#" className="navbar-logo ">
          Roxana Dumitrescu
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consectetur aperiam sed, dolorem magnam sequi inventore harum, autem
          vitae in consequatur accusantium quidem totam dolor voluptates
          delectus. Similique, totam at.
        </p>
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
      </div>

      <div class="box">
        <h3>Adresa</h3>
        <div class="address">
          <p>Bucuresti</p>
          <p>
            <i>Telefon:</i> <b>(+40)74 123 4560</b>
          </p>
          <p>
            <i>Email:</i> <b>email@gmail.com</b>
          </p>
        </div>
      </div>

      <div class="box">
        <h3>Linkuri</h3>
        <div class="links">
          <a href="#">
            <i class="fas fa-arrow-right"></i>Acasa
          </a>
          <a href="#">
            <i class="fas fa-arrow-right"></i>Despre
          </a>
          <a href="#">
            <i class="fas fa-arrow-right"></i>Produse
          </a>
          <a href="#">
            <i class="fas fa-arrow-right"></i>Evenimente si Workshopuri
          </a>
          <a href="#">
            <i class="fas fa-arrow-right"></i>Contact
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
