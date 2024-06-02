import React, { useState } from "react";
import style from "../style/components/faq.module.css";


function FAQ() {
  const [activeIndex, setActiveIndex] = useState();

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
export default FAQ();
