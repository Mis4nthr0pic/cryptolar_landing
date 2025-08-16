import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import Hero from './components/Hero';
import Alexandre from './components/Alexandre';
import About from './components/About';
import StarknetHackathon from './components/StarknetHackathon';
import Talks from './components/Talks';
import InvitedCompanies from './components/Speakers';
import Partners from './components/Partners';
import Location from './components/Location';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import VitalikEasterEgg from './components/VitalikEasterEgg';

function App() {
  const { i18n } = useTranslation();
  const [showVitalik, setShowVitalik] = useState(false);
  const [typedPhrase, setTypedPhrase] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      setTypedPhrase((prev) => {
        const newPhrase = (prev + event.key).toLowerCase();
        if (newPhrase.includes('vitalik')) {
          setShowVitalik(true);
          return ''; // Reset phrase after trigger
        }
        // Keep only the last few characters to avoid very long strings
        return newPhrase.slice(-10); 
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="font-body">
      <LanguageSwitcher />
      <Hero id="hero-section" />
      <Alexandre id="alexandre-section" />
      <About id="about-section" />
      <Talks id="talks-section" />
      <Location id="location-section" />
      <InvitedCompanies id="companies-section" />
      <CursorTrail />
      {/* <Partners id="partners-section" /> */}
      <StarknetHackathon id="hackathon-section" />
      <Footer />
      {showVitalik && <VitalikEasterEgg onClose={() => setShowVitalik(false)} />}
    </div>
  );
}

export default App;