import "./Treatments.css";
import { useNavigate } from "react-router-dom";
const treatments = [
  {
    title: "Teeth Cleaning & Scaling",
    desc: "A professional procedure to remove plaque, tartar, and stains, preventing gum disease and cavities.",
    icon: "✨"
  },
  {
    title: "Tooth Filling",
    desc: "Restoring decayed or damaged teeth using high-quality composite materials that match your natural tooth color.",
    icon: "🦷"
  },
  {
    title: "Orthodontic Braces",
    desc: "Correcting misaligned teeth and bite issues using traditional braces or modern clear aligners.",
    icon: "⛓️"
  },
  {
    title: "Root Canal Therapy (RCT)",
    desc: "A precise treatment to save a severely infected tooth by removing the damaged pulp and sealing it.",
    icon: "🩺"
  },
  {
    title: "Dental Implants",
    desc: "A permanent solution for missing teeth using titanium posts that act as artificial tooth roots.",
    icon: "🦷"
  },
  {
    title: "Laser Dentistry",
    desc: "Minimally invasive treatments for gum disease, whitening, and surgeries using advanced laser technology.",
    icon: "⚡"
  },
  {
    title: "Pediatric Dentistry",
    desc: "Specialized, gentle dental care designed to keep your child's primary and permanent teeth healthy.",
    icon: "👶"
  },
  {
    title: "Teeth Whitening",
    desc: "Professional bleaching services to safely lighten your teeth by several shades in just one visit.",
    icon: "💎"
  },
  {
    title: "Tooth Extraction",
    desc: "Safe and gentle removal of wisdom teeth or damaged teeth when restoration is not possible.",
    icon: "🔨"
  },
  {
    title: "Clear Aligners",
    desc: "The invisible alternative to braces. Comfortable, removable, and highly effective for teeth straightening.",
    icon: "🧊"
  },
  {
    title: "Artificial Complete Dentures",
    desc: "Restoring full functionality and aesthetics for patients with complete tooth loss.",
    icon: "🎭"
  },
  {
    title: "Fixed Partial Dentures (Bridge)",
    desc: "Bridging the gap created by missing teeth with fixed artificial restorations.",
    icon: "🌉"
  }
];

const Treatments = () => {
  const navigate = useNavigate();
  return (
    <section className="treatments">

      <div className="treatments-header">
        <span className="badge">✨ Comprehensive Dental Solutions</span>
        <h1>Our Specialized Treatments</h1>
        <p>
          We offer a wide array of advanced dental services to ensure your family enjoys a healthy, beautiful smile. 
          All treatments are performed by experts using the latest clinical techniques.
        </p>
      </div>

      <div className="treatments-grid">
        {treatments.map((item, index) => (
          <div className="treatment-card" key={index}>
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="expert-tag">✓ Expert Care Provided</div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Need a specific treatment plan?</h2>
        <p>
          Every patient is unique. Book a consultation today to receive a personalized 
          treatment recommendation from our expert doctors.
        </p>
        <button onClick={() => navigate("/contact#appointment")}>
  Book an Appointment
</button>
      </div>

    </section>
  );
};

export default Treatments;