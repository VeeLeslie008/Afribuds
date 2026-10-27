import { useState } from 'react';
import { Link } from 'react-router-dom';
import { serviceCategories } from '../Data/ServicesData';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CustomDatePicker from '../Components/CustomDatePicker'; // <-- IMPORT HERE

// Helper to generate time slots
function generateTimeSlots(startHour, endHour) {
  const slots = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    for (let min = 0; min < 60; min += 30) {
      if (hour === endHour && min > 0) continue; 
      
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      const displayMin = min === 0 ? '00' : '30';
      
      slots.push(`${displayHour}:${displayMin} ${period}`);
    }
  }
  return slots;
}

function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: null,
    time: '',
    occasion: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleDateChange(date) {
    setFormData(prev => ({ ...prev, date: date, time: '' }));
  }

  function getAvailableTimes() {
    if (!formData.date) return [];

    const day = formData.date.getDay(); 
    const isCatering = formData.service !== 'Intimate & Everyday' && formData.service !== '';

    if (isCatering) {
      return generateTimeSlots(0, 23);
    }

    if (day >= 1 && day <= 5) {
      return generateTimeSlots(7, 21);
    } else if (day === 6) {
      return generateTimeSlots(10, 21);
    } else {
      return generateTimeSlots(14, 22);
    }
  }

  const availableTimes = getAvailableTimes();

  function nextStep() {
    if (step === 1 && (!formData.service || !formData.date || !formData.time)) {
      alert('Please select a service, date, and time.');
      return;
    }
    if (step === 2 && (!formData.occasion || !formData.guests)) {
      alert('Please select an occasion and guest count.');
      return;
    }
    setStep(prev => prev + 1);
  }

  function prevStep() {
    setStep(prev => prev - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }
    console.log('Booking submitted:', formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <section className="booking-page">
          <div className="booking-page__container booking-page__success">
            <span className="booking-page__success-icon">
              <i className="fa-solid fa-check"></i>
            </span>
            <h1 className="booking-page__success-title">Request Received!</h1>
            <p className="booking-page__success-text">
              Thank you, {formData.name}. We've received your request for {formData.date?.toLocaleDateString()} at {formData.time} and will reply within one business day.
            </p>
            <Link to="/" className="booking-page__success-btn">
              Back to Home
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="booking-page">
        <div className="booking-page__container">
          
          <header className="booking-page__header">
            <p className="booking-page__eyebrow">Reserve your date</p>
            <h1 className="booking-page__title">Let's set the table.</h1>
            <p className="booking-page__subtitle">
              Pick a day, share a few details. We reply within one business day.
            </p>
          </header>

          <div className="booking-page__progress">
            {[1, 2, 3].map((s) => (
              <div key={s} className={'booking-page__progress-step' + (s <= step ? ' booking-page__progress-step--active' : '')}>
                <span className="booking-page__progress-num">{s}</span>
                <span className="booking-page__progress-label">
                  {s === 1 && 'Service'}
                  {s === 2 && 'Details'}
                  {s === 3 && 'Contact'}
                </span>
              </div>
            ))}
          </div>

          <div className="booking-page__form-wrap">
            <form onSubmit={handleSubmit} className="booking-page__form">
              
              {step === 1 && (
                <div className="booking-page__step">
                  <h2 className="booking-page__step-title">What can we cook for you?</h2>

                  <div className="booking-page__field">
                    <label className="booking-page__label">Select Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="booking-page__input"
                      required
                    >
                      <option value="">Choose a service...</option>
                      {serviceCategories.map(cat => (
                        <option key={cat.id} value={cat.label}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="booking-page__field-row">
                    <div className="booking-page__field">
                      <label className="booking-page__label">Event Date</label>
                      {/* --- USING THE NEW COMPONENT HERE --- */}
                      <CustomDatePicker 
                        selected={formData.date} 
                        onChange={handleDateChange} 
                      />
                    </div>

                    {formData.date && (
                      <div className="booking-page__field booking-page__field--time">
                        <label className="booking-page__label">Event Time</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="booking-page__input"
                          required
                        >
                          <option value="">Select time...</option>
                          {availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  <button type="button" className="booking-page__btn booking-page__btn--primary" onClick={nextStep}>
                    Next Step <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              )}

              {/* Step 2 and 3 remain the same as before */}
              {step === 2 && (
                <div className="booking-page__step">
                  <h2 className="booking-page__step-title">Tell us about the occasion.</h2>
                  <div className="booking-page__field">
                    <label className="booking-page__label">Occasion</label>
                    <select name="occasion" value={formData.occasion} onChange={handleChange} className="booking-page__input" required>
                      <option value="">Select occasion...</option>
                      <option value="Date Night">Date Night</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate">Corporate Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="booking-page__field">
                    <label className="booking-page__label">Number of Guests</label>
                    <select name="guests" value={formData.guests} onChange={handleChange} className="booking-page__input" required>
                      <option value="">Select guest count...</option>
                      <option value="1–5">1–5 Guests</option>
                      <option value="6–10">6–10 Guests</option>
                      <option value="11–20">11–20 Guests</option>
                      <option value="21–50">21–50 Guests</option>
                      <option value="50+">50+ Guests</option>
                    </select>
                  </div>
                  <div className="booking-page__btn-row">
                    <button type="button" className="booking-page__btn booking-page__btn--ghost" onClick={prevStep}>
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <button type="button" className="booking-page__btn booking-page__btn--primary" onClick={nextStep}>
                      Next Step <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="booking-page__step">
                  <h2 className="booking-page__step-title">How do we reach you?</h2>
                  <div className="booking-page__field">
                    <label className="booking-page__label">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="booking-page__input" required />
                  </div>
                  <div className="booking-page__field">
                    <label className="booking-page__label">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="afribuds@gmail.com" className="booking-page__input" required />
                  </div>
                  <div className="booking-page__field">
                    <label className="booking-page__label">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" className="booking-page__input" required />
                  </div>
                  <div className="booking-page__field">
                    <label className="booking-page__label">Anything else? (Optional)</label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Dietary requirements, special requests..." className="booking-page__input booking-page__input--textarea" rows="3"></textarea>
                  </div>
                  <div className="booking-page__btn-row">
                    <button type="button" className="booking-page__btn booking-page__btn--ghost" onClick={prevStep}>
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <button type="submit" className="booking-page__btn booking-page__btn--primary">
                      Submit Request <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;