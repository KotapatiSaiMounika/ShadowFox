import "./DoctorSection.css"
const DoctorSection = () => {
  return (
    <section className="doctor-section">
      <div className="doctor-card">
        <h2>Dr. Anupriya, BDS</h2>
        <h4>Lead Dentist & Founder</h4>

        <p>
          Dr. Anupriya is a highly experienced dental practitioner with over
          20 years of clinical excellence. She founded Sakthi Dental Clinic
          in 2004 with a vision to provide compassionate, accessible, and
          high-quality dental care in Hosur.
        </p>

        <ul>
          <li>Established Sakthi Dental Clinic in 2004</li>
          <li>Consultant at Chandara Hospital</li>
          <li>Expert in Women & Pediatric Dentistry</li>
          <li>Member of Indian Dental Association</li>
        </ul>
      </div>
    </section>
  );
};

export default DoctorSection;