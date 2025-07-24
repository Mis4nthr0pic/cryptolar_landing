import React from 'react';
import { useTranslation } from 'react-i18next';

const PartnerCard = ({ delay }) => (
  <div 
    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300"
    style={{ 
      animationDelay: `${delay}s`,
      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.3)',
      transform: 'perspective(1000px) rotateY(0deg)',
    }}
  >
    <div className="w-24 h-24 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
      🏢
    </div>
    <div className="text-center">
      <div className="h-5 bg-gray-600 rounded opacity-50"></div>
    </div>
  </div>
);

const Partners = () => {
  const { t } = useTranslation();

  const placeholderPartners = Array.from({ length: 8 }, (_, index) => ({ id: index }));

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating partnership symbols */}
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
            🤝
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
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent text-center mb-16">
          {t('partners.title')}
        </h2>
        
        {/* Partner Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative">
          {placeholderPartners.map((_, index) => (
            <PartnerCard 
              key={index}
              delay={0.1 * index}
            />
          ))}
        </div>

        {/* 3D Glass Blocker Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="relative">
            {/* Main glass panel */}
            <div 
              className="bg-white/20 backdrop-blur-xl rounded-3xl p-12 border-2 border-white/30 shadow-2xl transform"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
                transform: 'perspective(1000px) rotateX(5deg) rotateY(-2deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
              
              {/* Content */}
              <div className="relative text-center">
                <div className="text-6xl mb-6">🤝</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t('partners.toBeAnnounced')}
                </h3>
                <p className="text-lg text-gray-200 mb-6 max-w-md">
                  {t('partners.toBeAnnouncedDesc')}
                </p>
                <div className="text-4xl">🤔</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-white/50 rounded-tl-lg"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-white/50 rounded-tr-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-white/50 rounded-br-lg"></div>
            </div>
            
            {/* Floating particles around the glass */}
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 400 - 50}px`,
                  top: `${Math.random() * 300 - 50}px`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;