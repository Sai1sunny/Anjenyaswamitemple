import React from 'react';

const TempleTimings = () => {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '900px',
      margin: '0 auto',
      background: 'linear-gradient(to right, #fff8f6, #fff2ec)',
      borderRadius: '15px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <h1 style={{
        color: '#8e1e1a',
        textAlign: 'center',
        fontSize: '2.8rem',
        position: 'relative',
        marginBottom: '2rem'
      }}>
        Temple Timings
        <span style={{
          position: 'absolute',
          left: '50%',
          bottom: '-10px',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '4px',
          backgroundColor: '#f4b400',
          borderRadius: '2px'
        }}></span>
      </h1>

      {/* Temple Timings Table */}
      <div style={{
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#555'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1rem',
          borderRadius: '10px',
          overflow: 'hidden',
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f4b400', color: '#fff' }}>
              <th style={{
                padding: '10px',
                borderRadius: '5px',
                fontWeight: 'bold'
              }}>Day</th>
              <th style={{
                padding: '10px',
                borderRadius: '5px',
                fontWeight: 'bold'
              }}>Morning Timings</th>
              <th style={{
                padding: '10px',
                borderRadius: '5px',
                fontWeight: 'bold'
              }}>Evening Timings</th>
            </tr>
          </thead>
          <tbody>
            {/* Each row */}
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                <td style={{
                  padding: '12px',
                  textAlign: 'center',
                  borderBottom: '1px solid #ddd'
                }}>{day}</td>
                <td style={{
                  padding: '12px',
                  textAlign: 'center',
                  borderBottom: '1px solid #ddd'
                }}>6:00 AM - 12:00 PM</td>
                <td style={{
                  padding: '12px',
                  textAlign: 'center',
                  borderBottom: '1px solid #ddd'
                }}>4:00 PM - 8:00 PM</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TempleTimings;
