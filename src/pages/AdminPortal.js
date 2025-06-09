// import React, { useState } from 'react';

// // Dummy data for events, tours, and photos
// const dummyEvents = [
//   { id: 1, title: 'Event 1', description: 'Description of event 1' },
//   { id: 2, title: 'Event 2', description: 'Description of event 2' }
// ];
// const dummyTours = [
//   { id: 1, name: 'Tour 1', details: 'Details of tour 1' },
//   { id: 2, name: 'Tour 2', details: 'Details of tour 2' }
// ];
// const dummyPhotos = [
//   { id: 1, url: 'https://via.placeholder.com/150' },
//   { id: 2, url: 'https://via.placeholder.com/150' }
// ];
// const dummyLists = [
//   { id: 1, title: 'Saved List 1', content: 'Content of saved list 1' },
//   { id: 2, title: 'Saved List 2', content: 'Content of saved list 2' }
// ];

// const AdminPortal = () => {
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');
//   const [activeSection, setActiveSection] = useState(''); // Track active section
//   const [events, setEvents] = useState(dummyEvents);
//   const [tours, setTours] = useState(dummyTours);
//   const [photos, setPhotos] = useState(dummyPhotos);
//   const [savedLists, setSavedLists] = useState(dummyLists);

//   // Handle file change for uploading an image
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   // Handle form submission for image upload
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!image) {
//       setMessage('Please select an image to upload.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       const response = await fetch('http://localhost:5000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         setMessage('Image uploaded successfully!');
//       } else {
//         setMessage('Failed to upload the image.');
//       }
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       setMessage('Error uploading the image.');
//     }
//   };

//   // Handle deleting an item (event, tour, photo, list)
//   const handleDelete = (id, type) => {
//     if (type === 'event') {
//       setEvents(events.filter(event => event.id !== id));
//     } else if (type === 'tour') {
//       setTours(tours.filter(tour => tour.id !== id));
//     } else if (type === 'photo') {
//       setPhotos(photos.filter(photo => photo.id !== id));
//     } else if (type === 'list') {
//       setSavedLists(savedLists.filter(list => list.id !== id));
//     }
//   };

//   // Add New Event, Tour, or Saved List
//   const handleAddNew = (type, data) => {
//     if (type === 'event') {
//       setEvents([...events, { ...data, id: events.length + 1 }]);
//     } else if (type === 'tour') {
//       setTours([...tours, { ...data, id: tours.length + 1 }]);
//     } else if (type === 'list') {
//       setSavedLists([...savedLists, { ...data, id: savedLists.length + 1 }]);
//     }
//   };

//   // Render the admin section based on activeSection
//   const renderSectionContent = () => {
//     switch (activeSection) {
//       case 'events':
//         return (
//           <div>
//             <h2>Manage Events</h2>
//             {events.map((event) => (
//               <div key={event.id} style={{ marginBottom: '1rem' }}>
//                 <h3>{event.title}</h3>
//                 <p>{event.description}</p>
//                 <button onClick={() => handleDelete(event.id, 'event')} style={{ backgroundColor: '#e74c3c', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
//               </div>
//             ))}
//             <button onClick={() => handleAddNew('event', { title: 'New Event', description: 'New event description' })} style={{ backgroundColor: '#2ecc71', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//               Add New Event
//             </button>
//           </div>
//         );
//       case 'tours':
//         return (
//           <div>
//             <h2>Manage Tours</h2>
//             {tours.map((tour) => (
//               <div key={tour.id} style={{ marginBottom: '1rem' }}>
//                 <h3>{tour.name}</h3>
//                 <p>{tour.details}</p>
//                 <button onClick={() => handleDelete(tour.id, 'tour')} style={{ backgroundColor: '#e74c3c', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
//               </div>
//             ))}
//             <button onClick={() => handleAddNew('tour', { name: 'New Tour', details: 'New tour details' })} style={{ backgroundColor: '#2ecc71', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//               Add New Tour
//             </button>
//           </div>
//         );
//       case 'photos':
//         return (
//           <div>
//             <h2>Manage Photo Gallery</h2>
//             {photos.map((photo) => (
//               <div key={photo.id} style={{ marginBottom: '1rem' }}>
//                 <img src={photo.url} alt={`Photo ${photo.id}`} style={{ width: '150px', height: '150px', marginRight: '1rem' }} />
//                 <button onClick={() => handleDelete(photo.id, 'photo')} style={{ backgroundColor: '#e74c3c', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
//               </div>
//             ))}
//             <button onClick={() => handleAddNew('photo', { url: 'https://via.placeholder.com/150' })} style={{ backgroundColor: '#2ecc71', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//               Add New Photo
//             </button>
//           </div>
//         );
//       case 'lists':
//         return (
//           <div>
//             <h2>Manage Saved Lists</h2>
//             {savedLists.map((list) => (
//               <div key={list.id} style={{ marginBottom: '1rem' }}>
//                 <h3>{list.title}</h3>
//                 <p>{list.content}</p>
//                 <button onClick={() => handleDelete(list.id, 'list')} style={{ backgroundColor: '#e74c3c', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
//               </div>
//             ))}
//             <button onClick={() => handleAddNew('list', { title: 'New Saved List', content: 'Content for new list' })} style={{ backgroundColor: '#2ecc71', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//               Add New Saved List
//             </button>
//           </div>
//         );
//       default:
//         return (
//           <div>
//             <h2>Welcome to the Admin Portal</h2>
//             <p>Choose a section to manage data.</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
//       <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#343a40' }}>Admin Portal</h1>

//       {/* Navigation Buttons */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
//         <button onClick={() => setActiveSection('events')} style={{ backgroundColor: '#007bff', color: 'white', padding: '1rem 2rem', border: 'none', borderRadius: '5px', cursor: 'pointer', flex: 1, marginRight: '1rem' }}>
//           Manage Events & Tours
//         </button>
//         <button onClick={() => setActiveSection('photos')} style={{ backgroundColor: '#28a745', color: 'white', padding: '1rem 2rem', border: 'none', borderRadius: '5px', cursor: 'pointer', flex: 1, marginLeft: '1rem' }}>
//           Manage Photo Gallery
//         </button>
//       </div>

//       {/* Saved Lists Button */}
//       <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
//         <button onClick={() => setActiveSection('lists')} style={{ backgroundColor: '#ffc107', color: 'white', padding: '1rem 2rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//           Manage Lists
//         </button>
//       </div>

//       {/* Section Content */}
//       {renderSectionContent()}

//       {/* Back Button */}
//       {activeSection && (
//         <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
//           <button onClick={() => setActiveSection('')} style={{ backgroundColor: '#6c757d', color: 'white', padding: '1rem 2rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//             Back to Main
//           </button>
//         </div>
//       )}

//       {/* Message Display */}
//       {message && <p style={{ textAlign: 'center', marginTop: '1rem', color: '#343a40' }}>{message}</p>}
//     </div>
//   );
// };

// export default AdminPortal;
