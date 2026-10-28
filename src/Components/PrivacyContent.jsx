import { useState, useEffect, useRef } from 'react';

function PrivacyContent() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animation Observer
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

  return (
    <section 
      className={'privacy-page' + (isVisible ? ' privacy-page--visible' : '')} 
      ref={sectionRef}
    >
      <div className="privacy-page__container">
        
        {/* --- Header --- */}
        <header className="privacy-page__header">
          <p className="privacy-page__eyebrow">Legal</p>
          <h1 className="privacy-page__title">Privacy Policy</h1>
          <p className="privacy-page__last-updated">Last updated: October 2026</p>
        </header>

        {/* --- Content Body --- */}
        <div className="privacy-page__content">
          
          <p className="privacy-page__intro">
            At AfriBuds, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you visit our website, book our services, or order our food.
          </p>

          <div className="privacy-page__section">
            <h2 className="privacy-page__section-title">1. Information We Collect</h2>
            <p className="privacy-page__text">
              We only collect the information necessary to provide you with an exceptional dining experience. This may include:
            </p>
            <ul className="privacy-page__list">
              <li><strong>Contact Information:</strong> Your name, email address, and phone number (for booking confirmations and delivery updates).</li>
              <li><strong>Delivery Information:</strong> Your physical address and city for food delivery.</li>
              <li><strong>Order Details:</strong> The items you purchase, dietary restrictions, and special requests.</li>
            </ul>
          </div>

          <div className="privacy-page__section">
            <h2 className="privacy-page__section-title">2. How We Use Your Information</h2>
            <p className="privacy-page__text">
              Your data helps us serve you better. We use your information to:
            </p>
            <ul className="privacy-page__list">
              <li>Process and fulfill your food orders and catering bookings.</li>
              <li>Communicate with you regarding your reservations or deliveries.</li>
              <li>Send occasional updates, seasonal menus, or promotional offers (only if you opt-in).</li>
              <li>Improve our website and overall customer experience.</li>
            </ul>
          </div>

          <div className="privacy-page__section">
            <h2 className="privacy-page__section-title">3. Payment Security</h2>
            <p className="privacy-page__text">
              We take the security of your financial information seriously. When you make a payment, your bank details (such as card numbers or PINs) are processed securely by our licensed payment partners. <strong>AfriBuds does not store or have access to your card PINs or full bank account details.</strong>
            </p>
          </div>

          <div className="privacy-page__section">
            <h2 className="privacy-page__section-title">4. Third-Party Sharing</h2>
            <p className="privacy-page__text">
              We do not sell your personal information. We only share data with trusted third parties who help us operate our business, such as:
            </p>
            <ul className="privacy-page__list">
              <li><strong>Delivery Partners:</strong> We share your name, address, and phone number with riders (e.g., Glovo, Bolt Food) strictly for delivering your food.</li>
              <li><strong>Payment Processors:</strong> Secure gateways that handle your transactions.</li>
            </ul>
          </div>

          <div className="privacy-page__section">
            <h2 className="privacy-page__section-title">5. Cookies & Tracking</h2>
            <p className="privacy-page__text">
              Our website uses basic cookies to keep your cart items saved and to remember your preferences (like language or location). You can disable cookies in your browser settings, but doing so may affect your shopping experience on our site.
            </p>
          </div>

          <div className="privacy-page__section">
            <h2 className="privacy-page__section-title">6. Your Rights</h2>
            <p className="privacy-page__text">
              You have the right to request a copy of the personal data we hold about you, ask us to correct any inaccuracies, or request that we delete your data entirely from our systems. To do so, please contact us using the details below.
            </p>
          </div>

          <div className="privacy-page__section">
            <h2 className="privacy-page__section-title">7. Contact Us</h2>
            <p className="privacy-page__text">
              If you have any questions or concerns regarding your privacy or this policy, please contact us at <a href="mailto:afribuds@gmail.com" className="privacy-page__link">afribuds@gmail.com</a> or message us on WhatsApp at <a href="https://wa.me/2348082299961" target="_blank" rel="noreferrer" className="privacy-page__link">+234 (0) 8082 2999 61</a>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PrivacyContent;