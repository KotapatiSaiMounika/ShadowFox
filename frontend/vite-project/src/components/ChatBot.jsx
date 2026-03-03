import { useState } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 How can we help you today?" }
  ]);
  const [input, setInput] = useState("");

  const getBotReply = (message) => {
    const msg = message.toLowerCase();

    // timings
    if (
      msg.includes("timing") ||
      msg.includes("time") ||
      msg.includes("open") ||
      msg.includes("close")
    ) {
      return "We are open Sunday to Saturday from 9:00 AM to 9:00 PM 😊";
    }

    // treatments
    if (
      msg.includes("treatment") ||
      msg.includes("services") ||
      msg.includes("what do you do")
    ) {
      return "We provide Teeth Cleaning, Fillings, Braces, Root Canal, Implants, Whitening, Pediatric Dentistry and more.";
    }

    // braces
    if (msg.includes("braces") || msg.includes("aligner")) {
      return "Yes 😊 We provide both traditional braces and clear aligners.";
    }

    // whitening
    if (
      msg.includes("whitening") ||
      msg.includes("bright") ||
      msg.includes("bleach")
    ) {
      return "Yes ✨ We offer professional teeth whitening that is safe and painless.";
    }

    // pain
    if (msg.includes("pain") || msg.includes("painless")) {
      return "Most treatments are done with anesthesia and modern techniques to ensure minimal pain 😊";
    }

    // location
    if (
      msg.includes("location") ||
      msg.includes("address") ||
      msg.includes("where")
    ) {
      return "We are located at B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu.";
    }

    // appointment
    if (msg.includes("appointment") || msg.includes("book")) {
      return "You can book an appointment from our Contact page by clicking 'Fix an Appointment'.";
    }

    // contact
    if (
      msg.includes("phone") ||
      msg.includes("contact") ||
      msg.includes("call")
    ) {
      return "You can call us at +91 9862890897 or +91 9363298118.";
    }

    return "I'm here to help 😊 You can ask about treatments, timings, location, braces, whitening, or appointments.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: getBotReply(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      <div className="chat-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chat-box">
          <div className="chat-header">Sakthi Dental Assistant</div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;