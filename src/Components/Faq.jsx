import { useState } from 'react';
import { faqs } from '../Data/Data';

function Faq() {
  const [openId, setOpenId] = useState(faqs[0].id);

  function toggleItem(id) {
    setOpenId(function (current) {
      return current === id ? null : id;
    });
  }

  return (
    <section className="faq">
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