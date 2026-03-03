import "./FAQ.css";

const faqs = [
  {
    question: "Can medication completely relieve tooth pain?",
    answer:
      "Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care. ",
  },
  {
    question: "Does teeth scaling cause enamel damage?",
    answer:
      "No. Scaling safely removes plaque and tartar from teeth and below the gum line. It does not damage enamel. Some temporary sensitivity may occur, but it usually subsides as gums heal.",
  },
  {
    question: "Can fluorosis stains be removed through scaling?",
    answer:
      "Scaling removes surface stains but not fluorosis, which is internal. Treatment options include bleaching, veneers, or crowns.",
  },
  {
    question: "Can painful teeth be treated with fillings? ",
    answer:
      "Not always. If the cavity has reached the pulp, the innermost layer of the tooth, simple filling won’t help. In such cases, root canal treatment or tooth extraction might be necessary. Fillings are effective only when the damage is limited to the outer layers (enamel and dentin)."
  },
  {
    question: "Is placing a crown necessary after root canal treatment (RCT)?",
    answer:
      "Yes. A crown protects the treated tooth, improves strength and durability, especially during chewing.",
  },
  {
    question :"Can milk teeth need root canal treatment (RCT)? ",
    answer: "Yes. If a milk tooth has a deep cavity and is likely to remain in the mouth for some time, an RCT can preserve it and prevent infection or early loss. "
  },
  {
    question:"How can I maintain good oral hygiene? ",
    answer:"Brush your teeth twice daily with proper technique, rinse after meals, floss regularly, and schedule routine check-ups with your dentist to maintain healthy teeth and gums."
  },
  {
    question:" What is the best age to get braces?",
    answer:"Braces are most effective between ages 12 and 14, when the jaw and teeth are still developing. However, some cases may benefit from earlier intervention depending on the condition."
  },
  {
    question:" Do all wisdom teeth need to be removed?",
    answer:"No. Wisdom teeth only require removal if they are impacted, infected, or causing pain due to crowding or damage to adjacent teeth. "
  },
  {
    question:" Is it important to replace missing teeth after extraction?",
    answer:"Yes. Replacing extracted teeth helps maintain proper bite alignment and prevents adjacent teeth from shifting, which can affect chewing and overall oral function. "
  },
  {
    question:" Which type of toothbrush and toothpaste should I use? ",
    answer:"Use a soft or medium-bristled toothbrush with a small head for better reach. Choose a non-abrasive fluoride toothpaste and replace your toothbrush every three months for optimal hygiene. "
  },
  {
    question:"What causes tooth sensitivity? ",
    answer:"Tooth sensitivity can result from enamel wear (due to attrition or abrasion), tooth decay, exposed tooth roots, or hairline cracks in the teeth."
  },
  
  {
    question: "How often should I see a dentist?",
    answer:
      "It is recommended to visit every six months for routine check-ups and preventive care.",
  },
  {
    question: "What are the benefits of dental implants?",
    answer:
      "Dental implants restore both function and appearance of missing teeth and provide a stable, natural-looking solution.",
  },
];

const FAQ = () => {
  return (
    <section className="faq-page">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <div className="underline"></div>
        <p>
          Find answers to common dental concerns and treatment-related questions.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div className="faq-card" key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;