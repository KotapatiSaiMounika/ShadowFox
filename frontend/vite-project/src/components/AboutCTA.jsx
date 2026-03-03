import "./AboutCTA.css";
import { useNavigate } from "react-router-dom";

const AboutCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="about-cta">
      <h2>Your Smile Deserves Expert Care</h2>
      <button onClick={() => navigate("/contact#appointment")}>
        Book an Appointment
      </button>
    </section>
  );
};

export default AboutCTA;