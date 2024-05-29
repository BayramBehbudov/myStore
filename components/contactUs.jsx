import React, { useState } from "react";
import style from "../style/components/contactUs.module.css";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const msgData = {
      name,
      email,
      message,
    };
    console.log(msgData);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={style.contactContainer}>
      <h1 className={style.contactHeader}>Contact Us</h1>
      <div className={style.contactSection}>
        <div className={style.contactInfo}>
          <h2>Contact Info</h2>
          <p>
            <strong>Adress:</strong> 123 Baş Küçə, Bakı, Azərbaycan
          </p>
          <p>
            <strong>Tel:</strong> +994 999 000 00 00
          </p>
          <p>
            <strong>Email:</strong> bayram.behbudov@gmail.com
          </p>
          <p>
            <strong>Working:</strong> B.e. - Cümə: 9:00 - 18:00
          </p>
        </div>

        <div className={style.contactForm}>
          <h2>Send Us Message</h2>
          <div className={style.submitForm}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className={style.contactInput}
            />
            <input
              type="email"
              placeholder="Email Adress"
              onChange={(e) => setEmail(e.target.value)}
              className={style.contactInput}
            />
            <textarea
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              className={style.contactTextarea}
              rows="5"
            />
            <button onClick={handleSubmit} className={style.contactButton}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
