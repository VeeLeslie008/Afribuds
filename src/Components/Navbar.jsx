import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from './Cartcontext';
import logo from '../assets/logo.png';

const MOBILE_BREAKPOINT = 900;

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Menu', href: '/menu' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useContext(CartContext);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  // Switch to solid glass when scrolling past hero
  useEffect(function () {
    function handleScroll() {
      const hero = document.getElementById('hero');
      const threshold = hero ? hero.offsetHeight - 80 : window.innerHeight * 0.8;
      setScrolled(window.scrollY > threshold);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return function () {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Lock page scroll when mobile drawer is open
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

  // Close drawer on resize to desktop
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
        
        {/* Main Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="AfriBuds" className="navbar__logo-img" />
        </Link>

        {/* Mobile Controls (Cart + Hamburger) - Only visible on mobile */}
        <div className="navbar__mobile-actions">
          <Link to="/cart" className="navbar__cart navbar__cart--mobile" onClick={closeMenu} aria-label="View Cart">
            <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            {cartCount > 0 && (
              <span className="navbar__cart-badge">{cartCount}</span>
            )}
          </Link>

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
        </div>

        {/* Desktop Right Side / Mobile Drawer */}
        <div className={`navbar__right ${isOpen ? 'active' : ''}`}>
          
          {/* Drawer Logo (Mobile only) */}
          <Link to="/" className="navbar__drawer-logo" onClick={closeMenu}>
            <img src={logo} alt="AfriBuds" className="navbar__logo-img" />
          </Link>

          {/* Menu Links */}
          <ul className="navbar__menu">
            {navLinks.map(function (link) {
              return (
                <li key={link.name} className="navbar__item">
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    className={function ({ isActive }) {
                      return 'navbar__link' + (isActive ? ' navbar__link--active' : '');
                    }}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Actions (Cart + CTA) - Cart is hidden on mobile inside drawer */}
          <div className="navbar__actions">
            <Link to="/cart" className="navbar__cart navbar__cart--desktop" onClick={closeMenu} aria-label="View Cart">
              <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
              {cartCount > 0 && (
                <span className="navbar__cart-badge">{cartCount}</span>
              )}
            </Link>

            <Link to="/book" className="navbar__cta" onClick={closeMenu}>
              Book a Consultation
              <i className="fa-solid fa-arrow-right navbar__cta-arrow" aria-hidden="true"></i>
            </Link>
          </div>

        </div>
      </div>

      {/* Backdrop (Mobile only) */}
      <div
        className={`navbar__backdrop ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
    </nav>
  );
}

export default Navbar;