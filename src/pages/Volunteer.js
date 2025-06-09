import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Volunteer = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `${t('volunteerWhatsappMessage')}\n\n${t('name')}: ${formData.name}\n${t('email')}: ${formData.email}\n${t('phone')}: ${formData.phone}\n${t('address')}: ${formData.address}`;

    const whatsappUrl = `https://wa.me/918074498661?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const fields = [
    { label: t('volunteerName'), name: 'name', placeholder: 'Your Full Name' },
    { label: t('email'), name: 'email', type: 'email', placeholder: 'you@example.com' },
    { label: t('phone'), name: 'phone', type: 'tel', placeholder: '9876543210' },
    { label: t('address'), name: 'address', placeholder: 'Your Address', type: 'textarea' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🧘 {t('volunteerTitle')}</h2>
      <p style={styles.subtext}>{t('volunteerDescription')}</p>

      <form onSubmit={handleSubmit}>
        {fields.map((field, idx) => (
          <div key={idx} style={styles.field}>
            <label style={styles.label}>{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                required
                placeholder={field.placeholder}
                style={styles.input}
              />
            ) : (
              <input
                type={field.type || 'text'}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                required
                placeholder={field.placeholder}
                style={styles.input}
              />
            )}
          </div>
        ))}

        <button type="submit" style={styles.submitButton}>
          {t('submitApplication')}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '550px',
    margin: '2rem auto',
    padding: '2rem',
    background: '#fffaf5',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Segoe UI', sans-serif",
    color: '#4e342e',
  },
  header: {
    textAlign: 'center',
    color: '#b71c1c',
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtext: {
    textAlign: 'center',
    color: '#6d4c41',
    fontSize: '1rem',
    marginBottom: '2rem',
  },
  field: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    background: '#fffdf5',
  },
  submitButton: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#8e1e1a',
    color: '#fff',
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

export default Volunteer;
