import { useState, useEffect, useRef } from 'react';

function CancellationContent() {
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
      className={'cancellation-page' + (isVisible ? ' cancellation-page--visible' : '')} 
      ref={sectionRef}
    >
      <div className="cancellation-page__container">
        
        {/* --- Header --- */}
        <header className="cancellation-page__header">
          <p className="cancellation-page__eyebrow">Legal</p>
          <h1 className="cancellation-page__title">Cancellation Policy</h1>
          <p className="cancellation-page__last-updated">Last updated: October 2026</p>
        </header>

        {/* --- Content Body --- */}
        <div className="cancellation-page__content">
          
          <p className="cancellation-page__intro">
            We understand that plans can change unexpectedly. Because we source fresh, high-quality ingredients specifically for your bookings and events, our cancellation policy is designed to balance fairness to you with our operational commitments.
          </p>

          <div className="cancellation-page__section">
            <h2 className="cancellation-page__section-title">1. Dine-In Reservations</h2>
            <p className="cancellation-page__text">
              For standard table reservations, we kindly ask for at least <strong>24 hours notice</strong> if you need to cancel or reschedule. This allows us to offer your table to other waiting guests. 
            </p>
            <p className="cancellation-page__text">
              <em>No-Show Policy:</em> If you do not arrive within 15 minutes of your reservation time and have not notified us, we reserve the right to release your table to walk-in guests.
            </p>
          </div>

          <div className="cancellation-page__section">
            <h2 className="cancellation-page__section-title">2. Catering & Private Events</h2>
            <p className="cancellation-page__text">
              Private dining and large catering events require significant preparation. Therefore, the following timeline applies:
            </p>
            <ul className="cancellation-page__list">
              <li><strong>More than 7 days prior:</strong> Full refund of any deposit paid.</li>
              <li><strong>72 hours to 7 days prior:</strong> 50% refund of deposit, or transfer to a new date (subject to availability).</li>
              <li><strong>Less than 72 hours prior:</strong> The deposit is non-refundable, as ingredients and staff will have already been secured.</li>
            </ul>
          </div>

          <div className="cancellation-page__section">
            <h2 className="cancellation-page__section-title">3. Weekly Meal Prep</h2>
            <p className="cancellation-page__text">
              You can pause, skip, or cancel your weekly meal prep subscription without penalty. We simply require <strong>48 hours notice</strong> before your scheduled preparation day. If you cancel after this window, you will be charged for that week's meals.
            </p>
          </div>

          <div className="cancellation-page__section">
            <h2 className="cancellation-page__section-title">4. Takeaway & Delivery Orders</h2>
            <p className="cancellation-page__text">
              Once an order has been placed and the kitchen has begun preparation, it cannot be cancelled. If you need to cancel immediately after placing the order, please contact us right away via WhatsApp or phone. If preparation has not started, we will happily issue a full refund.
            </p>
          </div>

          <div className="cancellation-page__section">
            <h2 className="cancellation-page__section-title">5. Refund Processing</h2>
            <p className="cancellation-page__text">
              Where a refund is applicable, it will be processed using the original payment method. Please allow <strong>5 to 10 business days</strong> for the funds to reflect in your bank account, depending on your bank's processing times.
            </p>
          </div>

          <div className="cancellation-page__section">
            <h2 className="cancellation-page__section-title">6. Contact Us</h2>
            <p className="cancellation-page__text">
              To cancel a reservation or request a refund, please contact us as soon as possible at <a href="mailto:afribuds@gmail.com" className="cancellation-page__link">afribuds@gmail.com</a> or message us directly on WhatsApp at <a href="https://wa.me/2348082299961" target="_blank" rel="noreferrer" className="cancellation-page__link">+234 (0) 8082 2999 61</a>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CancellationContent;