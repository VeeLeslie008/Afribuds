import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink
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
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="AfriBuds" className="navbar__logo-img" />
        </Link>

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

        {/* Backdrop */}
        <div
          className={`navbar__backdrop ${isOpen ? 'active' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>

        {/* Drawer */}
        <div className={`navbar__right ${isOpen ? 'active' : ''}`}>
          
          <ul className="navbar__menu">
            {navLinks.map(function (link) {
              return (
                <li key={link.name} className="navbar__item">
                  {/* Use NavLink to automatically detect active route */}
                  <NavLink
                    to={link.href}
                    end={link.href === '/'} // 'end' ensures Home is only active on exactly "/"
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

          <div className="navbar__actions">
            <Link to="/cart" className="navbar__cart" onClick={closeMenu} aria-label="View Cart">
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
    </nav>
  );
}

export default Navbar;