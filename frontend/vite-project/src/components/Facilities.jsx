import "./Facilities.css";
import { FaMapMarkerAlt, FaCar, FaClock, FaWheelchair, FaTruck, FaFemale } from "react-icons/fa";

const Facilities = () => {
  return (
    <section className="facilities-section">
      <div className="facilities-card">

        <h2>Clinic Facilities</h2>

        <div className="facility-item">
          <FaMapMarkerAlt /> Convenient central location
        </div>

        <div className="facility-item">
          <FaCar /> Hassle-free parking
        </div>

        <div className="facility-item">
          <FaClock /> Open 9 AM – 9 PM daily
        </div>

        <div className="facility-item">
          <FaWheelchair /> Wheelchair access
        </div>

        <div className="facility-item">
          <FaTruck /> Pickup & drop-off support
        </div>

        <div className="facility-item">
          <FaFemale /> Women & Kid specialized
        </div>

      </div>
    </section>
  );
};

export default Facilities;