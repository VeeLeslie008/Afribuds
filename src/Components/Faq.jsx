import { useState, useRef, useEffect } from 'react';
import { faqs } from '../Data/Data';

function Faq() {
  const [openId, setOpenId] = useState(faqs[0].id);

  // --- Intersection Observer for Animations ---
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(function () {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Only animate once
          }
        });
      },
      { threshold: 0.15 } // Triggers when 15% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return function () {
      observer.disconnect();
    };
  }, []);
  // ----------------------------------------------

  function toggleItem(id) {
    setOpenId(function (current) {
      return current === id ? null : id;
    });
  }

  return (
    <section
      className={'faq' + (isVisible ? ' faq--visible' : '')}
      ref={sectionRef}
    >
      <div className="faq__container">
        {/* ---------- Left — intro ---------- */}
        <aside className="faq__intro">
          <div className="faq__eyebrow">
            <span className="faq__eyebrow-num">006</span>
            <span className="faq__eyebrow-sep" aria-hidden="true"></span>
            <span className="faq__eyebrow-label">FAQ</span>
          </div>

          <h2 className="faq__title">
            Questions,
            <br />
            <em>answered.</em>
          </h2>

          <p className="faq__subtitle">
            Everything you might want to know before booking — and if we
            missed something, we are one message away.
          </p>

          <a href="/contact" className="faq__cta">
            Ask a Question
            <i className="fa-solid fa-arrow-right faq__cta-icon" aria-hidden="true"></i>
          </a>
        </aside>

        {/* ---------- Right — accordion ---------- */}
        <div className="faq__list">
          {faqs.map(function (item) {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={'faq__item' + (isOpen ? ' faq__item--open' : '')}
              >
                <button
                  type="button"
                  className="faq__question"
                  onClick={function () {
                    toggleItem(item.id);
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                >
                  <span className="faq__question-text">{item.question}</span>

                  <span className="faq__question-icon">
                    <i
                      className={'fa-solid ' + (isOpen ? 'fa-minus' : 'fa-plus')}
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>

                <div
                  id={`faq-panel-${item.id}`}
                  className="faq__answer-wrap"
                  role="region"
                >
                  <p className="faq__answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;