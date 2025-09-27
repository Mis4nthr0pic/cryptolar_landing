import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import Hero from './components/Hero';
// import Alexandre from './components/Alexandre';
// import About from './components/About';
// import StarknetHackathon from './components/StarknetHackathon';
// import Talks from './components/Talks';
// import InvitedCompanies from './components/Speakers';
// import Partners from './components/Partners';
// import Location from './components/Location';
import Footer from './components/Footer';
// import CursorTrail from './components/CursorTrail';
// import VitalikEasterEgg from './components/VitalikEasterEgg';
// import Gallery from './components/Gallery';
// import ThankYou from './components/ThankYou';
import HackathonPrizes from './components/HackathonPrizes';
import HackathonSpecs from './components/HackathonSpecs';
import HackathonJudges from './components/HackathonJudges';
import HackathonSponsors from './components/HackathonSponsors';
import SubmissionDay from './components/SubmissionDay';
import HackathonResources from './components/HackathonResources';
import HackathonRules from './components/HackathonRules';
// import HackathonSubmit from './components/HackathonSubmit';
// import SocialLinksBand from './components/SocialLinksBand';

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
      {/* Hackathon-first landing */}
      <HackathonPrizes />
      <HackathonSpecs />
      <HackathonJudges />
      <SubmissionDay />
      <HackathonSponsors />
      {/* Starknet buildathon component removed per request */}
      {/** <StarknetHackathon id="hackathon-section" /> */}
      <HackathonResources />
      <HackathonRules />
      {/** <HackathonSubmit /> */}
      {/* Existing sections retained below */}
      {/**
       * Components from the Alexandre Melo block onward are commented out per request.
       */}
      {/** <Alexandre id="alexandre-section" /> */}
      {/** <About id="about-section" /> */}
      {/** <Talks id="talks-section" /> */}
      {/** <Location id="location-section" /> */}
      {/** <InvitedCompanies id="companies-section" /> */}
      {/** New media gallery for event photos/videos */}
      {/** <Gallery id="gallery-section" /> */}
      {/** Thank you section */}
      {/** <ThankYou id="thankyou-section" /> */}
      {/** <SocialLinksBand /> */}
      {/** <CursorTrail /> */}
      {/** <Partners id="partners-section" /> */}
      <Footer />
      {/** {showVitalik && <VitalikEasterEgg onClose={() => setShowVitalik(false)} />} */}
    </div>
  );
}

export default App;
