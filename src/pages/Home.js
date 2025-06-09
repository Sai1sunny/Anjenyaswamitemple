// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';  // Import the translation hook

// const Home = () => {
//   const { t } = useTranslation();  // Get the translation function
//   const navigate = useNavigate();

//   return (
//     <div style={styles.container}>
//       {/* 🛕 Welcome Section */}
//       <section style={styles.welcomeSection}>
//         <div style={styles.contentWrapper}>
//           <div style={styles.textColumn}>
//             <h1 style={styles.heading}>
//               <span style={styles.highlight}>{t('welcomeTo')}</span>
//              {t('Sri Anjaneya Swami Temple')}
//             </h1>
//             <p style={styles.paragraph}>
//               {t('discoverSacredSpace')}
//             </p>
            
//           </div>
//           <div style={styles.imageColumn}>
//             <img src="temple-1.png" alt="Temple" style={styles.image} />
//           </div>
//         </div>
//       </section>

//       {/* ✨ Scrollable Attractive Sections One After Another */}

// {/* <Section
//   icon="📿"
//   title="Seva List & Booking"
//   desc="Experience spiritual bliss by booking your preferred sevas at the Hanuman Temple. From daily Archana to special Utsavams, participate in sacred rituals, offer prayers, and receive divine blessings. Limited slots available — book your seva now!"
//   button="Book Seva"
//   bg="#fff3cd"
//   onClick={() => navigate('/seva-list')}
// /> */}
// <Section
//   icon="📿"
//   title={t('title')}
//   desc={t('desc')}
//   button={t('button')}
//   bg="#fff3cd"
//   onClick={() => navigate('/seva-list')}
// />
//       <Section
//         icon="📰"
//         title={t('newsAndEvents')}
//         desc={t('stayUpdated')}
//         button={t('readMore')}
//         bg="#fff4e6"
//         onClick={() => navigate('/news-events')}
//       />

//       <Section
//         icon="🖼️"
//         title={t('photoGallery')}
//         desc={t('exploreCollection')}
//         button={t('viewGallery')}
//         bg="#fefefe"
//         onClick={() => navigate('/photo-gallery')}
//       />

//       <Section
//         icon="🙋"
//         title={t('volunteer')}
//         desc={t('joinSeva')}
//         button={t('joinUs')}
//         bg="#fff4e6"
//         onClick={() => navigate('/volunteer')}
//       />

//       <Section
//         icon="💰"
//         title={t('donate')}
//         desc={t('supportTemple')}
//         button={t('donateNow')}
//         bg="#fefefe"
//         onClick={() => navigate('/donate')}
//       />
//     </div>
//   );
// };

// // 🧩 Reusable Section Component
// const Section = ({ icon, title, desc, button, onClick, bg }) => {
//   return (
//     <section style={{ ...styles.section, backgroundColor: bg }}>
//       <h2 style={styles.sectionTitle}>{icon} {title}</h2>
//       <p style={styles.sectionDesc}>{desc}</p>
//       <button style={styles.actionButton} onClick={onClick}>{button}</button>
//     </section>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: 'Segoe UI, sans-serif',
//     scrollBehavior: 'smooth',
//   },

//   // Welcome Section
//   welcomeSection: {
//     background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
//     padding: '1rem 1rem',
//   },
//   contentWrapper: {
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '2rem',
//   },
//   textColumn: {
//     flex: '1',
//     maxWidth: '1500px',
//     animation: 'fadeInUp 1s ease-in-out',
//   },
//   heading: {
//     fontSize: '3rem',
//     fontWeight: '700',
//     color: '#2a2a2a',
//   },
//   highlight: {
//     display: 'block',
//     fontSize: '1.5rem',
//     fontWeight: '400',
//     color: '#c54b24',
//     marginBottom: '0.5rem',
//   },
//   paragraph: {
//     fontSize: '1.2rem',
//     color: '#4a4a4a',
//     lineHeight: '1.8',
//   },
//   buttonGroup: {
//     display: 'flex',
//     gap: '1rem',
//     marginTop: '2rem',
//   },
//   primaryButton: {
//     background: '#c54b24',
//     color: 'white',
//     padding: '1rem 2rem',
//     borderRadius: '30px',
//     fontSize: '1rem',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   secondaryButton: {
//     background: 'transparent',  // No background
//     color: '#2a2a2a',  // Text color
//     border: 'none',  // Remove border
//     padding: '1rem 2rem',
//     borderRadius: '30px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   imageColumn: {
//     flex: '1',
//   },
//   image: {
//     width: '100%',
//     maxWidth: '750px',
//     borderRadius: '12px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     animation: 'fadeIn 1.5s ease-in-out',
//   },

//   // Section Styles
//   section: {
//     padding: '4rem 2rem',
//     textAlign: 'center',
//     transition: 'all 0.3s ease-in-out',
//   },
//   sectionTitle: {
//     fontSize: '2rem',
//     fontWeight: '700',
//     marginBottom: '1rem',
//     color: '#c54b24',
//   },
//   sectionDesc: {
//     fontSize: '1.1rem',
//     color: '#555',
//     maxWidth: '600px',
//     margin: '0 auto 2rem',
//   },
//   actionButton: {
//     background: '#c54b24',
//     color: '#fff',
//     padding: '0.75rem 2rem',
//     border: 'none',
//     borderRadius: '30px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     transition: 'background 0.3s ease',
//   },
// };

// export default Home;


//import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};


//import React from 'react';
//import Slider from 'react-slick';
//import { useNavigate } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
  autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  const carouselImages = [
  {
    //desktop: 'dashboar_logo.png',
   desktop: 'mainlogo.jpg',
 mobile: 'temple-3.jpg',
  }
];
const isMobile = useIsMobile();
  //  'temple-1.png',
  //   'temple-2.png',
    
  //   'img-1.jpg',
  //   'img-2.jpg',
  //   'img-3.jpg'
//   const hanumanSevas = [
//   { name: 'Hanuman Archana', description: 'Offer prayers with sacred chants.' },
//   { name: 'Abhishekam', description: 'Ritual bathing of the deity with holy items.' },
//   { name: 'Alankaram', description: 'Decorating the idol with flowers and garments.' },
//   { name: 'Tulasi Mala Seva', description: 'Offering Tulasi garlands to Hanuman.' },
//   { name: 'Sankatahara Chaturthi Pooja', description: 'Special monthly prayer.' },
// ];

// const hanumanSevas = [
//   { nameEn: 'Hanuman Archana', nameTe: 'హనుమాన్ అర్చన', descEn: 'Offer prayers with sacred chants.', descTe: 'పవిత్ర మంత్రాలతో ప్రార్థనలు చేయండి.' },
//   { nameEn: 'Abhishekam', nameTe: 'అభిషేకం', descEn: 'Ritual bathing of the deity with holy items.', descTe: 'దేవుడికి పవిత్ర పదార్థాలతో అభిషేకం చేయడం.' },
//   { nameEn: 'Alankaram', nameTe: 'అలంకారం', descEn: 'Decorating the idol with flowers and garments.', descTe: 'పుష్పాలు మరియు వస్త్రాలతో విగ్రహాన్ని అలంకరించడం.' },
//   { nameEn: 'Tulasi Mala Seva', nameTe: 'తులసి మాల సేవ', descEn: 'Offering Tulasi garlands to Hanuman.', descTe: 'హనుమంతుడికి తులసి మాలలు సమర్పించడం.' },
//   { nameEn: 'Sankatahara Chaturthi Pooja', nameTe: 'సంకటహర చతుర్థి పూజ', descEn: 'Special monthly prayer.', descTe: 'ప్రత్యేకమైన మాస పూజ.' },
// ];

const hanumanSevas = [
  { nameKey: 'seva.archana.name', descKey: 'seva.archana.desc' },
  { nameKey: 'seva.abhishekam.name', descKey: 'seva.abhishekam.desc' },
  { nameKey: 'seva.alankaram.name', descKey: 'seva.alankaram.desc' },
  { nameKey: 'seva.tulasi.name', descKey: 'seva.tulasi.desc' },
  { nameKey: 'seva.sankatahara.name', descKey: 'seva.sankatahara.desc' },
];
            

  return (
    <div style={styles.container}>
      {/* 🛕 Welcome Section with Carousel Background */}
      <section style={styles.carouselWrapper}>
        <Slider {...sliderSettings}>
          {carouselImages.map((img, index) => (
            <div key={index}>
              <div
                style={{
                  ...styles.carouselSlide,
             backgroundImage: `url(${isMobile ? img.mobile : img.desktop})`
                }}
              >
                <div style={styles.overlay}>
                  <div style={styles.textColumn}>
                    <h1 style={styles.heading}>
                      <span style={styles.highlight}>{t('welcomeTo')}</span>
                      {t('Sri Anjaneya Swami Temple')}
                    </h1>
                    <p style={styles.paragraph}>{t('discoverSacredSpace')}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>


      {/* ✨ Scrollable Sections */}

      {/* <Section
        icon="📿"
        title={t('title')}
        desc={t('desc')}
        button={t('button')}
        bg="#fff3cd"
        onClick={() => navigate('/seva-list')}
      /> */}
      {/* 🛕 Hanuman Seva List Preview */}
{/* <section style={{ backgroundColor: '#fffbe6', padding: '3rem 2rem' }}>
  <h2 style={{
    textAlign: 'center',
    fontSize: '2.2rem',
    color: '#b23e18',
    fontWeight: '700',
    marginBottom: '2rem',
  }}>
    🙏 {t('Popular Sevas for Hanuman')}
  </h2>

  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1000px',
    margin: '0 auto',
  }}>
    {hanumanSevas.map((seva, index) => (
      <div key={index} style={{
        backgroundColor: '#fff',
        border: '1px solid #f0c36d',
        borderRadius: '10px',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s ease',
      }}>
       <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#c54b24', marginBottom: '0.5rem' }}>
  {t(seva.nameKey)}
</h3>
<p style={{ fontSize: '1rem', color: '#444', marginBottom: '1.5rem' }}>
  {t(seva.descKey)}
</p>
      </div>
    ))}
  </div>
</section> */}
{/* <section style={{ backgroundColor: '#fff8e1', padding: '4rem 2rem' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.4rem',
        color: '#7b1f1f',
        fontWeight: '700',
        marginBottom: '2.5rem',
        letterSpacing: '0.5px'
      }}>
        🙏 {t('Popular Sevas for Hanuman')}
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {hanumanSevas.map((seva, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            border: '1px solid #ffe0b2',
            borderRadius: '12px',
            padding: '1.8rem',
            boxShadow: '0 6px 18px rgba(0,0,0,0.07)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.3s ease',
          }}>
            <div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#c54b24',
                marginBottom: '0.5rem',
              }}>
                {seva.nameEn} <br />
                <span style={{ fontSize: '1.1rem', color: '#a35a1f' }}>{seva.nameTe}</span>
              </h3>
              <p style={{ fontSize: '1rem', color: '#444', marginBottom: '1.5rem' }}>
                {seva.descEn}<br />
                <span style={{ color: '#666' }}>{seva.descTe}</span>
              </p>
            </div>
            <button
              onClick={() => navigate('/seva-list')}
              style={{
                backgroundColor: '#c54b24',
                color: '#fff',
                padding: '0.6rem 1.5rem',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                alignSelf: 'flex-start',
                transition: 'background 0.3s ease',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#9b3a1a'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#c54b24'}
            >
              {t('Book Now')}
            </button>
          </div>
        ))}
      </div>
    </section>
  */}

 <section style={{ backgroundColor: '#fff3cd', padding: '4rem 1rem' }}>
      {/* Header + Description */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{
          fontSize: '2.3rem',
          color: '#7b1f1f',
          fontWeight: '700',
          marginBottom: '1rem',
        }}>
          📿 {t('title')}
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#4d3d2b',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          {t('desc')}
        </p>
        {/* <button
          onClick={() => navigate('/seva-list')}
          style={{
            marginTop: '1.5rem',
            backgroundColor: '#c54b24',
            color: '#fff',
            padding: '0.7rem 1.5rem',
            border: 'none',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#9b3a1a'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#c54b24'}
        >
          {t('button')}
        </button> */}
      </div>

      {/* Sevas List */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {hanumanSevas.map((seva, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            border: '1px solid #ffe0b2',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 6px 18px rgba(0,0,0,0.07)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#c54b24',
                marginBottom: '0.5rem',
                lineHeight: '1.4'
              }}>
                {t(seva.nameKey)}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#444',
                lineHeight: '1.6',
                marginBottom: '1.2rem'
              }}>
                {t(seva.descKey)}
              </p>
            </div>
            <button
              onClick={() => navigate('/seva-list')}
              style={{
                backgroundColor: '#c54b24',
                color: '#fff',
                padding: '0.5rem 1.2rem',
                border: 'none',
                borderRadius: '20px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                alignSelf: 'flex-start',
                transition: 'background 0.3s ease',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#9b3a1a'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#c54b24'}
            >
              {t('Book Now')}
            </button>
          </div>
        ))}
      </div>
    </section>
 


      
   

      <Section
        icon="📰"
        title={t('newsAndEvents')}
        desc={t('stayUpdated')}
        button={t('readMore')}     
         bg="#fff4e6"
        onClick={() => navigate('/news-events')}
      />
                  {/*  <Section
        icon="🖼️"
        title={t('photoGallery')}
        desc={t('exploreCollection')}
        button={t('viewGallery')}
        bg="#fefefe"
        onClick={() => navigate('/photo-gallery')}
      />*/}
      <Section
        icon="🙋"
        title={t('volunteer')}
        desc={t('joinSeva')}
        button={t('joinUs')}
        bg="#fff4e6"
        onClick={() => navigate('/volunteer')}
      />
      <Section
        icon="💰"
        title={t('donate')}
        desc={t('supportTemple')}
        button={t('donateNow')}
        bg="#fefefe"
        onClick={() => navigate('/donate')}
      />
    </div>
  );
};

// Reusable Section Component
const Section = ({ icon, title, desc, button, onClick, bg }) => (
  <section style={{ ...styles.section, backgroundColor: bg }}>
    <h2 style={styles.sectionTitle}>{icon} {title}</h2>
    <p style={styles.sectionDesc}>{desc}</p>
    <button style={styles.actionButton} onClick={onClick}>{button}</button>
  </section>
);

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    scrollBehavior: 'smooth',
  },

  // Carousel Welcome Section
  carouselWrapper: {
    position: 'relative',
    height: '80vh',
   
    overflow: 'hidden',
  },
  carouselSlide: {
    height: '80vh',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    textAlign: 'center',
    color: '#fff',
  },

  textColumn: {
    maxWidth: '900px',
    margin: '0 auto',
    animation: 'fadeInUp 1s ease-in-out',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#ffffff',
  },
  highlight: {
    display: 'block',
    fontSize: '1.5rem',
    fontWeight: '400',
    color: '#ffd700',
    marginBottom: '0.5rem',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#f0f0f0',
    lineHeight: '1.8',
  },

  // Section Styles
  section: {
    padding: '4rem 2rem',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#c54b24',
  },
  sectionDesc: {
    fontSize: '1.1rem',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto 2rem',
  },
  actionButton: {
    background: '#c54b24',
    color: '#fff',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

export default Home;
