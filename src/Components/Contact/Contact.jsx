import { useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [showError, setShowError] = useState(false);

  function handleSubmit() {
    setShowError(true);
  }

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <form action="mailto:moundjidmachghour58@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input
          type="email"
          name="email"
          placeholder="email@example.com"
          required
        />
        {showError && (
          <span className={styles.error}>
            Please enter a valid email address
          </span>
        )}
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button onClick={handleSubmit} type="submit">
          Send
        </button>
      </form>
      <p>
        Or email me directly at{" "}
        <a href="mailto:moundjidmachghour58@gmail.com">
          moundjidmachghour58@gmail.com
        </a>
      </p>
    </section>
  );
}
