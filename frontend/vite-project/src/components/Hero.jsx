import { useNavigate } from "react-router-dom";
import DentalImg from "../assets/Dental-img.jpg";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="trust-badge">
          ⚡ Trusted by 5000+ Families in Hosur
        </div>

        <h1>
          Specialized Dental Care for{" "}
          <span>Women, Children & Families</span>
        </h1>

        <p>
          Experience compassionate, expert-led dental services tailored to
          your needs in a welcoming environment.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/contact")}
          >
            Fix an Appointment
          </button>

          <button
  className="secondary-btn"
  onClick={() => window.location.href = "tel:+919862890897"}
>
  Emergency Support
</button>
        </div>
      </div>

      <div className="hero-right">
        <img src={DentalImg} alt="Dental clinic" />
      </div>
    </section>
  );
};

export default Hero;