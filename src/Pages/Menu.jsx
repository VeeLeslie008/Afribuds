import { useState, useRef, useEffect, useContext } from 'react';
import { menuDishes } from '../Data/Products';
import { CartContext } from '../Components/Cartcontext';
import Footer from '../Components/Footer';

// --- Sub-component for individual Dish Cards ---
function MenuCard({ dish }) {
  const cartContext = useContext(CartContext);
  const addToCart = cartContext ? cartContext.addToCart : () => console.warn("No cart context");

  return (
    <article className="dishes__card menu-card">
      <div className="dishes__card-media">
        <img src={dish.image} alt={dish.name} loading="lazy" />
        <span className="dishes__card-tag">
          <i className="fa-solid fa-star" aria-hidden="true"></i>
          {dish.tag}
        </span>
        <button type="button" className="dishes__card-fav" aria-label={`Save ${dish.name}`}>
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
            <span className="dishes__card-rating-value">{dish.rating}</span>
            <span className="dishes__card-rating-count">({dish.reviews})</span>
          </div>

          <button 
            type="button" 
            className="dishes__card-cta"
            onClick={() => addToCart(dish)}
          >
            Order
            <i className="fa-solid fa-plus dishes__card-cta-icon" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </article>
  );
}

// --- Sub-component for the Horizontal Carousel Section ---
function MenuCarousel({ title, dishes }) {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const activeIndexRef = useRef(0);

  // 1. Intersection Observer for Section Entrance Animation
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

  // 2. Sync ref with state for the auto-slider interval
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // 3. Reset carousel if search filters change the number of dishes
  useEffect(() => {
    if (trackRef.current) trackRef.current.scrollTo({ left: 0 });
    setActiveIndex(0);
    activeIndexRef.current = 0;
    setResetKey(k => k + 1);
  }, [dishes.length]);

  // 4. Track scroll position to update dots
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function handleScroll() {
      const firstCard = track.querySelector('.menu-card');
      if (!firstCard) return;
      const distance = firstCard.offsetWidth + 24; // card width + gap
      const index = Math.round(track.scrollLeft / distance);
      setActiveIndex(Math.max(0, Math.min(dishes.length - 1, index)));
    }

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [dishes.length]);

  // 5. Auto-Slide Logic
  useEffect(() => {
    if (paused || dishes.length < 2) return;

    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      
      const firstCard = track.querySelector('.menu-card');
      if (!firstCard) return;
      
      const distance = firstCard.offsetWidth + 24;
      const next = (activeIndexRef.current + 1) % dishes.length;

      track.scrollTo({ left: distance * next, behavior: 'smooth' });
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(id);
  }, [paused, resetKey, dishes.length]);

  function scrollToIndex(index) {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector('.menu-card');
    if (!firstCard) return;
    
    let target = index;
    if (target < 0) target = dishes.length - 1;
    if (target >= dishes.length) target = 0;

    const distance = firstCard.offsetWidth + 24;
    track.scrollTo({ left: distance * target, behavior: 'smooth' });
    setActiveIndex(target);
  }

  function handleArrow(direction) {
    scrollToIndex(activeIndex + direction);
    setResetKey(k => k + 1);
  }

  function handleDotClick(index) {
    scrollToIndex(index);
    setResetKey(k => k + 1);
  }

  if (dishes.length === 0) return null;

  return (
    <div 
      className={`menu-section ${isVisible ? 'menu-section--visible' : ''}`}
      ref={sectionRef}
    >
      <div className="menu-section__header">
        <h2 className="menu-section__title">{title}</h2>
      </div>

      <div 
        className="menu-section__carousel-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Left Arrow */}
        <button 
          className="menu-section__arrow menu-section__arrow--prev"
          onClick={() => handleArrow(-1)}
          aria-label="Previous"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        {/* Track */}
        <div className="menu-section__track" ref={trackRef}>
          {dishes.map((dish) => (
            <MenuCard key={dish.id} dish={dish} />
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          className="menu-section__arrow menu-section__arrow--next"
          onClick={() => handleArrow(1)}
          aria-label="Next"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {/* Dots */}
      <div className="menu-section__dots">
        {dishes.map((dish, index) => (
          <button
            key={dish.id}
            className={`menu-section__dot ${index === activeIndex ? 'menu-section__dot--active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to ${dish.name}`}
          />
        ))}
      </div>
    </div>
  );
}

// --- Main Menu Page Component ---
function Menu() {
  const [searchQuery, setSearchQuery] = useState('');

  const sectionOrder = [
    { id: 'snacks', label: 'Snacks & Street Food' },
    { id: 'starters', label: 'Starters & Small Chops' },
    { id: 'mains', label: 'Main Dishes' },
    { id: 'soups', label: 'Soups & Swallow' },
    { id: 'native', label: 'Native Delicacies' },
    { id: 'pastries', label: 'Pastries & Baked Goods' },
  ];

  const getFilteredDishes = (categoryId) => {
    return menuDishes.filter((dish) => {
      const matchesCategory = dish.category === categoryId;
      const matchesSearch = 
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  return (
    <>
    <section className="menu-page">
      <div className="menu-page__container">
        
        <header className="menu-page__header">
          <div className="menu-page__header-text">
            <p className="menu-page__eyebrow">Our Full Menu</p>
            <h1 className="menu-page__title">Explore Nigerian Flavors</h1>
          </div>

          <div className="menu-page__search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input 
              type="text" 
              placeholder="Search all categories..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="menu-page__search-clear">
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </header>

        <div className="menu-page__sections">
          {sectionOrder.map((category) => {
            const categoryDishes = getFilteredDishes(category.id);
            return (
              <MenuCarousel 
                key={category.id} 
                title={category.label} 
                dishes={categoryDishes} 
              />
            );
          })}
          
          {menuDishes.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
             <div className="menu-page__empty">
               <h3>No dishes found</h3>
               <p>Try searching for something else.</p>
             </div>
          )}
        </div>

      </div>
    </section>

    <Footer />
  </>
          
  );
}

export default Menu;