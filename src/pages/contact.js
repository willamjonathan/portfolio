import React from "react";
import "../styles/contact.css";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    e.target.reset();
  };

  return (
    <section className="contact-section">
      {/* <h2 className="contact-title">Contact</h2> */}
      <p className="summary">
        I’m always excited to connect with like-minded individuals, whether it’s to explore work opportunities, share insights, or collaborate on innovative ideas. Feel free to drop me a message!
      </p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc1bXgLFeeVk3lv_HGyBDqRtYVexx9kfWZokub4Gc4qkh641A/formResponse"
        method="POST"
        target="hidden_iframe"
      >
        <div className="form-row">
          <input type="text" name="entry.584583895" placeholder="First Name" required />
          <input type="text" name="entry.1888594087" placeholder="Last Name" required />
        </div>
        <input type="email" name="entry.199882941" placeholder="Email" required />
        <input type="text" name="entry.1256538957" placeholder="Subject" required />
        <textarea name="entry.1018729991" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </form>

<div class="social-links">
        <div class="contactcontainer">

            <div class="icon linkedin"></div>
            <div class="text"><a href="https://www.instagram.com/willjo02?igsh=MWxsNnNlYWc0cGRhaw==">Instargram </a>
            </div>

        </div>
        <div class="contactcontainer">
            <div class="icon whatsapp"></div>
            <div class="text"><a href="Wa.me/+628112002800">WhatsApp </a></div>
        </div>

    </div>
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
    </section>
  );
}
