import { useState, useRef, useEffect } from 'react';
import { storyFeatures, storyStats } from '../Data/Data';

function CountUp(props) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(
    function () {
      const node = ref.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && !startedRef.current) {
              startedRef.current = true;
              const startTime = performance.now();
              const duration = 2000;
              const target = props.end;

              function tick(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setValue(target * eased);

                if (progress < 1) {
                  requestAnimationFrame(tick);
                } else {
                  setValue(target);
                }
              }

              requestAnimationFrame(tick);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(node);

      return function () {
        observer.disconnect();
      };
    },
    [props.end]
  );

  return (
    <span ref={ref}>
      {value.toFixed(props.decimals)}
      {props.suffix}
    </span>
  );
}

function OurStory() {
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

  return (
    <section
      className={'story' + (isVisible ? ' story--visible' : '')}
      ref={sectionRef}
    >
      <div className="story__container">
        <div className="story__top">
          {/* ---------- Left — Image collage ---------- */}
          <div className="story__images">
            <div className="story__image story__image--main">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=900&q=80"
                alt="Chef plating a dish"
              />
            </div>

            <div className="story__image story__image--secondary">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80"
                alt="Restaurant dining room"
              />
            </div>

            <div className="story__badge">
              <span className="story__badge-value">17+</span>
              <span className="story__badge-label">
                Years
                <br />
                of Craft
              </span>
            </div>
          </div>

          {/* ---------- Right — Story content ---------- */}
          <div className="story__content">
            <p className="story__eyebrow">Our Story</p>

            <h2 className="story__title">
              A kitchen built on
              <br />
              tradition, warmth, and
              <br />
              <em>honest food.</em>
            </h2>

            <p className="story__text">
              We started as a small family kitchen with one belief — that a
              good meal is more than food. It's a moment, a memory, a table
              where people gather. Today we bring that same care to every
              private dinner, event, and weekly menu we craft.
            </p>

            <p className="story__features-label">
              What we bring to the table:
            </p>

            <ul className="story__features">
              {storyFeatures.map(function (feature) {
                return (
                  <li key={feature.id} className="story__feature">
                    <span className="story__feature-icon">
                      <i className="fa-solid fa-check" aria-hidden="true"></i>
                    </span>
                    <span className="story__feature-text">{feature.text}</span>
                  </li>
                );
              })}
            </ul>

            <a href="/about" className="story__cta">
              Discover More
              <i
                className="fa-solid fa-arrow-right story__cta-icon"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Stats bar ---------- */}
      <div className="story__stats">
        <div className="story__stats-container">
          {storyStats.map(function (stat) {
            return (
              <div key={stat.id} className="story__stat">
                <span className="story__stat-icon">
                  <i className={stat.icon} aria-hidden="true"></i>
                </span>
                <div className="story__stat-info">
                  <span className="story__stat-value">
                    <CountUp
                      end={stat.end}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  </span>
                  <span className="story__stat-label">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurStory;