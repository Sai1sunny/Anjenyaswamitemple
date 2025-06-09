// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './CalendarStyles.css'; // 👈 Import your custom styles

// const generateFakeEvents = (month, year) => {
//   const events = [
//     'Abhishekam',
//     'Pooja',
//     'Bhajan',
//     'Annadanam',
//     'Festival Celebration',
//     'Special Darshan',
//   ];

//   const eventDates = Array.from({ length: Math.floor(Math.random() * 6) + 3 }, () => {
//     const day = Math.floor(Math.random() * 28) + 1;
//     return {
//       date: new Date(year, month, day),
//       event: events[Math.floor(Math.random() * events.length)],
//     };
//   });

//   return eventDates;
// };

// const CalendarComponent = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [monthEvents, setMonthEvents] = useState([]);

//   useEffect(() => {
//     const month = currentMonth.getMonth();
//     const year = currentMonth.getFullYear();
//     const events = generateFakeEvents(month, year);
//     setMonthEvents(events);
//   }, [currentMonth]);

//   return (
//     <div className="calendar-container">
//       {/* Left: Calendar */}
//       <div className="calendar-panel">
//         <h2 className="calendar-title">🛕 Temple Events Calendar</h2>
//         <Calendar
//           onChange={setSelectedDate}
//           value={selectedDate}
//           onActiveStartDateChange={({ activeStartDate }) => setCurrentMonth(activeStartDate)}
//         />
//         <p className="selected-date">
//           Selected Date: <strong>{selectedDate.toDateString()}</strong>
//         </p>
//       </div>

//       {/* Right: Events */}
//       <div className="event-panel">
//         <h3 className="event-title">
//           📅 Events in {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
//         </h3>
//         {monthEvents.length > 0 ? (
//           <ul className="event-list">
//             {monthEvents.map((eventObj, index) => (
//               <li key={index} className="event-item">
//                 <span className="event-date">{eventObj.date.toDateString()}:</span>
//                 <span className="event-name">{eventObj.event}</span>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="no-events">No events scheduled.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CalendarComponent;



import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css'; // 👈 Import your custom styles
import { useTranslation } from 'react-i18next';  // Import useTranslation

const generateFakeEvents = (month, year, t) => {
  const events = [
    t('Abhishekam'),
    t('Pooja'),
    t('Bhajan'),
    t('Annadanam'),
    t('Festival Celebration'),
    t('Special Darshan'),
  ];

  const eventDates = Array.from({ length: Math.floor(Math.random() * 6) + 3 }, () => {
    const day = Math.floor(Math.random() * 28) + 1;
    return {
      date: new Date(year, month, day),
      event: events[Math.floor(Math.random() * events.length)],
    };
  });

  return eventDates;
};

const CalendarComponent = () => {
  const { t } = useTranslation();  // Use the translation hook
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthEvents, setMonthEvents] = useState([]);

  useEffect(() => {
    const month = currentMonth.getMonth();
    const year = currentMonth.getFullYear();
    const events = generateFakeEvents(month, year, t);
    setMonthEvents(events);
  }, [currentMonth, t]);

  return (
    <div className="calendar-container">
      {/* Left: Calendar */}
      <div className="calendar-panel">
        <h2 className="calendar-title">🛕 {t('templeEventsCalendar')}</h2> {/* Translated text */}
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          onActiveStartDateChange={({ activeStartDate }) => setCurrentMonth(activeStartDate)}
        />
        <p className="selected-date">
          {t('selectedDate')}: <strong>{selectedDate.toDateString()}</strong> {/* Translated text */}
        </p>
      </div>

      {/* Right: Events */}
      <div className="event-panel">
        <h3 className="event-title">
          📅 {t('eventsIn')} {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
        </h3>
        {monthEvents.length > 0 ? (
          <ul className="event-list">
            {monthEvents.map((eventObj, index) => (
              <li key={index} className="event-item">
                <span className="event-date">{eventObj.date.toDateString()}:</span>
                <span className="event-name">{eventObj.event}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-events">{t('noEventsScheduled')}</p>
          
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
