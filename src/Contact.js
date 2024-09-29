import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "", // Corresponds to {{from_name}} in the template
    reply_to: "", // Corresponds to {{reply_to}} in the template
    message: "", // Corresponds to {{message}} in the template
  });

  const [messageStatus, setMessageStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_3ubdqua"; // Your EmailJS service ID
    const templateID = "template_9lk3pz8"; // Your EmailJS template ID
    const userID = "oSt5Ub_F2ZSV29hmy"; // Your EmailJS user ID (Public Key)

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessageStatus("Message sent successfully!");
        setFormData({
          from_name: "",
          reply_to: "",
          message: "",
        });
      },
      (err) => {
        console.log("FAILED...", err);
        setMessageStatus("Failed to send the message. Please try again.");
      }
    );
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
          value={formData.from_name}
          onChange={handleChange}
        />
        <label htmlFor="reply_to">Email:</label>
        <input
          type="email"
          id="reply_to"
          name="reply_to"
          value={formData.reply_to}
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {messageStatus && <p>{messageStatus}</p>}
    </section>
  );
}

export default Contact;
