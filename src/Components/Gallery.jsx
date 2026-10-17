import { galleryItems } from '../Data/Data';

function Gallery() {
  return (
    <section className="gallery">
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
          {galleryItems.map(function (item) {
            return (
              <article
                key={item.id}
                className={`gallery__item gallery__item--${item.size}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />

                <div className="gallery__overlay">
                  <div className="gallery__overlay-content">
                    <span className="gallery__overlay-category">
                      {item.category}
                    </span>
                    <h3 className="gallery__overlay-title">{item.title}</h3>
                  </div>

                  <span className="gallery__overlay-icon">
                    <i
                      className="fa-solid fa-arrow-up-right-from-square"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </article>
            );
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