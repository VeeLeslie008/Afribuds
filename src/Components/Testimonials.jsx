import { useState, useRef, useEffect } from 'react';
import { testimonials } from '../Data/Data';

function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const trackRef = useRef(null);
  const activeSlideRef = useRef(0);

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

  useEffect(
    function () {
      activeSlideRef.current = activeSlide;
    },
    [activeSlide]
  );

  // Scroll listener → updates dots
  useEffect(
    function () {
      const track = trackRef.current;
      if (!track) return;

      function handleScroll() {
        const firstCard = track.querySelector('.testimonials__card');
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 18;
        const distance = cardWidth + gap;
        const index = Math.round(track.scrollLeft / distance);
        const clamped = Math.max(
          0,
          Math.min(testimonials.length - 1, index)
        );
        setActiveSlide(clamped);
      }

      track.addEventListener('scroll', handleScroll, { passive: true });
      return function () {
        track.removeEventListener('scroll', handleScroll);
      };
    },
    []
  );

  // Auto-advance — only when carousel is scrollable
  useEffect(
    function () {
      if (paused) return;

      const id = setInterval(function () {
        const track = trackRef.current;
        if (!track) return;

        const isScrollable = track.scrollWidth > track.clientWidth + 4;
        if (!isScrollable) return;

        const firstCard = track.querySelector('.testimonials__card');
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 18;
        const distance = cardWidth + gap;
        const next = (activeSlideRef.current + 1) % testimonials.length;

        track.scrollTo({
          left: distance * next,
          behavior: 'smooth',
        });
      }, 4500);

      return function () {
        clearInterval(id);
      };
    },
    [paused, resetKey]
  );

  function scrollToSlide(index) {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector('.testimonials__card');
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 18;
    const distance = cardWidth + gap;

    track.scrollTo({
      left: distance * index,
      behavior: 'smooth',
    });

    setResetKey(function (k) {
      return k + 1;
    });
  }

  return (
    <section
      className={'testimonials' + (isVisible ? ' testimonials--visible' : '')}
      ref={sectionRef}
    >
      <div className="testimonials__container">
        {/* ---------- Header ---------- */}
        <header className="testimonials__header">
          <div className="testimonials__eyebrow">
            <i className="fa-solid fa-star" aria-hidden="true"></i>
            <span>Testimonials</span>
          </div>

          <h2 className="testimonials__title">
            Loved by 100+ guests
            <br />
            around the table.
          </h2>

          <p className="testimonials__subtitle">
            Real words from the families, hosts, and teams we've cooked for —
            and why they keep coming back.
          </p>
        </header>

        {/* ---------- Carousel / Grid ---------- */}
        <div
          className="testimonials__track"
          ref={trackRef}
          onMouseEnter={function () {
            setPaused(true);
          }}
          onMouseLeave={function () {
            setPaused(false);
          }}
          onTouchStart={function () {
            setPaused(true);
          }}
          onTouchEnd={function () {
            setPaused(false);
          }}
        >
          {testimonials.map(function (item) {
            return (
              <article key={item.id} className="testimonials__card">
                <div className="testimonials__card-stars">
                  {[1, 2, 3, 4, 5].map(function (star) {
                    return (
                      <i
                        key={star}
                        className="fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                    );
                  })}
                </div>

                <p className="testimonials__card-quote">{item.quote}</p>

                <div className="testimonials__card-author">
                  <span className="testimonials__card-avatar">
                    <img src={item.avatar} alt={item.name} loading="lazy" />
                  </span>

                  <div className="testimonials__card-author-info">
                    <span className="testimonials__card-name">{item.name}</span>
                    <span className="testimonials__card-role">{item.role}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ---------- Mobile helpers ---------- */}
        <div className="testimonials__carousel-meta">
          <p className="testimonials__swipe-hint">
            Swipe to read more
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </p>

          <div
            className="testimonials__dots"
            role="tablist"
            aria-label="Testimonials"
          >
            {testimonials.map(function (item, index) {
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={index === activeSlide}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={
                    'testimonials__dot' +
                    (index === activeSlide
                      ? ' testimonials__dot--active'
                      : '')
                  }
                  onClick={function () {
                    scrollToSlide(index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;