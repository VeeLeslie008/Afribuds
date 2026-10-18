import { useRef, useEffect, useState } from 'react';
import { services } from '../Data/Data';

function AboutHome() {
  const trackRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  function getCardMetrics() {
    const track = trackRef.current;
    if (!track) return null;

    const card = track.querySelector('.services__card');
    if (!card) return null;

    const gap = 24;
    const cardWidth = card.offsetWidth;
    return { cardWidth, gap, distance: cardWidth + gap };
  }

  function scrollToIndex(index) {
    const track = trackRef.current;
    const metrics = getCardMetrics();
    if (!track || !metrics) return;

    const maxIndex = services.length - 1;
    let target = index;
    if (target < 0) target = maxIndex;
    if (target > maxIndex) target = 0;

    track.scrollTo({
      left: metrics.distance * target,
      behavior: 'smooth',
    });

    setActiveIndex(target);
  }

  function handleArrow(direction) {
    scrollToIndex(activeIndex + direction);
    setResetKey(function (k) { return k + 1; });
  }

  function handleDotClick(index) {
    scrollToIndex(index);
    setResetKey(function (k) { return k + 1; });
  }

  // Keep activeIndexRef in sync with state
  useEffect(function () {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Detect active index from scroll position
  useEffect(function () {
    const track = trackRef.current;
    if (!track) return;

    function handleScroll() {
      const metrics = getCardMetrics();
      if (!metrics) return;
      const index = Math.round(track.scrollLeft / metrics.distance);
      const clamped = Math.max(0, Math.min(services.length - 1, index));
      setActiveIndex(clamped);
    }

    track.addEventListener('scroll', handleScroll, { passive: true });
    return function () {
      track.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-advance every 5 seconds
  useEffect(function () {
    if (paused) return;

    const id = setInterval(function () {
      scrollToIndex(activeIndexRef.current + 1);
    }, 5000);

    return function () {
      clearInterval(id);
    };
  }, [paused, resetKey]);

  return (
    <section className="services">
      <div className="services__container">
        <header className="services__header">
          <div className="services__header-left">
            <p className="services__eyebrow">What we cook for you</p>
            <h2 className="services__title">
              Four ways to bring a<br />private chef home.
            </h2>
          </div>

          <p className="services__intro">
            Each service is shaped around your space, your guests, and your
            story — from a quiet Sunday supper to an eighty-guest celebration.
          </p>
        </header>

        <div
          className="services__carousel-wrap"
          onMouseEnter={function () { setPaused(true); }}
          onMouseLeave={function () { setPaused(false); }}
        >
          <button
            type="button"
            className="services__arrow services__arrow--prev"
            onClick={function () { handleArrow(-1); }}
            aria-label="Previous service"
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
          </button>

          <div className="services__carousel" ref={trackRef}>
            {services.map(function (service) {
              return (
                <article
                  key={service.id}
                  className={`services__card services__card--${service.theme}`}
                >
                  <div className="services__card-media">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="services__card-body">
                    <span className="services__card-icon">
                      <i className={service.icon} aria-hidden="true"></i>
                    </span>

                    <h3 className="services__card-title">{service.title}</h3>
                    <p className="services__card-text">{service.text}</p>

                    <div className="services__card-footer">
                      <div className="services__card-price">
                        <span className="services__card-price-label">
                          From
                        </span>
                        <span className="services__card-price-value">
                          {service.priceFrom}
                          <small>{service.priceUnit}</small>
                        </span>
                      </div>

                      <a href="/services" className="services__card-cta">
                        Learn more
                        <i
                          className="fa-solid fa-arrow-up-right-from-square"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className="services__arrow services__arrow--next"
            onClick={function () { handleArrow(1); }}
            aria-label="Next service"
          >
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>

        <div className="services__dots" role="tablist" aria-label="Services">
          {services.map(function (service, index) {
            return (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to ${service.title}`}
                className={`services__dot ${
                  index === activeIndex ? 'services__dot--active' : ''
                }`}
                onClick={function () { handleDotClick(index); }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutHome;