import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionNavigator from './SectionNavigator';

const CompanyCard = ({ company, delay }) => {
  const smallerLogos = ['OpenSense'];
  const biggerLogos = ['Ethereum Brasil'];
  const isSmaller = smallerLogos.includes(company.name);
  const isBigger = biggerLogos.includes(company.name);
  
  return (
    <a 
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 transform hover:scale-105 hover:rotate-1 transition-all duration-500 cursor-pointer group hover:bg-gradient-to-br hover:from-white/20 hover:via-blue-500/10 hover:to-purple-500/10 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/20"
      style={{ 
        animationDelay: `${delay}s`,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
        transform: 'perspective(1000px) rotateY(0deg)',
      }}
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-transparent rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center p-1 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md group-hover:shadow-blue-400/20">
        <img 
          src={`/images/${company.logo}`}
          alt={`${company.name} logo`}
          className={`object-contain transition-all duration-500 group-hover:brightness-110 group-hover:contrast-105 group-hover:saturate-105 ${isSmaller ? 'max-w-[60%] max-h-[60%]' : isBigger ? 'max-w-[95%] max-h-[95%]' : 'max-w-[80%] max-h-[80%]'}`}
          style={{ 
            filter: 'grayscale(100%) brightness(0) invert(1) drop-shadow(0 1px 3px rgba(0,0,0,0.2))',
            mixBlendMode: 'normal'
          }}
        />
      </div>
      <div className="text-center">
        <h3 className="text-sm sm:text-base font-medium text-white mb-1 transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transform group-hover:scale-105 group-hover:font-semibold">
          {company.name}
        </h3>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-blue-300 font-medium">
          Visit →
        </div>
      </div>
    </a>
  );
};

const InvitedCompanies = ({ id }) => {
  const { t } = useTranslation();

  const companies = [
    { name: 'Polygon', logo: 'logo_polygon.svg', website: 'https://polygon.technology/' },
    { name: 'Solana', logo: 'logo_solana.svg', website: 'https://solana.com/' },
    { name: 'OpenSense', logo: 'logo_opensense.png', website: 'https://x.com/opensensepw' },
    { name: 'Zokyo', logo: 'logo_zokyo.png', website: 'https://zokyo.io/' },
    { name: 'MOIC', logo: 'logo_moic.avif', website: 'https://www.moicdigital.com/' },
    { name: 'NearX', logo: 'logo_nearx.webp', website: 'https://nearx.com.br/' },
    { name: 'Stellar', logo: 'logo_stellar.png', website: 'https://stellar.org/' },
    { name: 'Ethereum Brasil', logo: 'logo_ethbr.png', website: 'https://www.ethereumbrasil.com/' },
    { name: 'Modular Crypto', logo: 'logo_modular.svg', website: 'https://www.modularcrypto.xyz/' },
    { name: 'Ipê City', logo: 'logo_ipe.png', website: 'https://ipe.city/' },
    { name: 'CaptuAI', logo: 'logo_captuai.png', website: 'https://www.capituai.cc/en' },
    { name: 'Blockful', logo: 'logo_blockful.png', website: 'https://blockful.io/' },
    { name: 'InfinityBase', logo: 'logo_infinity.png', website: 'https://www.infinitybase.com/' },
    { name: 'Dinamo', logo: 'logo_dinamo.png', website: 'https://dinamonetworks.com/' },
  ];

  return (
    <section id={id} className="py-12 sm:py-16 bg-gray-900 text-white relative overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating company symbols */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-white opacity-30 text-3xl z-10" 
            style={{ 
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite, spinSlow ${8 + Math.random() * 8}s linear infinite`
            }}
          >
            🏢
          </div>
        ))}
        
        {/* Stars background */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-white opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 8}px`,
              animation: `float ${3 + Math.random() * 6}s ease-in-out infinite, sparkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          >
            ✨
          </div>
        ))}
        
        {/* Floating particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent text-center mb-8 sm:mb-12">
          {t('companies.title')}
        </h2>
        
        {/* Company Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 relative z-10">
          {companies.map((company, index) => (
            <CompanyCard 
              key={company.name}
              company={company}
              delay={0.1 * index}
            />
          ))}
        </div>

      </div>
      
      {/* Navigation Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <SectionNavigator 
          currentSectionId="companies-section" 
          nextSectionId="hackathon-section" 
          variant="light"
        />
      </div>
    </section>
  );
};

export default InvitedCompanies;