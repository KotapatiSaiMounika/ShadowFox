import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Patients Say</h2>
      <div className="stars">
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
</div>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <p className="testimonial-text">
            The doctors are extremely kind and attentive,My braces treatment is progressing really well. 5/5
          </p>
          <div className="testimonial-name">Manisha M</div>
          <div className="testimonial-role">Patient</div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            I got my teeth cleaned and whitened here, and the results were amazing . The staff is so humble and professional. I've recommended Sakthi Dental Clinic to my entire family.
          </p>
          <div className="testimonial-name">Mr. Arun Kumar</div>
          <div className="testimonial-role">Patient</div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            The attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth. Really graateful for their care.
          </p>
          <div className="testimonial-name">Mrs. Revathi S.</div>
          <div className="testimonial-role">Patient</div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;