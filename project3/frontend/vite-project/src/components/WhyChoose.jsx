import { FaHeart, FaUserMd, FaUsers, FaBolt } from "react-icons/fa";
import "./WhyChoose.css";
import { motion } from "framer-motion";

const WhyChoose = () => {
  return (
    <section className="why">
      <h2>Why Choose Sakthi Dental Clinic</h2>
      <div className="underline"></div>

      <div className="why-cards">

        <div className="why-card">
          <div className="icon-box">
            <FaHeart />
          </div>
          <h3>All-in-One Care</h3>
          <p>
            From general dentistry to specialized treatments, everything under one roof.
          </p>
        </div>

        <div className="why-card ">
          <div className="icon-box">
            <FaUserMd />
          </div>
          <h3>Experienced Doctors</h3>
          <p>
            Our dentists are professionally trained and committed to personalized patient care.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">
            <FaUsers />
          </div>
          <h3>Patient-Centric Approach</h3>
          <p>
            We prioritize comfort, safety and transparency in every treatment we offer.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">
            <FaBolt />
          </div>
          <h3>Technology-Driven Services </h3>
          <p>
            Modern tools and equipment ensure precision and safety.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;