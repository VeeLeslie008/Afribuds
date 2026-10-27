import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// --- Auto-counting Stat Component ---
function CountUp({ end, decimals, suffix, startAnimation }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
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
    return () => cancelAnimationFrame(animationFrame);
  }, [end, startAnimation]);

  return (
    <span>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function AboutContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  // Animation Observer for the whole page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer just for the stats counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { id: 1, icon: 'fa-solid fa-star', end: 17, decimals: 0, suffix: '+', label: 'Years of Experience' },
    { id: 2, icon: 'fa-solid fa-calendar-days', end: 730, decimals: 0, suffix: '+', label: 'Events Hosted' },
    { id: 3, icon: 'fa-solid fa-utensils', end: 37, decimals: 0, suffix: '', label: 'Chefs on Team' },
    { id: 4, icon: 'fa-solid fa-face-smile', end: 98.3, decimals: 1, suffix: '%', label: 'Happy Clients' },
  ];

  const tabs = [
    {
      id: 'mission',
      label: 'Our Mission',
      content: 'To bring the warmth of African kitchens into every home. We believe that a good meal is more than food — it is a moment, a memory, and a table where people gather. We strive to deliver that experience with every plate we serve.'
    },
    {
      id: 'vision',
      label: 'Our Vision',
      content: 'To redefine Nigerian cuisine on the global stage. We envision a world where our bold spices, traditional techniques, and rich heritage are celebrated as a quiet kind of luxury, accessible to anyone seeking an unforgettable dining experience.'
    },
    {
      id: 'goal',
      label: 'Our Goal',
      content: 'To source locally, cook with intention, and serve with care. Our goal is to handle the kitchen entirely so you can focus on your guests. From weekly meal prep to 500-guest weddings, we aim for perfection in every detail.'
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section 
      className={'about-page' + (isVisible ? ' about-page--visible' : '')} 
      ref={sectionRef}
    >
      {/* --- Section 1: Hero Banner --- */}
      <div className="about-hero">
        <div className="about-hero__overlay"></div>
        <div className="about-hero__content">
          <h1 className="about-hero__title">About Us</h1>
          <p className="about-hero__subtitle">
            Discover the heritage, passion, and people behind AfriBuds. We bring the soul of Nigerian cuisine to your table, one unforgettable meal at a time.
          </p>
        </div>
      </div>

      <div className="about-page__container">
        
        {/* --- Section 2: Overlapping Collage & Company Info --- */}
        <div className="about-collage">
          <div className="about-collage__images">
            <div className="about-collage__img-main">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" alt="Chef cooking" />
            </div>
            <div className="about-collage__img-secondary">
              <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80" alt="Plated food" />
            </div>
            <div className="about-collage__badge">
              <span className="about-collage__badge-value">17+</span>
              <span className="about-collage__badge-label">Years<br/>of Craft</span>
            </div>
          </div>

          <div className="about-collage__content">
            <p className="about-page__eyebrow">Company About</p>
            <h2 className="about-page__title">
              One of the fastest ways to gain <em>culinary success</em>
            </h2>
            <p className="about-page__text">
              AfriBuds brings the warmth of African kitchens into every plate — intimate dinners, event catering, and weekly meal experiences built on bold spices and recipes passed down with care.
            </p>
            
            <div className="about-collage__list">
              <div className="about-collage__list-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Seasonal ingredient sourcing</span>
              </div>
              <div className="about-collage__list-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Private & event dining</span>
              </div>
              <div className="about-collage__list-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Locally grown produce</span>
              </div>
              <div className="about-collage__list-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Award-winning chefs</span>
              </div>
            </div>

            <Link to="/book" className="about-page__btn">
              Get a Quote
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* --- Section 3: Dark Stats Bar --- */}
      <div className="about-stats" ref={statsRef}>
        <div className="about-stats__container">
          {stats.map((stat) => (
            <div key={stat.id} className="about-stats__item">
              <div className="about-stats__icon">
                <i className={stat.icon}></i>
              </div>
              <div className="about-stats__info">
                <div className="about-stats__value">
                  <CountUp 
                    end={stat.end} 
                    decimals={stat.decimals} 
                    suffix={stat.suffix} 
                    startAnimation={statsVisible} 
                  />
                </div>
                <div className="about-stats__label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-page__container">
        {/* --- Section 4: Mission / Tabs Section --- */}
        <div className="about-mission">
          <div className="about-mission__content">
            <p className="about-page__eyebrow">About Mission</p>
            <h2 className="about-page__title">
              Our Main Goal to Satisfy <em>Local & Global Clients</em>
            </h2>

            <div className="about-mission__tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`about-mission__tab ${activeTab === tab.id ? 'about-mission__tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="about-mission__tab-content">
              <h3 className="about-mission__tab-title">Our Company {activeTabData.label.replace('Our ', '')}</h3>
              <p className="about-page__text">{activeTabData.content}</p>
            </div>
          </div>

          <div className="about-mission__image">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" alt="Restaurant interior" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutContent;