import "./ValuesSection.css"
const ValuesSection = () => {
  return (
    <section className="values">
      <h2>Our Core Values</h2>

      <div className="values-grid">
        <div className="value-card">
          <h3>Compassion</h3>
          <p>We treat every patient like family.</p>
        </div>

        <div className="value-card">
          <h3>Excellence</h3>
          <p>We follow the highest standards of care.</p>
        </div>

        <div className="value-card">
          <h3>Integrity</h3>
          <p>We believe in honest and transparent treatment.</p>
        </div>

        <div className="value-card">
          <h3>Innovation</h3>
          <p>We use modern techniques and advanced equipment.</p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;