import { useState, useEffect, useRef } from 'react';

// Comprehensive list of Nigerian Banks (including digital banks)
const NIGERIAN_BANKS = [
  "Access Bank", "Citibank", "Ecobank Nigeria", "Fidelity Bank", "First Bank of Nigeria",
  "First City Monument Bank (FCMB)", "Globus Bank", "Guaranty Trust Bank (GTBank)", 
  "Heritage Bank", "Jaiz Bank", "Keystone Bank", "Lotus Bank", "Parallex Bank", 
  "Polaris Bank", "Premium Trust Bank", "Providus Bank", "Stanbic IBTC Bank", 
  "Standard Chartered Bank", "Sterling Bank", "SunTrust Bank", "TajBank", 
  "Union Bank of Nigeria", "United Bank for Africa (UBA)", "Unity Bank", "Wema Bank", 
  "Zenith Bank", "Kuda Microfinance Bank", "Moniepoint MFB", "OPay Digital Services", 
  "PalmPay", "Sparkle Microfinance Bank", "VFD Microfinance Bank"
];

function CheckoutModal({ isOpen, onClose, total, cartItems, clearCart }) {
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bank: '',
    accountNo: '',
    pin: '',
  });
  const [otp, setOtp] = useState('');
  const [receipt, setReceipt] = useState(null);

  // --- Bank Search Dropdown State ---
  const [bankSearch, setBankSearch] = useState('');
  const [showBankList, setShowBankList] = useState(false);
  const bankDropdownRef = useRef(null);

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (bankDropdownRef.current && !bankDropdownRef.current.contains(event.target)) {
        setShowBankList(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter banks based on search input
  const filteredBanks = NIGERIAN_BANKS.filter(function (bank) {
    return bank.toLowerCase().includes(bankSearch.toLowerCase());
  });

  if (!isOpen) return null;

  function handleDetailSubmit(e) {
    e.preventDefault();
    if (!formData.bank) {
      alert("Please select a bank from the dropdown.");
      return;
    }
    setStep(2); // Move to OTP
  }

  function handleOtpSubmit(e) {
    e.preventDefault();
    setStep(3); // Processing

    setTimeout(() => {
      if (otp === '123456') {
        const txnId = 'TXN-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        const trackId = 'TRK-' + Math.floor(100000 + Math.random() * 900000);
        
        setReceipt({
          transactionId: txnId,
          trackingId: trackId,
          date: new Date().toLocaleString(),
          total: total,
          items: cartItems,
        });
        setStep(4); // Receipt
      } else {
        alert('Invalid OTP. Please enter 123456 for this demo.');
        setStep(2);
      }
    }, 2000);
  }

  function handleFinish() {
    clearCart();
    setStep(1);
    setFormData({ name: '', email: '', bank: '', accountNo: '', pin: '' });
    setBankSearch('');
    setOtp('');
    setReceipt(null);
    onClose();
  }

  return (
    <div className="checkout-modal">
      <div className="checkout-modal__overlay" onClick={step === 4 ? handleFinish : undefined}></div>
      
      <div className="checkout-modal__content">
        {step !== 3 && (
          <button className="checkout-modal__close" onClick={step === 4 ? handleFinish : onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}

        {/* STEP 1: PAYMENT DETAILS */}
        {step === 1 && (
          <div className="checkout-modal__step">
            <h2 className="checkout-modal__title">Payment Details</h2>
            <p className="checkout-modal__subtitle">Securely enter your bank information to proceed.</p>
            
            <form onSubmit={handleDetailSubmit} className="checkout-modal__form">
              <div className="checkout-modal__field">
                <label>Full Name</label>
                <input type="text" required placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="checkout-modal__field">
                <label>Email Address</label>
                <input type="email" required placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              
              <div className="checkout-modal__row">
                {/* Custom Searchable Bank Selector */}
                <div className="checkout-modal__field" ref={bankDropdownRef}>
                  <label>Bank Name</label>
                  <div className="checkout-modal__searchable-select">
                    <input 
                      type="text" 
                      required 
                      placeholder="Search bank..." 
                      value={bankSearch} 
                      onChange={(e) => {
                        setBankSearch(e.target.value);
                        setFormData({...formData, bank: e.target.value});
                        setShowBankList(true);
                      }} 
                      onFocus={() => setShowBankList(true)}
                    />
                    {showBankList && (
                      <ul className="checkout-modal__dropdown">
                        {filteredBanks.length > 0 ? (
                          filteredBanks.map(function (bank) {
                            return (
                              <li 
                                key={bank} 
                                onClick={() => {
                                  setBankSearch(bank);
                                  setFormData({...formData, bank: bank});
                                  setShowBankList(false);
                                }}
                              >
                                {bank}
                              </li>
                            );
                          })
                        ) : (
                          <li className="checkout-modal__dropdown-empty">No bank found</li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="checkout-modal__field">
                  <label>Account Number</label>
                  <input type="text" required placeholder="0123456789" maxLength="10" value={formData.accountNo} onChange={(e) => setFormData({...formData, accountNo: e.target.value})} />
                </div>
              </div>

              <div className="checkout-modal__field">
                <label>Card PIN</label>
                <input type="password" required placeholder="••••" maxLength="4" value={formData.pin} onChange={(e) => setFormData({...formData, pin: e.target.value})} />
              </div>

              <button type="submit" className="checkout-modal__btn">
                Pay ${total.toFixed(2)}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: OTP */}
        {step === 2 && (
          <div className="checkout-modal__step">
            <div className="checkout-modal__icon-wrap">
              <i className="fa-solid fa-mobile-screen"></i>
            </div>
            <h2 className="checkout-modal__title">Verify Payment</h2>
            <p className="checkout-modal__subtitle">
              A 6-digit OTP has been sent to the phone number linked to your account. <br/>
              <strong>(Demo: enter 123456)</strong>
            </p>
            
            <form onSubmit={handleOtpSubmit} className="checkout-modal__form">
              <div className="checkout-modal__field">
                <input 
                  type="text" 
                  className="checkout-modal__otp-input"
                  required 
                  placeholder="000000" 
                  maxLength="6" 
                  value={otp} 
                  onChange={(e) => setOtp(e.target.value)} 
                />
              </div>
              <button type="submit" className="checkout-modal__btn">
                Verify & Pay
              </button>
            </form>
          </div>
        )}

        {/* STEP 3: PROCESSING */}
        {step === 3 && (
          <div className="checkout-modal__step checkout-modal__step--center">
            <div className="checkout-modal__spinner"></div>
            <h2 className="checkout-modal__title">Processing Payment...</h2>
            <p className="checkout-modal__subtitle">Please do not close this window.</p>
          </div>
        )}

        {/* STEP 4: RECEIPT */}
        {step === 4 && receipt && (
          <div className="checkout-modal__step">
            <div className="checkout-modal__icon-wrap checkout-modal__icon-wrap--success">
              <i className="fa-solid fa-check"></i>
            </div>
            <h2 className="checkout-modal__title">Payment Successful</h2>
            
            <div className="checkout-modal__receipt">
              <div className="checkout-modal__receipt-header">
                <span>Receipt</span>
                <span>{receipt.date}</span>
              </div>
              
              <div className="checkout-modal__receipt-ids">
                <p><span>Transaction ID:</span> <strong>{receipt.transactionId}</strong></p>
                <p><span>Tracking ID:</span> <strong>{receipt.trackingId}</strong></p>
              </div>

              <div className="checkout-modal__receipt-items">
                {receipt.items.map(function(item) {
                  return (
                    <div key={item.id} className="checkout-modal__receipt-item">
                      <span>{item.quantity}x {item.name}</span>
                      <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>

              <div className="checkout-modal__receipt-total">
                <span>Total Paid</span>
                <span>${receipt.total.toFixed(2)}</span>
              </div>
            </div>

            <button onClick={handleFinish} className="checkout-modal__btn">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutModal;