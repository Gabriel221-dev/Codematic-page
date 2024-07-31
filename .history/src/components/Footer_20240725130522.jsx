import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__pages">
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
        </div>

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
