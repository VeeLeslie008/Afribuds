import { useState, useEffect, useRef } from 'react';

function ContactContent() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Private Dining',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Here you would connect to your backend or email service
    setSubmitted(true);
  }

  return (
    <section 
      className={'contact-page' + (isVisible ? ' contact-page--visible' : '')} 
      ref={sectionRef}
    >
      <div className="contact-page__container">
        
        {/* --- Header --- */}
        <header className="contact-page__header">
          <p className="contact-page__eyebrow">Contact Us</p>
          <h1 className="contact-page__title">Let's set the table.</h1>
          <p className="contact-page__subtitle">
            Whether you're planning an intimate dinner or a grand celebration, we're here to help. Reach out and let's create something delicious together.
          </p>
        </header>

        {/* --- Main Grid --- */}
        <div className="contact-page__grid">
          
          {/* Left: Contact Info */}
          <aside className="contact-page__info">
            <div className="contact-page__info-item">
              <div className="contact-page__info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h3 className="contact-page__info-title">Visit Us</h3>
                <p className="contact-page__info-text">12 Oron Road, Uyo<br/>Akwa Ibom, Nigeria</p>
              </div>
            </div>

            <div className="contact-page__info-item">
              <div className="contact-page__info-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h3 className="contact-page__info-title">Call Us</h3>
                <p className="contact-page__info-text">+234 (0) 8082 2999 61</p>
              </div>
            </div>

            <div className="contact-page__info-item">
              <div className="contact-page__info-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h3 className="contact-page__info-title">Email Us</h3>
                <p className="contact-page__info-text">hello@afribuds.com</p>
              </div>
            </div>

            <div className="contact-page__info-item">
              <div className="contact-page__info-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div>
                <h3 className="contact-page__info-title">Opening Hours</h3>
                <p className="contact-page__info-text">
                  Mon–Fri: 7am – 9pm<br/>
                  Sat: 10am – 9pm<br/>
                  Sun: 2pm – 10pm
                </p>
              </div>
            </div>
          </aside>

          {/* Right: Contact Form */}
          <div className="contact-page__form-wrap">
            {submitted ? (
              <div className="contact-page__success">
                <span className="contact-page__success-icon">
                  <i className="fa-solid fa-check"></i>
                </span>
                <h3 className="contact-page__success-title">Message Sent!</h3>
                <p className="contact-page__success-text">
                  Thank you, {form.name}. We've received your message and will get back to you within 24 hours.
                </p>
                <button 
                  className="contact-page__success-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', phone: '', service: 'Private Dining', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-page__form">
                <div className="contact-page__field-row">
                  <div className="contact-page__field">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div className="contact-page__field">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      placeholder="afribuds@gmail.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="contact-page__field-row">
                  <div className="contact-page__field">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleChange} 
                      placeholder="+234 808 229 9961" 
                    />
                  </div>
                  <div className="contact-page__field">
                    <label>Service Interest</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="Private Dining">Private Dining</option>
                      <option value="Event Catering">Event Catering</option>
                      <option value="Weekly Meal Prep">Weekly Meal Prep</option>
                      <option value="Custom Menus">Custom Menus</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="contact-page__field">
                  <label>Your Message</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your event, dietary needs, or any questions you have..." 
                    rows="5" 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-page__submit">
                  Send Message
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* --- Map Section --- */}
        <div className="contact-page__map-wrap">
          <div className="contact-page__map">
            <iframe
              title="AfriBuds location — Uyo"
              src="https://www.google.com/maps?q=Uyo+Akwa+Ibom&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactContent;