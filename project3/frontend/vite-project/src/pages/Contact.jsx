import "./Contact.css";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
  "https://sakthi-backend.onrender.com/api/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      alert("Appointment submitted successfully!");
      console.log(data);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  const location = useLocation();

  useEffect(() => {
  if (location.hash === "#appointment") {
    const section = document.getElementById("contact-form");
    section?.scrollIntoView({ behavior: "smooth" });
  }
}, [location]);

  return (
    <section className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions or want to fix an appointment? We're here to help you
          achieve your perfect smile.
        </p>
      </div>

      {/* Main Content */}
      <div className="contact-container">
        {/* LEFT - FORM */}
        <form id="contact-form" className="contact-form-card" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>

          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />

          <div className="row">
            <div>
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label>Phone Number *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 90000 00000"
                required
              />
            </div>
          </div>

          <label>Preferred Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a Treatment</option>
            <option>Teeth Cleaning</option>
            <option>Root Canal</option>
            <option>Implants</option>
            <option>Whitening</option>
          </select>

          <label>How can we help? (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit Request ✈
          </button>
        </form>

        {/* RIGHT - INFO */}
        <div className="clinic-info">
          <h2>Clinic Information</h2>

          <div className="info-block">
            <div className="icon-box">📍</div>
            <div>
              <h4>Address</h4>
              <p>
                B2/8, SBM Layout, Anthivadi, Hosur,
                <br />
                Tamil Nadu 635109, India
              </p>
            </div>
          </div>

          <div className="info-block">
            <div className="icon-box">📞</div>
            <div>
              <h4>Phone Numbers</h4>
              <p>+91 98628 90897</p>
              <p>+91 93632 98118</p>
            </div>
          </div>

          <div className="info-block">
            <div className="icon-box">✉️</div>
            <div>
              <h4>Email Support</h4>
              <p>info@sakthidentalclinic.in</p>
            </div>
          </div>

          <div className="info-block">
            <div className="icon-box">🕒</div>
            <div>
              <h4>Timings</h4>
              <p>Sunday – Saturday: 9:00 AM to 7:00 PM</p>
              <span className="highlight">
                ✓ Doctors available till 9:00 PM
              </span>
            </div>
          </div>

          <div className="map-box">
            <div className="map-icon">📍</div>
            <h3>Map View Coming Soon</h3>
            <p>Find us near Anthivadi SBM Layout</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
