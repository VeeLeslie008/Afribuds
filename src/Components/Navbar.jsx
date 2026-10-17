import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 900;

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function toggleMenu() {
    setIsOpen(function (prev) {
      return !prev;
    });
  }

  function closeMenu() {
    setIsOpen(false);
  }
  useEffect(function () {
    function handleScroll() {
      const hero = document.getElementById('hero');
      const threshold = hero
        ? hero.offsetHeight - 80
        : window.innerHeight * 0.8;
      setScrolled(window.scrollY > threshold);
    }

    handleScroll(); // run once on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return function () {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Lock page scroll
  useEffect(
    function () {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset';

      function onKey(e) {
        if (e.key === 'Escape') setIsOpen(false);
      }
      if (isOpen) window.addEventListener('keydown', onKey);

      return function () {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', onKey);
      };
    },
    [isOpen]
  );

  // Close the drawer if the window is widened to desktop size
  useEffect(function () {
    function onResize() {
      if (window.innerWidth > MOBILE_BREAKPOINT) setIsOpen(false);
    }
    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const navClass =
    'navbar' +
    (scrolled ? ' navbar--scrolled' : '') +
    (isOpen ? ' navbar--open' : '');

  return (
    <nav className={navClass}>
      <div className="navbar__container">
        {/* Logo */}
        <a href="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-text">AfriBuds</span>
        </a>

        {/* Hamburger */}
        <button
          type="button"
          className={`navbar__hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <i
            className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}
            aria-hidden="true"
          ></i>
        </button>

        {/* Backdrop (mobile only) */}
        <div
          className={`navbar__backdrop ${isOpen ? 'active' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>

        {/* ONE drawer: menu + CTA together */}
        <div className={`navbar__right ${isOpen ? 'active' : ''}`}>
          <ul className="navbar__menu">
            {navLinks.map(function (link) {
              return (
                <li key={link.name} className="navbar__item">
                  <a
                    href={link.href}
                    className="navbar__link"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <a href="/book" className="navbar__cta" onClick={closeMenu}>
            Book a Consultation
            <i
              className="fa-solid fa-arrow-right navbar__cta-arrow"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;