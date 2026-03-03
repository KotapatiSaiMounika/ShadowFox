import "./Services.css";
import Cleaning from "../assets/clean.jpg";
import Filling from "../assets/filling.jpg";
import Ortho from "../assets/orthodontic.jpg";
import Care from "../assets/care.jpg";
import Bleach from "../assets/bleaching.jpg";
import Extract from "../assets/extraction.jpg";


const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Explore Our Services</h2>
        <div className="underline"></div>
      </div>
       <div className="services-grid">
      <div className="service-card">
        <img src={Cleaning} alt="Teeth Cleaning" />
        <div className="service-content">
          <h3>Teeth Cleaning and Scaling</h3>
          <p>
            Preventive care to remove plague and protect gums.
          </p>
        </div>
      </div>

      <div className="service-card">
        <img src={Filling} alt="Tooth Filling" />
        <div className="service-content">
          <h3>Tooth Filling</h3>
          <p>
            Composite fillings for cavity treatment and tooth restoration.
          </p>
        </div>
      </div>

      <div className="service-card">
        <img src={Ortho} alt="Orthodontics" />
        <div className="service-content">
          <h3>Orthodontic treatment</h3>
          <p>
            Braces and aligners to straighten and align teeth.
          </p>
        </div>
      </div>

      <div className="service-card">
        <img src={Extract} alt="Teeth Extraction" />
        <div className="service-content">
          <h3>Tooth Extraction</h3>
          <p>
            Safe and painless removal of impacted or decayed teeth.
            </p>
        </div>
      </div>

      <div className="service-card">
        <img src={Bleach} alt="Bleaching" />
        <div className="service-content">
          <h3>Bleaching</h3>
          <p>
            Cosmetic whitening treatments for a brighter smile.
          </p>
        </div>
      </div>

      <div className="service-card">
        <img src={Care} alt="Pediatric Care" />
        <div className="service-content">
          <h3>Artificial Complete Denture</h3>
          <p>
            Full mouth replacement to restore confidence and function.
          </p>
        </div>
      </div>
      </div>

    </section>
  );
};

export default Services;