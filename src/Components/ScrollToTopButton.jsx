import { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(function () {
    function toggleVisibility() {
      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', toggleVisibility);

    return function () {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button
      type="button"
      className={'scroll-top-btn' + (isVisible ? ' scroll-top-btn--visible' : '')}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}

export default ScrollToTopButton;