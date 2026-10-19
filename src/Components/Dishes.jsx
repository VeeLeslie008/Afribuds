import { useState, useRef, useEffect, useContext } from 'react';
import { dishes, categories } from '../Data/Data';
import { CartContext } from './Cartcontext'; 

function PopularDishes() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const activeSlideRef = useRef(0);
  const [resetKey, setResetKey] = useState(0);

  // --- Intersection Observer for Animations ---
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
  // ----------------------------------------------

  // Safely pull the addToCart function from Context
  const cartContext = useContext(CartContext);
  const addToCart = cartContext ? cartContext.addToCart : function() {
    console.warn("Cart context is missing. Check App.jsx for CartProvider.");
  };

  const visibleDishes =
    activeCategory === 'all'
      ? dishes
      : dishes.filter(function (dish) {
          return dish.category === activeCategory;
        });

  useEffect(
    function () {
      const track = trackRef.current;
      if (track) {
        track.scrollTo({ left: 0 });
      }
      setActiveSlide(0);
      activeSlideRef.current = 0;
      setResetKey(function (k) {
        return k + 1;
      });
    },
    [activeCategory]
  );

  useEffect(
    function () {
      activeSlideRef.current = activeSlide;
    },
    [activeSlide]
  );

  useEffect(
    function () {
      const track = trackRef.current;
      if (!track) return;

      function handleScroll() {
        const firstCard = track.querySelector('.dishes__card');
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 18;
        const distance = cardWidth + gap;

        const index = Math.round(track.scrollLeft / distance);
        const clamped = Math.max(0, Math.min(visibleDishes.length - 1, index));
        setActiveSlide(clamped);
      }

      track.addEventListener('scroll', handleScroll, { passive: true });
      return function () {
        track.removeEventListener('scroll', handleScroll);
      };
    },
    [visibleDishes.length]
  );

  useEffect(
    function () {
      if (paused) return;
      if (visibleDishes.length < 2) return;

      const id = setInterval(function () {
        const track = trackRef.current;
        if (!track) return;

        const isScrollable = track.scrollWidth > track.clientWidth + 4;
        if (!isScrollable) return;

        const firstCard = track.querySelector('.dishes__card');
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 18;
        const distance = cardWidth + gap;

        const next = (activeSlideRef.current + 1) % visibleDishes.length;

        track.scrollTo({
          left: distance * next,
          behavior: 'smooth',
        });
      }, 4000);

      return function () {
        clearInterval(id);
      };
    },
    [paused, resetKey, visibleDishes.length]
  );

  function scrollToSlide(index) {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector('.dishes__card');
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
      className={'dishes' + (isVisible ? ' dishes--visible' : '')}
      ref={sectionRef}
    >
      <div className="dishes__container">
        <header className="dishes__header">
          <div className="dishes__header-left">
            <p className="dishes__eyebrow">From our kitchen</p>
            <h2 className="dishes__title">
              Dishes our guests
              <br />
              keep coming back for.
            </h2>
          </div>

          <p className="dishes__intro">
            Every plate is built around seasonal produce, slow technique and a
            story worth telling. Here are the favourites.
          </p>
        </header>

        <div className="dishes__tabs" role="tablist" aria-label="Dish categories">
          {categories.map(function (category) {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={
                  'dishes__tab' + (isActive ? ' dishes__tab--active' : '')
                }
                onClick={function () {
                  setActiveCategory(category.id);
                }}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div
          className="dishes__grid"
          ref={trackRef}
          onMouseEnter={function () { setPaused(true); }}
          onMouseLeave={function () { setPaused(false); }}
          onTouchStart={function () { setPaused(true); }}
          onTouchEnd={function () { setPaused(false); }}
        >
          {visibleDishes.map(function (dish) {
            return (
              <article key={dish.id} className="dishes__card">
                <div className="dishes__card-media">
                  <img src={dish.image} alt={dish.name} loading="lazy" />

                  <span className="dishes__card-tag">
                    <i className="fa-solid fa-star" aria-hidden="true"></i>
                    {dish.tag}
                  </span>

                  <button
                    type="button"
                    className="dishes__card-fav"
                    aria-label={`Save ${dish.name}`}
                  >
                    <i className="fa-regular fa-heart" aria-hidden="true"></i>
                  </button>
                </div>

                <div className="dishes__card-body">
                  <div className="dishes__card-head">
                    <h3 className="dishes__card-title">{dish.name}</h3>
                    <span className="dishes__card-price">{dish.price}</span>
                  </div>

                  <p className="dishes__card-text">{dish.description}</p>

                  <div className="dishes__card-footer">
                    <div className="dishes__card-rating">
                      <i className="fa-solid fa-star" aria-hidden="true"></i>
                      <span className="dishes__card-rating-value">
                        {dish.rating}
                      </span>
                      <span className="dishes__card-rating-count">
                        ({dish.reviews})
                      </span>
                    </div>

                    <button 
                      type="button" 
                      className="dishes__card-cta"
                      onClick={function () {
                        addToCart(dish); 
                      }}
                    >
                      Order
                      <i className="fa-solid fa-plus dishes__card-cta-icon" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="dishes__carousel-meta">
          <p className="dishes__swipe-hint">
            <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
            Swipe to explore
          </p>

          <div className="dishes__dots" role="tablist" aria-label="Dishes">
            {visibleDishes.map(function (dish, index) {
              return (
                <button
                  key={dish.id}
                  type="button"
                  role="tab"
                  aria-selected={index === activeSlide}
                  aria-label={`Go to ${dish.name}`}
                  className={
                    'dishes__dot' +
                    (index === activeSlide ? ' dishes__dot--active' : '')
                  }
                  onClick={function () {
                    scrollToSlide(index);
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="dishes__view-all">
          <a href="/menu" className="dishes__view-all-btn">
            View Full Menu
            <i className="fa-solid fa-arrow-right dishes__view-all-icon" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PopularDishes;