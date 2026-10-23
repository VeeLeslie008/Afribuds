import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { servicesPageData, serviceCategories } from '../Data/ServicesData';

// --- Internal Component for the Carousel ---
function ServiceCarousel({ title, services }) {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const activeIndexRef = useRef(0);

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

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function handleScroll() {
      const firstCard = track.querySelector('.services__card');
      if (!firstCard) return;
      const distance = firstCard.offsetWidth + 24;
      const index = Math.round(track.scrollLeft / distance);
      setActiveIndex(Math.max(0, Math.min(services.length - 1, index)));
    }

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [services.length]);

  useEffect(() => {
    if (paused || services.length < 2) return;

    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      
      const firstCard = track.querySelector('.services__card');
      if (!firstCard) return;
      
      const distance = firstCard.offsetWidth + 24;
      const next = (activeIndexRef.current + 1) % services.length;

      track.scrollTo({ left: distance * next, behavior: 'smooth' });
    }, 5000);

    return () => clearInterval(id);
  }, [paused, resetKey, services.length]);

  function scrollToIndex(index) {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector('.services__card');
    if (!firstCard) return;
    
    let target = index;
    if (target < 0) target = services.length - 1;
    if (target >= services.length) target = 0;

    const distance = firstCard.offsetWidth + 24;
    track.scrollTo({ left: distance * target, behavior: 'smooth' });
    setActiveIndex(target);
  }

  function handleArrow(direction) {
    scrollToIndex(activeIndex + direction);
    setResetKey(k => k + 1);
  }

  if (services.length === 0) return null;

  return (
    <div 
      className={`services-category ${isVisible ? 'services-category--visible' : ''}`}
      ref={sectionRef}
    >
      <div className="services-category__header">
        <h2 className="services-category__title">{title}</h2>
      </div>

      <div 
        className="services-category__carousel-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <button 
          className="services-category__arrow services-category__arrow--prev"
          onClick={() => handleArrow(-1)}
          aria-label="Previous"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <div className="services-category__track" ref={trackRef}>
          {services.map((service) => (
            <article key={service.id} className={`services__card services__card--${service.theme}`}>
              
              <div className="services__card-media">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>

              <div className="services__card-body">
                <span className="services__card-icon">
                  <i className={service.icon} aria-hidden="true"></i>
                </span>

                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-text">{service.text}</p>

                <div className="services__card-footer">
                  <Link to={service.buttonLink} className="services__card-cta services__card-cta--full">
                    {service.buttonText}
                    <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button 
          className="services-category__arrow services-category__arrow--next"
          onClick={() => handleArrow(1)}
          aria-label="Next"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="services-category__dots">
        {services.map((service, index) => (
          <button
            key={service.id}
            className={`services-category__dot ${index === activeIndex ? 'services-category__dot--active' : ''}`}
            onClick={() => {
              scrollToIndex(index);
              setResetKey(k => k + 1);
            }}
            aria-label={`Go to ${service.title}`}
          />
        ))}
      </div>
    </div>
  );
}

// --- The Main Services Component ---
function ServicesSlider() {
  const getServicesByCategory = (categoryId) => {
    return servicesPageData.filter((service) => service.category === categoryId);
  };

  return (
    <section className="services-page">
      <div className="services-page__container">
        
        <header className="services-page__header">
          <div className="services-page__header-text">
            <p className="services-page__eyebrow">What we offer</p>
            <h1 className="services-page__title">Exceptional cuisine, tailored to every occasion.</h1>
            <p className="services-page__intro">
              From a romantic dinner in our private room to a 500-guest wedding, or simply enjoying our signature Jollof at home. Explore our services by occasion and party size below.
            </p>
          </div>
        </header>

        <div className="services-page__sections">
          {serviceCategories.map(function (category) {
            const categoryServices = getServicesByCategory(category.id);
            return (
              <ServiceCarousel 
                key={category.id} 
                title={category.label} 
                services={categoryServices} 
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServicesSlider;