import React, { useState } from "react";
import styles from "./contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Compose the mailto link
    const mailtoLink =
      "mailto:subedi.bibek164@gmail.com" +
      "?subject=" +
      encodeURIComponent(formData.subject) +
      "&body=" +
      encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );

    // Open user's email client
    window.location.href = mailtoLink;
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email icon"
          />
          <a href="mailto:subedi.bibek164@gmail.com">subedi.bibek164@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/bibek-subedi-343933273/?trk=opento_sprofile_details">linkedin.com/Bibek</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="Github icon"
          />
          <a href="https://github.com/Bibeks123">github.com/Bibek</a>
        </li>
      </ul>
      <div className={styles.contactsection}>
        <h2>Contact Us</h2>
        <form className={styles.mailText} onSubmit={handleSubmit}>
         
          <input
          className={styles.inputText}
            type="text"
            id="name"
            name="name"
            placeholder=" Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
          
          className={styles.inputText}
            type="email"
            id="email"
            name="email"
            placeholder=" Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
          
          className={styles.inputText}
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
          
          className={styles.inputText}
            id="message"
            name="message"
            placeholder=" Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          
         
          <button className={styles.sendButton} type="submit">Send Message</button>
        </form>
      </div>
    </footer>
  );
};
