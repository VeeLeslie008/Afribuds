import { useState } from 'react';
import { contactInfo } from '../Data/Data';

function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field) {
    return function (event) {
      setForm(function (prev) {
        return Object.assign({}, prev, { [field]: event.target.value });
      });
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    // TODO: wire up to your backend / email service
  }

  function resetForm() {
    setForm({
      firstName: '',
      email: '',
      phone: '',
      message: '',
    });
    setSubmitted(false);
  }

  return (
    <section className="contact">
      {/* Background image + overlay */}
      <div className="contact__bg" aria-hidden="true"></div>
      <div className="contact__overlay" aria-hidden="true"></div>

      <div className="contact__container">
        <h2 className="contact__title">Let's get in touch.</h2>

        <div className="contact__grid">
          {/* ---------- Left — Info card ---------- */}
          <aside className="contact__info">
            <h3 className="contact__info-title">Contact Information</h3>

            <ul className="contact__info-list">
              {contactInfo.map(function (item) {
                return (
                  <li key={item.id} className="contact__info-item">
                    <a
                      href={item.href}
                      className="contact__info-link"
                      target={
                        item.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        item.href.startsWith('http') ? 'noreferrer' : undefined
                      }
                    >
                      <i className={item.icon} aria-hidden="true"></i>
                      <span>{item.value}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* ---------- Right — Form / Success ---------- */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">
                  <i className="fa-solid fa-check" aria-hidden="true"></i>
                </span>

                <h3 className="contact__success-title">Message sent</h3>

                <p className="contact__success-text">
                  Thanks {form.firstName || 'friend'} — we'll be in touch
                  within 24 hours.
                </p>

                <button
                  type="button"
                  className="contact__success-back"
                  onClick={resetForm}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="contact-first">
                    First Name
                  </label>
                  <input
                    id="contact-first"
                    type="text"
                    className="contact__input"
                    placeholder="John"
                    value={form.firstName}
                    onChange={handleChange('firstName')}
                    required
                  />
                </div>

                <div className="contact__field-row">
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="contact-email">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="contact__input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange('email')}
                      required
                    />
                  </div>

                  <div className="contact__field">
                    <label className="contact__label" htmlFor="contact-phone">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="contact__input"
                      placeholder="(123) 456-7890"
                      value={form.phone}
                      onChange={handleChange('phone')}
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label className="contact__label" htmlFor="contact-message">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="contact__input contact__input--textarea"
                    rows="5"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={handleChange('message')}
                    required
                  ></textarea>
                </div>

                <div className="contact__actions">
                  <button type="submit" className="contact__submit">
                    Submit
                  </button>

                  <span className="contact__required">Required fields</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ---------- Full-width Map ---------- */}
      <div className="contact__map-wrap">
        <div className="contact__map">
          <iframe
            title="AfriBuds location — Uyo"
            src="https://www.google.com/maps?q=Eket+Akwa+Ibom&z=13&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;