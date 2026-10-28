import { useState, useEffect, useRef } from 'react';

function TermsContent() {
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
      className={'terms-page' + (isVisible ? ' terms-page--visible' : '')} 
      ref={sectionRef}
    >
      <div className="terms-page__container">
        
        {/* --- Header --- */}
        <header className="terms-page__header">
          <p className="terms-page__eyebrow">Legal</p>
          <h1 className="terms-page__title">Terms & Conditions</h1>
          <p className="terms-page__last-updated">Last updated: October 2026</p>
        </header>

        {/* --- Content Body --- */}
        <div className="terms-page__content">
          
          <p className="terms-page__intro">
            Welcome to AfriBuds. By accessing our website, booking our services, or ordering our food, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </p>

          <div className="terms-page__section">
            <h2 className="terms-page__section-title">1. Reservations & Bookings</h2>
            <p className="terms-page__text">
              All dining reservations and catering bookings are subject to availability. A booking is only confirmed once you receive a confirmation email from us. For large parties or private dining events, a deposit may be required to secure your date.
            </p>
          </div>

          <div className="terms-page__section">
            <h2 className="terms-page__section-title">2. Cancellations & Refunds</h2>
            <p className="terms-page__text">
              We understand that plans change. However, because we source fresh ingredients specifically for your event:
            </p>
            <ul className="terms-page__list">
              <li>Standard dine-in cancellations must be made at least 24 hours in advance.</li>
              <li>Catering and private dining cancellations made within 72 hours of the event may forfeit the deposit.</li>
              <li>Weekly meal prep orders can be paused or cancelled with 48 hours notice before the delivery day.</li>
            </ul>
          </div>

          <div className="terms-page__section">
            <h2 className="terms-page__section-title">3. Dietary Requirements & Allergies</h2>
            <p className="terms-page__text">
              We take allergies very seriously. It is the customer's responsibility to inform us of any dietary restrictions, intolerances, or allergies at the time of booking or ordering. While we take strict precautions in our kitchen, we cannot guarantee an entirely allergen-free environment.
            </p>
          </div>

          <div className="terms-page__section">
            <h2 className="terms-page__section-title">4. Delivery & Takeaway</h2>
            <p className="terms-page__text">
              Delivery times provided are estimates and may vary due to weather, traffic, or high demand. Once an order has been handed to our delivery partners or picked up by the customer, AfriBuds is not liable for any delays or damages. Please ensure someone is available to receive the food at the specified delivery address.
            </p>
          </div>

          <div className="terms-page__section">
            <h2 className="terms-page__section-title">5. Payments & Pricing</h2>
            <p className="terms-page__text">
              All prices displayed on the website are in Nigerian Naira (₦) and are inclusive of applicable taxes unless stated otherwise. We reserve the right to change our prices at any time without prior notice. Payments must be settled in full upon checkout or prior to the commencement of catering services.
            </p>
          </div>

          <div className="terms-page__section">
            <h2 className="terms-page__section-title">6. Liability</h2>
            <p className="terms-page__text">
              AfriBuds shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with the consumption of our food or the use of our services, to the maximum extent permitted by law.
            </p>
          </div>

          <div className="terms-page__section">
  <h2 className="terms-page__section-title">7. Contact Us</h2>
  <p className="terms-page__text">
    If you have any questions or concerns regarding these Terms & Conditions, please contact us at <a href="mailto:afribuds@gmail.com" className="terms-page__link">afribuds@gmail.com</a> or message us on WhatsApp at <a href="https://wa.me/2348082299961" target="_blank" rel="noreferrer" className="terms-page__link">+234 (0) 8082 2999 61</a>.
  </p>
</div>

        </div>
      </div>
    </section>
  );
}

export default TermsContent;