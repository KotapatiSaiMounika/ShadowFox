import "./Footer.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT COLUMN */}
        <div className="footer-col">
          <h3>Sakthi Smiles</h3>
          <p>
            Specialized dental care for women, children, and families in Hosur.
            Trustworthy, compassionate, and professional.
          </p>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/treatments">Treatments</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* TOP TREATMENTS */}
        <div className="footer-col">
          <h4>Top Treatments</h4>
          <Link to="/treatments">Teeth Cleaning</Link>
          <Link to="/treatments">Orthodontics</Link>
          <Link to="/treatments">Root Canal Therapy</Link>
          <Link to="/treatments">Dental Implants</Link>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-col">
          <h4>Contact Info</h4>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>
              B2/8, SBM Layout, Anthivadi, Hosur,
              Tamil Nadu 635109, India
            </span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@sakthidentalclinic.in</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 9862890897<br />+91 9363298118</span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
  © 2026 Sakthi Dental Clinic. All rights reserved.
  <span> | </span>
  <Link to="/privacy-policy">Privacy Policy</Link>
</div>
    </footer>
  );
};

export default Footer;