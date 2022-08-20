import "./faq.style.scss";
import Arrow from "../../images/icon-arrow.svg";
import RedArrow from "../../images/icon-arrow-red.svg";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const FAQ = () => {
  const [current, setCurrent] = useState(null);

  const accordion = (index) => {
    if (current === index) {
      return setCurrent(null);
    }

    setCurrent(index);
  };

  return (
    <section className="faq">
      <div className="faq__text">
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <div className="accordion">
        <hr />
        {questions.map((question, index) => (
          <div className="item" key={question.id}>
            <div className="q-title" onClick={() => accordion(index)}>
              <h2>{question.question}</h2>
              <a>
                {current === index ? (
                  <img src={RedArrow}></img>
                ) : (
                  <img src={Arrow}></img>
                )}
              </a>
            </div>
            <div className={current === index ? "q-content-open" : "q-content"}>
              {question.answer}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
