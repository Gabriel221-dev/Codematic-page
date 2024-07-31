import { Link } from "react-router-dom";
import "./Footer.css";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <container className="section1">
          <img
            className="footer__logo"
            src="/public/Images/codematic-logo-dark-1536x351.png.png"
            alt="Logo"
            loading="lazy"
            width="160"
          />

          <ul className="footer__navigation">
            <li className="footer__link">
              <Link className="link-anchor footer__anchor" to="">
                About Us
              </Link>
            </li>
            <li className="footer__link">
              <Link className="link-anchor footer__anchor" to="">
                Contact Us
              </Link>
            </li>
            <li className="footer__link">
              <Link className="link-anchor footer__anchor" to="">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </container>
        <container className="section2">
          <div className="section2">
            <div className="">
              <div className="bottom">
                <div className="icon">
                  <BsTwitterX />
                </div>
                <div className="icon">
                  <FaLinkedin />
                </div>
                <div className="icon">
                  <FaFacebook />
                </div>
              </div>
            </div>
          </div>
        </container>
      </div>
    </footer>
  );
};

export default Footer;
