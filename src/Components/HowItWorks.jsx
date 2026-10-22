import { useState, useRef, useEffect } from 'react';
import { processSteps } from '../Data/Data';

// Sub-component for individual timeline rows
function ProcessRow({ step }) {
  const rowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isIconLeft = step.side === 'left';

  useEffect(function () {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return function () {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={rowRef}
      className={
        'process__row process__row--icon-' +
        step.side +
        (step.highlighted ? ' process__row--highlighted' : '') +
        (isVisible ? ' process__row--visible' : '')
      }
    >
      <div
        className={
          'process__half process__half--left' +
          (isIconLeft ? ' process__half--has-icon' : '')
        }
      >
        {isIconLeft && (
          <div className="process__icon-block">
            <span className="process__icon-wrap">
              <i className={step.icon} aria-hidden="true"></i>
            </span>
            <span className="process__num">{step.number}</span>
          </div>
        )}

        {!isIconLeft && (
          <div className="process__text-block">
            <h3 className="process__step-title">{step.title}</h3>
            <p className="process__step-text">{step.text}</p>
          </div>
        )}
      </div>

      <div
        className={
          'process__half process__half--right' +
          (!isIconLeft ? ' process__half--has-icon' : '')
        }
      >
        {!isIconLeft && (
          <div className="process__icon-block">
            <span className="process__icon-wrap">
              <i className={step.icon} aria-hidden="true"></i>
            </span>
            <span className="process__num">{step.number}</span>
          </div>
        )}

        {isIconLeft && (
          <div className="process__text-block">
            <h3 className="process__step-title">{step.title}</h3>
            <p className="process__step-text">{step.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Main Section ---
function HowWeWork() {
  // We still observe the section for the header animation
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(function () {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return function () {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={'process' + (isVisible ? ' process--visible' : '')}
      ref={sectionRef}
    >
      <div className="process__container">
        <header className="process__header">
          <div className="process__eyebrow">
            <span className="process__eyebrow-num">004</span>
            <span className="process__eyebrow-sep" aria-hidden="true"></span>
            <span className="process__eyebrow-label">Process</span>
          </div>

          <h2 className="process__title">How We Work</h2>

          <p className="process__subtitle">
            A quiet, considered process — from first conversation to the last
            plate served.
          </p>
        </header>

        <div className="process__timeline">
          {processSteps.map(function (step) {
            return <ProcessRow key={step.id} step={step} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;