import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookingCta() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for entrance animation
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
      { threshold: 0.15 }
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
      className={'cta-banner' + (isVisible ? ' cta-banner--visible' : '')}
      ref={sectionRef}
    >
      {/* Background Image & Overlay */}
      <div className="cta-banner__bg" aria-hidden="true"></div>
      <div className="cta-banner__overlay" aria-hidden="true"></div>

      <div className="cta-banner__container">
        <div className="cta-banner__content">
          
          {/* Eyebrow Badge */}
          <div className="cta-banner__eyebrow">
            <i className="fa-solid fa-star" aria-hidden="true"></i>
            <span>Booking dates 4–6 weeks out</span>
          </div>

          {/* Title */}
          <h2 className="cta-banner__title">
            Ready to set <em>the table?</em>
          </h2>

          {/* Subtitle */}
          <p className="cta-banner__text">
            Tell us a little about your evening. We'll come back within one
            business day with a draft menu and an honest quote — no pressure,
            no obligation.
          </p>

          {/* Actions */}
          <div className="cta-banner__actions">
            <Link to="/book" className="cta-banner__btn cta-banner__btn--primary">
              <i className="fa-regular fa-calendar" aria-hidden="true"></i>
              Reserve your date
              <i className="fa-solid fa-arrow-right cta-banner__btn-arrow" aria-hidden="true"></i>
            </Link>

            <a 
              href="https://wa.me/2348082299961"
              target="_blank" 
              rel="noreferrer" 
              className="cta-banner__btn cta-banner__btn--ghost"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              WhatsApp Us Instead
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BookingCta;