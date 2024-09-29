import React from "react";

function Footer() {
  const contactList = [
    {
      id: 1,
      name: "Email",
      contact: "brettgibbons44@gmail.com",
      image: "images/mail.png",
    },
    {
      id: 2,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/brett-gibbons-6ababb252/",
      image: "images/linkedin.png",
    },
    {
      id: 3,
      name: "GitHub",
      link: "https://github.com/Brettygibb",
      image: "images/github1.png",
    },
  ];

  return (
    <section id="footer">
      <p>
        {contactList.map((item) => (
          <span key={item.id} className="contact-item">
            {item.name === "Email" && (
              <a href={`mailto:${item.contact}`}>
                <img src={item.image} alt={item.name} title={item.name} />
              </a>
            )}
            {(item.name === "LinkedIn" || item.name === "GitHub") && (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.name} title={item.name} />
              </a>
            )}
          </span>
        ))}
      </p>
      <footer>
        <p>Brett Gibbons &copy;2024 </p>
      </footer>
    </section>
  );
}

export default Footer;
