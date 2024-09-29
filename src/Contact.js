import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_dda94rd"; // Fixed typo
    const templateId = "template_9lk3pz8";
    const publicKey = "oSt5Ub_F2ZSV29hmy";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      subject: "Contact Form Submission",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("email sent", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <section id="contact-email" className="contact-box">
      <h2>Contact Me</h2>
      <p>Have questions or comments? Send me an email.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="from_name">Name:</label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="from_email">Email:</label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
