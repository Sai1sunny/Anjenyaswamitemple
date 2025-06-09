import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageProvider'; // Import the LanguageProvider
//import NavBar from './components/NavBar';  // Ensure the NavBar component exists
import Footer from './components/Footer';  // Ensure Footer component exists
import Home from './pages/Home';  // Ensure the Home page exists
import SevaList from './pages/SevaList';  // Ensure SevaList page exists
import History from './pages/History';  // Ensure History page exists
import Contact from './pages/Contact';  // Ensure Contact page exists
import AdminPortal from './pages/AdminPortal';  // Ensure AdminPortal page exists
import DonationForm from './pages/DonationForm';  // Ensure DonationForm page exists
import CalendarComponent from './pages/CalendarComponent';  // Ensure CalendarComponent exists
import Volunteer from './pages/Volunteer';
import PhotoGallery from './pages/PhotoGallery'
import AppNavbar from './components/AppNavbar;';
import NewsEvents from './pages/NewsEvents'
import './styles/App.css';  // Ensure this file exists and has styles

function App() {
  return (
    <LanguageProvider> {/* Wrap your app with LanguageProvider */}
      <Router>
        <AppNavbar/>
    {/* <NavBar />    */}
       <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPortal />} />
            <Route path="/seva-list" element={<SevaList />} />
            <Route path="/history" element={<History />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/donate" element={<DonationForm />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/photo-gallery" element={<PhotoGallery/>} />
            <Route path="/calendar" element={<CalendarComponent />} />
          </Routes>
        </div>
        <Footer /> {/* Ensure Footer component exists */}
      </Router>
    </LanguageProvider> 
  );
}

export default App;
