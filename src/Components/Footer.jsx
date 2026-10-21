import { useState, useRef, useEffect } from 'react';
import { footerColumns, footerSocials, footerBrand } from '../Data/Data';
import logo from '../assets/logo.png'; // <-- IMPORT YOUR LOGO HERE

function Footer() {
  const year = new Date().getFullYear();

  // --- Intersection Observer for Animations ---
  const footerRef = useRef(null);
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
      { threshold: 0.1 } // Triggers when 10% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return function () {
      observer.disconnect();
    };
  }, []);
  // ----------------------------------------------

  return (
    <footer
      className={'footer' + (isVisible ? ' footer--visible' : '')}
      ref={footerRef}
    >
      {/* ---------- Main footer ---------- */}
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__top">
            
            {/* ---------- Brand block (Left) ---------- */}
            <div className="footer__brand">
              <a href="/" className="footer__brand-logo">
                {/* REPLACED TEXT WITH LOGO IMAGE */}
                <img 
                  src={logo} 
                  alt={footerBrand.name} 
                  className="footer__brand-logo-img" 
                />
              </a>

              <p className="footer__brand-tagline">{footerBrand.tagline}</p>

              <ul className="footer__brand-info">
                <li>
                  <i className="fa-solid fa-location-dot footer__brand-icon" aria-hidden="true"></i>
                  <span>{footerBrand.address}</span>
                </li>
                <li>
                  <i className="fa-solid fa-phone footer__brand-icon" aria-hidden="true"></i>
                  <a href={`tel:${footerBrand.phone.replace(/\s|\(|\)/g, '')}`}>
                    {footerBrand.phone}
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope footer__brand-icon" aria-hidden="true"></i>
                  <a href={`mailto:${footerBrand.email}`}>
                    {footerBrand.email}
                  </a>
                </li>
              </ul>

              <div className="footer__socials">
                {footerSocials.map(function (social) {
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      className="footer__social"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                    >
                      <i className={social.icon} aria-hidden="true"></i>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ---------- Link columns (Right) ---------- */}
            <div className="footer__columns">
              {footerColumns.map(function (column) {
                return (
                  <div key={column.id} className="footer__column">
                    <h4 className="footer__column-title">{column.title}</h4>

                    <ul className="footer__column-list">
                      {column.links.map(function (link) {
                        return (
                          <li key={link.label} className="footer__column-item">
                            <a href={link.href} className="footer__column-link">
                              {link.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* ---------- Bottom bar (Centered) ---------- */}
      <div className="footer__bottom">
        <div className="footer__container footer__container--bottom">
          <p className="footer__copy">
            © {year} {footerBrand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;