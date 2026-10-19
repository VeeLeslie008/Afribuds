import { useState, useRef, useEffect } from 'react';
import { galleryItems } from '../Data/Data';

// --- Sub-component for individual Gallery Images ---
function GalleryItem({ item, index }) {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Create a repeating array of directions: left, bottom, right, top
  const directions = ['left', 'bottom', 'right', 'top'];
  const direction = directions[index % directions.length];

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
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px' // Triggers slightly before it fully hits the viewport
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return function () {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      ref={itemRef}
      className={`gallery__item gallery__item--${item.size} gallery__item--${direction} ${
        isVisible ? 'gallery__item--visible' : ''
      }`}
    >
      <img src={item.image} alt={item.title} loading="lazy" />

      <div className="gallery__overlay">
        <div className="gallery__overlay-content">
          <span className="gallery__overlay-category">{item.category}</span>
          <h3 className="gallery__overlay-title">{item.title}</h3>
        </div>

        <span className="gallery__overlay-icon">
          <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </span>
      </div>
    </article>
  );
}

// --- Main Gallery Section ---
function Gallery() {
  // Still observe the header for its own separate animation
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
      className={'gallery' + (isVisible ? ' gallery--visible' : '')}
      ref={sectionRef}
    >
      <div className="gallery__container">
        {/* ---------- Header ---------- */}
        <header className="gallery__header">
          <div className="gallery__eyebrow">
            <span className="gallery__eyebrow-num">005</span>
            <span className="gallery__eyebrow-sep" aria-hidden="true"></span>
            <span className="gallery__eyebrow-label">Gallery</span>
          </div>

          <div className="gallery__header-row">
            <h2 className="gallery__title">
              Moments from
              <br />
              <em>our table.</em>
            </h2>

            <p className="gallery__subtitle">
              A look inside our kitchen, our plates, and the quiet details that
              make every evening feel like an occasion.
            </p>
          </div>
        </header>

        {/* ---------- Mosaic Grid ---------- */}
        <div className="gallery__grid">
          {galleryItems.map(function (item, index) {
            return <GalleryItem key={item.id} item={item} index={index} />;
          })}
        </div>

        {/* ---------- CTA ---------- */}
        <div className="gallery__cta-row">
          <a href="/gallery" className="gallery__cta">
            Explore Full Gallery
            <i
              className="fa-solid fa-arrow-right gallery__cta-icon"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;