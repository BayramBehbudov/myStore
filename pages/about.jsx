import style from "../style/pages/about.module.css";
import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
  ];

  return (
    <div className={style.faqContainer}>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className={style.faq}>
          <div className={style.faqQuestion} onClick={() => toggleFAQ(index)}>
            <span
              className={`${style.faqToggle} ${
                activeIndex === index ? style.open : ""
              }`}
            >
              {activeIndex === index ? "▼" : "➤"}
            </span>
            {faq.question}
          </div>
          <div
            className={`${style.faqAnswer} ${
              activeIndex === index ? style.open : ""
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

function about() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubscribe = () => {
    alert("Subscribed with email:", {email});
  };

  return (
    <div className={style.aboutContainer}>
      <div className={style.header}>
        <div className={style.container}>
          <div className={style.headerTitle}>Who We Are</div>
          <div className={style.headerDesc}>
            We are a dedicated online shop committed to providing the highest
            quality products to our customers. Our mission is to help everyone
            easily find and purchase what they need, with a wide variety of
            choices and excellent customer service.
          </div>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.leftSec}>
          <div className={style.container}>
            <div className={style.mainTitle}>Our Vision</div>
            <div className={style.mainDesc}>
              To be the leading online retailer known for quality, variety, and
              customer satisfaction. We aim to continually improve and innovate
              to meet the needs and expectations of our customers.
            </div>
          </div>
        </div>
        <div className={style.rightSec}>
          <div className={style.alignText}>
            <div>
              Integrity, customer focus, and innovation are at the heart of
              everything we do. We believe in providing exceptional value and
              building long-term relationships with our customers.
            </div>
          </div>
        </div>

        <div className={style.shopcard}></div>
      </div>

      <div className={style.footer}>
        <div className={`${style.footerLeft}`}>
          <h2>Get our special prices & latest units info from us</h2>
          <input
            type="email"
            placeholder="Enter your email adress"
            value={email}
            onChange={handleEmailChange}
            className={style.subscribeInput}
          />
          <button onClick={handleSubscribe} className={style.subscribeButton}>
            Subscribe
          </button>
        </div>

        <div className={style.footerRight}>
          <FAQ />
        </div>
      </div>
    </div>
  );
}

export default about;
