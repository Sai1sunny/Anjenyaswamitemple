// import React, { useState, useEffect } from 'react';

// const DonationForm = () => {
//   const [form, setForm] = useState({
//     name: '',
//     amount: '',
//     gotra: '',
//     purpose: '',
//     email: '',
//   });

//   const [qrUrl, setQrUrl] = useState('');
//   const [upiLink, setUpiLink] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   useEffect(() => {
//     if (form.amount) {
//       const upi = `upi://pay?pa=7989288815@postbank&pn=Chennareddy%20Yaswanth%20Kumar&am=${form.amount}&cu=INR`;
//       const qr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upi)}`;
//       setQrUrl(qr);
//       setUpiLink(upi);
//     } else {
//       setQrUrl('');
//       setUpiLink('');
//     }
//   }, [form.amount]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = ` *Donation Details* 
// Name: ${form.name}
// Gotra: ${form.gotra}
// Purpose: ${form.purpose}
// Amount: ₹${form.amount}
// Email: ${form.email}`;

//     const whatsappUrl = `https://wa.me/918074498661?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.header}>🕉️ Hanuman Jayanti Donation Form</h2>
//       <p style={styles.subtext}>Support sacred services & rituals. Every contribution matters! </p>
//       <form onSubmit={handleSubmit}>
//         {fields.map((field, idx) => (
//           <div key={idx} style={styles.field}>
//             <label style={styles.label}>{field.label}</label>
//             <input
//               type={field.type || 'text'}
//               name={field.name}
//               value={form[field.name]}
//               onChange={handleChange}
//               required
//               style={styles.input}
//               placeholder={field.placeholder || ''}
//             />
//           </div>
//         ))}

//         {qrUrl && (
//           <div style={styles.qrSection}>
//             <h4 style={styles.qrHeader}>📱 Scan & Pay via UPI</h4>
//             <img src={qrUrl} alt="UPI QR Code" style={styles.qrImage} />
//             <p style={styles.instructions}>After payment, click the button below to notify us.</p>
//             <button type="submit" style={styles.paidButton}>
//                I Have Paid – Notify via WhatsApp
//             </button>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// const fields = [
//   { label: ' Full Name', name: 'name', placeholder: 'Ram Prasad' },
//   { label: ' Gotram', name: 'gotra', placeholder: 'Bharadwaja' },
//   { label: ' Purpose of Donation', name: 'purpose', placeholder: 'Annadanam' },
//   { label: ' Amount (₹)', name: 'amount', type: 'number', placeholder: '500' },
//   { label: ' Email Address', name: 'email', type: 'email', placeholder: 'ram@example.com' },
// ];

// const styles = {
//   container: {
//     maxWidth: '550px',
//     margin: '2rem auto',
//     padding: '2rem',
//     background: '#fffbea',
//     borderRadius: '16px',
//     boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
//     fontFamily: "'Segoe UI', sans-serif",
//     color: '#4e342e',
//   },
//   header: {
//     textAlign: 'center',
//     color: '#d84315',
//     fontSize: '1.8rem',
//     marginBottom: '0.5rem',
//   },
//   subtext: {
//     textAlign: 'center',
//     color: '#6d4c41',
//     fontSize: '1rem',
//     marginBottom: '2rem',
//   },
//   field: {
//     marginBottom: '1.3rem',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '0.5rem',
//     fontWeight: '600',
//   },
//   input: {
//     width: '100%',
//     padding: '0.8rem',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//     background: '#fffdf5',
//   },
//   qrSection: {
//     textAlign: 'center',
//     marginTop: '2rem',
//   },
//   qrHeader: {
//     fontSize: '1.2rem',
//     color: '#2e7d32',
//     marginBottom: '1rem',
//   },
//   qrImage: {
//     width: '250px',
//     height: '250px',
//     borderRadius: '12px',
//     border: '2px solid #e0e0e0',
//   },
//   instructions: {
//     marginTop: '1rem',
//     fontSize: '0.95rem',
//     color: '#555',
//   },
//   paidButton: {
//     marginTop: '1.5rem',
//     padding: '1rem',
//     backgroundColor: '#2e7d32',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     fontSize: '1.1rem',
//     cursor: 'pointer',
//     transition: 'background 0.3s ease',
//   },
// };

// export default DonationForm;

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DonationForm = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: '',
    amount: '',
    gotra: '',
    purpose: '',
    email: '',
  });

  const fields = [
    { label: t('name'), name: 'name', placeholder: 'Ram Prasad' },
    { label: t('gotra'), name: 'gotra', placeholder: 'Bharadwaja' },
    { label: t('purpose'), name: 'purpose', placeholder: t('annadanam') },
    { label: t('amount'), name: 'amount', type: 'number', placeholder: '500' },
    { label: t('email'), name: 'email', type: 'email', placeholder: 'ram@example.com' },
  ];

  const [qrUrl, setQrUrl] = useState('');
  // REMOVED: const [upiLink, setUpiLink] = useState(''); // This state is no longer needed
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Generate QR code when amount is provided
  useEffect(() => {
    if (form.amount && parseFloat(form.amount) > 0) { // Ensure amount is valid and positive
      // Generate UPI link locally for QR code, not as state
      const upi = `upi://pay?pa=7989288815@postbank&pn=Chennareddy%20Yaswanth%20Kumar&am=${form.amount}&cu=INR`;
      const qr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upi)}`;
      setQrUrl(qr);
      // REMOVED: setUpiLink(upi); // No longer setting upiLink state here
    } else {
      setQrUrl('');
      // REMOVED: setUpiLink(''); // No longer clearing upiLink state here
    }
  }, [form.amount]);

  // Handle form submission (for WhatsApp message - no direct form submit action)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
  };

  // Handle payment confirmation checkbox change
  const handlePaymentConfirmationChange = (e) => {
    setPaymentConfirmed(e.target.checked);
    if (e.target.checked) {
      setErrorMessage(''); // Clear error if confirmed
    }
  };

  // Handle WhatsApp registration (after payment)
  const handleWhatsAppRegister = () => {
    if (!form.name || !form.amount || !form.email || !form.gotra || !form.purpose) {
      setErrorMessage(t('fillAllFieldsError')); // You'll need to define 'fillAllFieldsError' in your translation file
      return;
    }

    if (paymentConfirmed) {
      const message = `${t('donationDetails')}\n\n` +
                      `${t('name')}: ${form.name}\n` +
                      `${t('gotra')}: ${form.gotra}\n` +
                      `${t('purpose')}: ${form.purpose}\n` +
                      `${t('amount')}: ₹${form.amount}\n` +
                      `${t('email')}: ${form.email}\n\n` +
                      `${t('paymentConfirmedMessage')}`; // You'll need to define 'paymentConfirmedMessage' in your translation file

      const whatsappUrl = `https://wa.me/918074498661?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setConfirmationMessage(t('registrationSuccess')); // You'll need to define 'registrationSuccess' in your translation file
      setErrorMessage(''); // Clear any previous errors
    } else {
      setErrorMessage(t('paymentNotConfirmedError'));
      setConfirmationMessage('');
    }
  };

  // Payment method specific handlers
  const handlePhonePeClick = () => {
    const upiId = "7989288815@axl"; // Your PhonePe UPI ID
    const name = "Chennareddy Yaswanth Kumar";
    const phonePeUpiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${form.amount}&cu=INR`;
    window.open(phonePeUpiLink, '_blank');
  };

  const handleGPayClick = () => {
    const upiId = "yaswanthkumarch2001-1@okicici"; // Your GPay UPI ID
    const name = "Chennareddy Yaswanth Kumar";
    const gPayUpiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${form.amount}&cu=INR&mode=02&purpose=00#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
    window.open(gPayUpiLink, '_blank');
  };

  const handleUPIClick = () => {
    // Generate UPI link locally for the QR code display
    const genericUpiLink = `upi://pay?pa=7989288815@postbank&pn=Chennareddy%20Yaswanth%20Kumar&am=${form.amount}&cu=INR`;
    const qr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(genericUpiLink)}`;
    setQrUrl(qr); // Show QR code when UPI button is clicked
  };

  // Form validity check
  const isFormValid = form.name && form.amount && parseFloat(form.amount) > 0 && form.email && form.gotra && form.purpose;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🕉️ {t('donationTitle')}</h2>
      <p style={styles.subtext}>{t('donationSubtext')}</p>
      <form onSubmit={handleSubmit}>
        {fields.map((field, idx) => (
          <div key={idx} style={styles.formGroup}>
            <label htmlFor={field.name} style={styles.label}>{field.label}</label>
            <input
              type={field.type || 'text'}
              id={field.name}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder={field.placeholder || ''}
            />
          </div>
        ))}

        {/* Payment Section - only show if amount is entered */}
        {form.amount && parseFloat(form.amount) > 0 && (
          <div style={styles.paymentSection}>
            <h4 style={styles.paymentHeader}>💰 {t('makePayment')}</h4>
            <p style={styles.paymentAmountText}>{t('yourDonationAmount', { amount: form.amount })}</p>

            <div style={styles.paymentOptions}>
              <button type="button" style={styles.paymentButton} onClick={handlePhonePeClick}>
               <img src="/ppay.png" alt="PhonePe" style={styles.paymentIcon} />
  {t('phonePe')}
              </button>
              <button type="button" style={styles.paymentButton} onClick={handleGPayClick}>
                <img src="/gpay.png" alt="GPay" style={styles.paymentIcon} />
                {t('gpay')}
              </button>
              <button type="button" style={styles.paymentButton} onClick={handleUPIClick}>
               <img src="/upi.png" alt="UPI" style={styles.paymentIcon} />
                 {t('upi')}
              </button>
            </div>

            {qrUrl && (
              <div style={styles.qrCodeContainer}>
                <h4 style={styles.qrHeader}>📱 {t('scanToPay')}</h4>
                <img src={qrUrl} alt="UPI QR Code" style={styles.qrImage} />
              </div>
            )}

            <p style={styles.instructions}>{t('afterPaymentNote')}</p>

            <div style={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="paymentConfirmed"
                checked={paymentConfirmed}
                onChange={handlePaymentConfirmationChange}
                style={styles.checkbox}
              />
              <label htmlFor="paymentConfirmed" style={styles.checkboxLabel}>{t('paymentConfirmationLabel')}</label>
            </div>

            {/* Error and Confirmation Messages */}
            {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}
            {confirmationMessage && <p style={styles.confirmationText}>{confirmationMessage}</p>}

            <button
              type="button"
              onClick={handleWhatsAppRegister}
              style={{ ...styles.registerButton, opacity: isFormValid && paymentConfirmed ? 1 : 0.6 }}
              disabled={!isFormValid || !paymentConfirmed}
            >
              {t('confirmRegistrationBtn')}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '650px',
    margin: '30px auto',
    padding: '35px',
    background: 'linear-gradient(135deg, #FFFDE7 0%, #FFECD2 100%)',
    borderRadius: '18px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25), 0 5px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Playfair Display', serif",
    color: '#4A4A4A',
    border: '1px solid #FFCC80',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
    color: '#8B4513',
    marginBottom: '15px',
    fontSize: '2.8rem',
    fontWeight: '700',
    textShadow: '2px 2px 4px rgba(0,0,0,0.15)',
    fontFamily: "'Merienda', cursive",
    position: 'relative',
    zIndex: 1,
  },
  subtext: {
    textAlign: 'center',
    color: '#6d4c41',
    fontSize: '1.1rem',
    marginBottom: '2.5rem',
    lineHeight: '1.5',
  },
  formGroup: {
    marginBottom: '22px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#6A1B9A',
    fontSize: '1.15rem',
  },
  input: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '10px',
    border: '1px solid #D7CCC8',
    fontSize: '1rem',
    background: '#FFFFFF',
    boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.08)',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    '&:focus': {
      borderColor: '#FF8C42',
      boxShadow: '0 0 0 3px rgba(255, 140, 66, 0.2)',
      outline: 'none',
    }
  },
  paymentSection: {
    marginTop: '30px',
    backgroundColor: '#F3E5F5',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    border: '1px solid #CE93D8',
    textAlign: 'center',
  },
  paymentHeader: {
    fontSize: '1.6rem',
    color: '#6A1B9A',
    marginBottom: '15px',
    fontWeight: '700',
  },
  paymentAmountText: {
    fontSize: '1.2rem',
    color: '#8B4513',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paymentOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    justifyContent: 'center',
    marginBottom: '25px',
  },
  paymentButton: {
    flex: '1 1 150px',
    maxWidth: '180px',
    padding: '12px 10px',
    background: 'linear-gradient(45deg, #FFD700 0%, #FFCC00 100%)',
    color: '#8B4513',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.25)',
    }
  },
  paymentIcon: {
    width: '28px',
    height: '28px',
    marginRight: '5px',
  },
  paymentLink: {
    display: 'inline-block',
    padding: '10px 15px',
    backgroundColor: '#00796b',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    marginTop: '10px',
    margin: '0 5px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#004d40',
    }
  },
  qrCodeContainer: {
    textAlign: 'center',
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    border: '1px dashed #FF8C42',
  },
  qrHeader: {
    color: '#8B4513',
    fontSize: '1.8rem',
    marginBottom: '15px',
    fontWeight: '700',
  },
  qrImage: {
    maxWidth: '100%',
    height: 'auto',
    border: '5px solid #FF8C42',
    borderRadius: '10px',
  },
  instructions: {
    marginTop: '25px',
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.5',
    backgroundColor: '#FFF8E1',
    padding: '15px',
    borderRadius: '10px',
    border: '1px solid #FFECB3',
  },
  checkboxContainer: {
    marginTop: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    marginRight: '10px',
    transform: 'scale(1.4)',
    cursor: 'pointer',
    accentColor: '#FF8C42',
  },
  checkboxLabel: {
    fontSize: '1.1rem',
    color: '#4A4A4A',
    fontWeight: '600',
  },
  errorText: {
    color: '#D32F2F',
    backgroundColor: '#FFEBEE',
    padding: '12px',
    borderRadius: '8px',
    marginTop: '20px',
    textAlign: 'center',
    fontWeight: '600',
    border: '1px solid #EF9A9A',
    fontSize: '1rem',
  },
  confirmationText: {
    color: '#2E7D32',
    backgroundColor: '#E8F5E9',
    padding: '12px',
    borderRadius: '8px',
    marginTop: '20px',
    textAlign: 'center',
    fontWeight: '600',
    border: '1px solid #A5D6A7',
    fontSize: '1rem',
  },
  registerButton: {
    width: '100%',
    padding: '18px 20px',
    background: 'linear-gradient(45deg, #FF8C42 0%, #FA8806 100%)',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '30px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease',
    letterSpacing: '1.5px',
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      boxShadow: 'none',
      transform: 'translateY(0)',
    },
    '&:hover:not(:disabled)': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.35)',
    }
  },
};

export default DonationForm;
