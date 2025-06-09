import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SevaList = () => {
  const { t } = useTranslation();

  const [userName, setUserName] = useState('');
  const [selectedSeva, setSelectedSeva] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [gotra, setGotra] = useState('');
  const [pujaMode, setPujaMode] = useState('offline');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [upiQR, setUpiQR] = useState('');

  const sevas = [
    { name: 'Abhisheka Seva', amount: '1000' },
    { name: 'Sahasranama Archana', amount: '2000' },
    { name: 'Vastra Seva', amount: '5000' },
    { name: 'Chaturveda Prabandha', amount: '1500' },
    { name: 'Rudrabhishekam', amount: '3000' },
    { name: 'Sri Vishnu Sahasranama', amount: '2500' },
  ];

  const handleNameChange = (e) => setUserName(e.target.value);

  const handleSevaChange = (e) => {
    const sevaName = e.target.value;
    setSelectedSeva(sevaName);
    const selected = sevas.find(seva => seva.name === sevaName);
    if (selected) setAmount(selected.amount);

    if (selectedDate) {
      const msg = t('scheduledMessage', { seva: sevaName, date: selectedDate });
      setConfirmationMessage(msg);
    } else {
      setConfirmationMessage('');
    }
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);

    if (selectedSeva) {
      const msg = t('scheduledMessage', { seva: selectedSeva, date });
      setConfirmationMessage(msg);
    } else {
      setConfirmationMessage('');
    }
  };

  const handleGotraChange = (e) => setGotra(e.target.value);

  const handlePujaModeChange = (e) => {
    setPujaMode(e.target.value);

    if (selectedSeva) {
      const modeText = e.target.value === 'online' ? t('online') : t('offline');
      const msg = t('conductedModeMessage', { seva: selectedSeva, mode: modeText });
      setConfirmationMessage(msg);
    } else {
      setConfirmationMessage('');
    }
  };

  const handlePaymentConfirmationChange = (e) => setPaymentConfirmed(e.target.checked);

  const handleWhatsAppRegister = () => {
    if (paymentConfirmed) {
      const message = `Hello, I am ${userName} with Gotra ${gotra}. I would like to register for ${selectedSeva} (₹${amount}) at Sri Anjaneya Swami Temple.\n\nPuja Mode: ${pujaMode === 'online' ? t('online') : t('offline')}.\nScheduled Date: ${selectedDate}.`;
      const whatsappUrl = `https://wa.me/+918074498661?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      alert(t('errorMessage'));
    }
  };

  const isFormValid = userName && selectedSeva && selectedDate && gotra && paymentConfirmed;

  const handleUPIClick = () => {
    const upiLink = `upi://pay?pa=7989288815@postbank&pn=Chennareddy%20Yaswanth%20Kumar&am=${amount}&cu=INR`;
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;
    setUpiQR(qrURL);
  };

  const handlePhonePayClick = () => {
    const upiId = "7989288815@axl"; // Your PhonePe UPI ID
    const name = "Chennareddy Yaswanth Kumar";
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

    window.open(upiLink, '_blank');
  };

  const handleGPayClick = () => {
    const upiId = "yaswanthkumarch2001-1@okicici"; // Your GPay UPI ID
    const name = "Chennareddy Yaswanth Kumar"; // Your name (URL encoded below)
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&mode=02&purpose=00#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;

    window.open(upiLink, '_blank');
  };

  useEffect(() => {
    if (!isFormValid) {
      setErrorMessage(t('errorMessage'));
    } else {
      setErrorMessage('');
    }
  }, [userName, selectedSeva, selectedDate, gotra, paymentConfirmed, t, isFormValid]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{t('sevaListTitle')}</h1>

      {/* User Name */}
      <div style={styles.formGroup}>
        <label htmlFor="userName" style={styles.label}>{t('yourName')}</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={handleNameChange}
          style={styles.input}
          placeholder={t('')}
        />
      </div>

      {/* Select Seva */}
      <div style={styles.formGroup}>
        <label htmlFor="selectedSeva" style={styles.label}>{t('selectSeva')}</label>
        <select id="selectedSeva" value={selectedSeva} onChange={handleSevaChange} style={styles.select}>
          <option value="">{`${t('')}--`}</option>
          {sevas.map((seva, idx) => (
            <option key={idx} value={seva.name}>{seva.name}</option>
          ))}
        </select>
      </div>

      {/* Gotra */}
      <div style={styles.formGroup}>
        <label htmlFor="gotra" style={styles.label}>{t('enterGotra')}</label>
        <input
          type="text"
          id="gotra"
          value={gotra}
          onChange={handleGotraChange}
          style={styles.input}
          placeholder={t('')}
        />
      </div>

      {/* Date */}
      <div style={styles.formGroup}>
        <label htmlFor="selectedDate" style={styles.label}>{t('selectDate')}</label>
        <input
          type="date"
          id="selectedDate"
          value={selectedDate}
          onChange={handleDateChange}
          style={styles.input}
        />
      </div>

      {/* Puja Mode */}
      <div style={styles.formGroup}>
        <label htmlFor="pujaMode" style={styles.label}>{t('pujaMode')}</label>
        <select id="pujaMode" value={pujaMode} onChange={handlePujaModeChange} style={styles.select}>
          <option value="offline">{t('offline')}</option>
          <option value="online">{t('online')}</option>
        </select>
      </div>

      {/* Confirmation message and Payment Confirm checkbox */}
      {confirmationMessage && (
        <div style={styles.confirmationAndCheckboxContainer}>
          <p style={styles.confirmationMessage}>{confirmationMessage}</p>

          <div style={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={paymentConfirmed}
              onChange={handlePaymentConfirmationChange}
              id="paymentConfirmed"
              style={styles.checkbox}
            />
            <label htmlFor="paymentConfirmed" style={styles.label}>{t('confirmPayment')}</label>
          </div>
        </div>
      )}

      {/* Payment Amount and Options */}
      {selectedSeva && (
        <div style={styles.paymentDetails}>
          <p style={styles.paymentText}>
            {t('paymentAmount', { seva: selectedSeva, amount })}
          </p>
          <p style={styles.paymentText}>{t('choosePaymentMethod')}</p>
          <div style={styles.paymentOptions}>
            <button style={styles.paymentButton} onClick={handlePhonePayClick}>
               <img src="/ppay.png" alt="PPay" style={styles.paymentIcon} />  {t('phonePe')}
            </button>
            <button style={styles.paymentButton} onClick={handleGPayClick}>
               <img src="/gpay.png" alt="GPay" style={styles.paymentIcon} /> {t('gpay')}
            </button>
            <button style={styles.paymentButton} onClick={handleUPIClick}>
              <img src="/upi.png" alt="upiPay" style={styles.paymentIcon} /> {t('upi')}
            </button>
          </div>
        </div>
      )}

      {/* UPI QR Code */}
      {upiQR && (
        <div style={styles.qrCodeContainer}>
          <h2 style={styles.qrCodeHeader}>{t('scanToPay')}</h2>
          <img alt="UPI QR Code" width="250" height="250" src={upiQR} style={styles.qrCodeImage} />
        </div>
      )}

      {/* Error Message */}
      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

      {/* Register Button */}
      <button
        onClick={handleWhatsAppRegister}
        style={{ ...styles.button, opacity: isFormValid ? 1 : 0.6 }}
        disabled={!isFormValid}
      >
        {t('registerWhatsApp')}
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px', // Slightly wider container
    margin: '30px auto', // More top/bottom margin for breathing room
    padding: '30px',
    background: 'linear-gradient(135deg, #FFFDE7 0%, #FFECD2 100%)', // Soft, warm gradient
    borderRadius: '15px', // More rounded corners
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)', // Deeper, more refined shadow
    fontFamily: "'Playfair Display', serif", // A more elegant font (import via Google Fonts if needed)
    color: '#4A4A4A', // Darker text for readability
    border: '1px solid #FFCC80', // Subtle border with a warm temple color
  },
  header: {
    textAlign: 'center',
    color: '#8B4513', // Deep brown for heading, reminiscent of wood/earth
    marginBottom: '25px',
    fontSize: '2.5rem', // Larger heading
    fontWeight: '700',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)', // Subtle text shadow
    fontFamily: "'Merienda', cursive", // A decorative font for the title
  },
  formGroup: {
    marginBottom: '20px', // More space between form elements
  },
  label: {
    display: 'block',
    marginBottom: '8px', // More space for label
    fontWeight: 'bold', // Bold labels
    color: '#6A1B9A', // A rich purple for labels
    fontSize: '1.1rem',
  },
  input: {
    width: '100%',
    padding: '12px 15px', // More padding for input fields
    borderRadius: '8px', // Slightly more rounded
    border: '1px solid #D7CCC8', // Soft grey border
    fontSize: '1rem',
    background: '#FFFFFF',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)', // Subtle inner shadow
  },
  select: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #D7CCC8',
    fontSize: '1rem',
    background: '#FFFFFF',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)',
    cursor: 'pointer',
  },
  confirmationAndCheckboxContainer: {
    display: 'flex',
    flexDirection: 'column', // Stacked on small screens
    alignItems: 'flex-start', // Align items to the start
    gap: '15px',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#E8F5E9', // Light green for success
    borderRadius: '10px',
    border: '1px solid #A5D6A7',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  confirmationMessage: {
    color: '#2E7D32', // Darker green text
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: '600',
    lineHeight: '1.4',
  },
  checkbox: {
    marginRight: '10px', // More space for checkbox
    transform: 'scale(1.3)', // Slightly larger checkbox
    cursor: 'pointer',
    accentColor: '#FF8C42', // Accent color for checkbox
  },
  paymentDetails: {
    marginTop: '30px',
    backgroundColor: '#F3E5F5', // Light purple background for payment
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    border: '1px solid #CE93D8',
  },
  paymentText: {
    margin: '8px 0',
    fontSize: '1.1rem',
    color: '#6A1B9A', // Purple text for payment details
    fontWeight: '600',
  },
  paymentOptions: {
    display: 'flex',
    flexWrap: 'wrap', // Allow wrapping on smaller screens
    gap: '15px', // More space between buttons
    marginTop: '15px',
    justifyContent: 'center', // Center payment buttons
  },
  paymentButton: {
    flex: 1,
    minWidth: '120px', // Ensure buttons don't get too small
    padding: '12px 10px',
    background: 'linear-gradient(45deg, #FFD700 0%, #FFCC00 100%)', // Gold gradient
    color: '#8B4513', // Deep brown text for gold buttons
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  paymentButtonHover: {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.25)',
  },
  paymentIcon: {
    width: '24px',
    height: '24px',
    marginRight: '5px',
  },
  qrCodeContainer: {
    textAlign: 'center',
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    border: '1px dashed #FF8C42', // Dashed border for attention
  },
  qrCodeHeader: {
    color: '#8B4513',
    fontSize: '1.8rem',
    marginBottom: '15px',
  },
  qrCodeImage: {
    maxWidth: '100%', // Ensure QR code scales on smaller screens
    height: 'auto',
    border: '4px solid #FF8C42', // Saffron border around QR
    borderRadius: '8px',
  },
  errorMessage: {
    color: '#D32F2F', // Dark red for errors
    backgroundColor: '#FFEBEE', // Light red background for error message
    padding: '10px',
    borderRadius: '6px',
    marginTop: '20px',
    textAlign: 'center',
    fontWeight: '600',
    border: '1px solid #EF9A9A',
  },
  button: {
    width: '100%',
    padding: '18px 20px', // Larger, more prominent button
    background: 'linear-gradient(45deg, #FF8C42 0%, #FA8806 100%)', // Vibrant orange gradient
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontSize: '1.5rem', // Larger font
    fontWeight: 'bold', // Bold text
    cursor: 'pointer',
    marginTop: '30px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    letterSpacing: '1px', // Slightly spaced letters for emphasis
  },
  buttonHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
};

export default SevaList;