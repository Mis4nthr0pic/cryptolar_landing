import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionNavigator from './SectionNavigator';

const Hero = ({ id }) => {
  const { t } = useTranslation()


  return (
    <section 
      id={id}
      className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden py-4 md:py-20"
      style={{
        backgroundImage: 'url(/images/hero.png)'
      }}
    >
      {/* Background Overlay */}
      <div className="background-overlay absolute inset-0 bg-black/40"></div>
      
      {/* Ethereum Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-sm opacity-0 animate-sparkle"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
              animationIterationCount: 'infinite'
            }}
          />
        ))}
      </div>
      
      {/* Floating City Image */}
      <div className="floating-elements absolute top-4 right-2 md:top-8 md:right-8 z-0 md:z-10">
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-400/20 rounded-full blur-xl animate-wave-animation"></div>
        <img 
          src="/images/floating_city_above_hero.png" 
          alt="Floating City" 
          className="animate-float w-24 md:w-48 lg:w-64"
        />
      </div>
      
      {/* Moon Image */}
      <div className="floating-elements absolute top-4 left-2 md:top-20 md:left-10 z-0 md:z-10 w-16 h-16 md:w-32 md:h-32 rounded-full flex items-center justify-center animate-glow">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400/80 to-yellow-600/80 border-2 border-yellow-300 md:border-none shadow-inner animate-[moonPulse_8s_ease-in-out_infinite] opacity-80 md:opacity-100"></div>
      </div>
      
      {/* Hero Content */}
      <div className="hero-content relative z-40 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-2 md:mb-4 relative z-20">
          <img 
            src="/images/logo_crypto_lar.png" 
            alt="CryptoLar" 
            className="logo-container mx-auto animate-[logoFadeIn_1.5s_ease-out_0.5s_both] max-w-[250px] md:max-w-sm lg:max-w-md relative z-20 drop-shadow-lg"
          />
        </div>
        
        <p className="text-base md:text-xl lg:text-2xl mb-2 md:mb-4 text-white font-body font-medium">
          {t('hero.date')}
        </p>
        
        <h2 className="text-lg md:text-2xl lg:text-3xl font-display font-semibold mb-2 md:mb-4 text-white">
          {t('hero.tagline')}
        </h2>
        
        <p className="text-sm md:text-lg lg:text-xl text-white leading-relaxed font-body font-light mb-3 md:mb-6">
          {t('hero.subtitle')}
        </p>
        
        {/* Sponsors in Hero */}
        <div className="mt-2 md:mt-6">
          <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-4 font-body">
            {t('hero.sponsors')}
          </p>
          
          <div className="flex flex-col items-center gap-2 md:gap-4">
            {/* First Row - Main Sponsors */}
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <a href="https://ethereumlatam.org" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                <img src="/images/sponsor_ethereum.svg" alt="Ethereum Latam" className="h-12 md:h-20 lg:h-24 w-auto hover:scale-105 transition-transform duration-300" />
              </a>
              <a href="https://starknet.io" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                <img src="/images/sponsor_starknet.png" alt="Starknet" className="h-7 md:h-11 lg:h-14 w-auto hover:scale-105 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Second Row - Supporting Sponsors */}
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-5">
              <a href="https://stellar.org" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                <img src="/images/logo_stellar.png" alt="Stellar" className="h-8 md:h-12 lg:h-14 w-auto hover:scale-105 transition-transform duration-300" />
              </a>
              <a href="https://zokyo.io" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                <img src="/images/sponsor_zokyo.png" alt="Zokyo" className="h-8 md:h-12 lg:h-14 w-auto hover:scale-105 transition-transform duration-300" />
              </a>
              <a href="https://nearx.com.br/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                <img src="/images/sponsor_nearx.webp" alt="NearX" className="h-4 md:h-6 lg:h-8 w-auto hover:scale-105 transition-transform duration-300" />
              </a>
              <a href="https://x.com/opensensepw" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                <img src="/images/sponsor_opensense.png" alt="OpenSense" className="h-6 md:h-10 lg:h-12 w-auto hover:scale-105 transition-transform duration-300" />
              </a>
              <a href="https://ethereum.foundation" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                <img src="/images/sponsor_ethereum_foundation.png" alt="Ethereum Foundation" className="h-6 md:h-10 lg:h-12 w-auto hover:scale-105 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator Section */}
        <div className="mt-3 md:mt-6 flex flex-col items-center justify-center relative z-30">
          {/* Down Arrow Navigation */}
          <SectionNavigator 
            currentSectionId="hero-section" 
            nextSectionId="alexandre-section" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero