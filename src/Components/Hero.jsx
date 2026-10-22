import React, { useState, useEffect, useRef } from 'react';

// Sub-component to handle the auto-counting logic
function CountUp({ end, decimals, suffix, startAnimation }) {
  const [value, setValue] = useState(0);

  useEffect(
    function () {
      if (!startAnimation) return;

      let startTime;
      let animationFrame;

      function animate(now) {
        if (!startTime) startTime = now;
        const progress = Math.min((now - startTime) / 2000, 1); 
        const eased = 1 - Math.pow(1 - progress, 3);

        setValue(end * eased);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setValue(end);
        }
      }

      animationFrame = requestAnimationFrame(animate);

      return function () {
        cancelAnimationFrame(animationFrame);
      };
    },
    [end, startAnimation]
  );

  return (
    <span>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(
    function () {
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

      if (heroRef.current) {
        observer.observe(heroRef.current);
      }

      return function () {
        observer.disconnect();
      };
    },
    []
  );

  return (
    <section
      className={'hero' + (isVisible ? ' hero--visible' : '')}
      id="hero"
      ref={heroRef}
    >
      <div className="hero__bg" aria-hidden="true"></div>

      <div className="hero__container">
        <div className="hero__eyebrow">
          <i className="fa-solid fa-utensils" aria-hidden="true"></i>
          <span>Private Chef</span>
          <span className="hero__dot">·</span>
          <span>Catering</span>
          <span className="hero__dot">·</span>
          <span>Custom Menus</span>
        </div>

        {/* Headline */}
        <h1 className="hero__title">
          Heritage on the plate, <em>warmth</em>
          <br />
          at the table
        </h1>

        {/* Subheadline */}
        <p className="hero__subtitle">
          Afribud brings the warmth of African kitchens into every plate —
          intimate dinners, event catering, and weekly meal experiences
          built on bold spices and recipes passed down with care. A taste
          of home, delivered with a quiet kind of luxury.
        </p>

        {/* CTA */}
        <div className="hero__actions">
          <a href="/book" className="hero__btn hero__btn--primary">
            <i className="fa-solid fa-calendar-check" aria-hidden="true"></i>
            Book a Catering Call
            <i
              className="fa-solid fa-arrow-up-right-from-square hero__btn-arrow"
              aria-hidden="true"
            ></i>
          </a>

          <a href="/menu" className="hero__btn hero__btn--ghost">
            <i className="fa-solid fa-book-open" aria-hidden="true"></i>
            Explore the Menu
          </a>
        </div>

        {/* Stats Card */}
        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-value">
              <CountUp end={12} decimals={0} suffix="+" startAnimation={isVisible} />
            </div>
            <div className="hero__stat-label">Years Cooking</div>
          </div>

          <div className="hero__stat">
            <div className="hero__stat-value">
              <CountUp end={400} decimals={0} suffix="+" startAnimation={isVisible} />
            </div>
            <div className="hero__stat-label">Events Catered</div>
          </div>

          <div className="hero__stat">
            <div className="hero__stat-value">
              <CountUp end={4.98} decimals={2} suffix="" startAnimation={isVisible} />
            </div>
            <div className="hero__stat-label">Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;