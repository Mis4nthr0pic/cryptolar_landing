import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionNavigator from './SectionNavigator';

const Location = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Small floating Live Long and Prosper symbols with white color */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-8 h-8 opacity-60 animate-float z-0 md:z-10" 
            style={{ 
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            <img 
              src="/images/live_long.png" 
              alt="Live Long and Prosper" 
              className="w-full h-full object-contain"
              style={{
                transform: `rotateY(${Math.random() * 60 - 30}deg) rotateX(${Math.random() * 40 - 20}deg) rotateZ(${Math.random() * 40 - 20}deg)`,
                filter: 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))',
                animation: `float ${4 + Math.random() * 4}s ease-in-out infinite, spinSlow ${8 + Math.random() * 8}s linear infinite`
              }}
            />
          </div>
        ))}
        
        {/* Stars background */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-white opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 8}px`,
              animation: `float ${3 + Math.random() * 6}s ease-in-out infinite, sparkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            ✦
          </div>
        ))}
        
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Live Long and Prosper symbols on edges with shake animation */}
      <div className="absolute left-4 top-1/4 w-32 h-32 z-0 md:z-20 hidden sm:block">
        <img 
          src="/images/live_long.png" 
          alt="Live Long and Prosper" 
          className="w-full h-full object-contain opacity-80"
          style={{
            animation: 'shake 3s ease-in-out infinite',
            filter: 'brightness(0) invert(1) drop-shadow(0 8px 24px rgba(59, 130, 246, 0.8))'
          }}
        />
      </div>
      <div className="absolute right-4 top-1/3 w-32 h-32 z-0 md:z-20 hidden sm:block">
        <img 
          src="/images/live_long.png" 
          alt="Live Long and Prosper" 
          className="w-full h-full object-contain opacity-80"
          style={{
            animation: 'shake 4s ease-in-out infinite',
            animationDelay: '1.5s',
            transform: 'scaleX(-1)',
            filter: 'brightness(0) invert(1) drop-shadow(0 8px 24px rgba(147, 51, 234, 0.8))'
          }}
        />
      </div>
      <div className="absolute left-4 bottom-1/4 w-32 h-32 z-0 md:z-20 hidden sm:block">
        <img 
          src="/images/live_long.png" 
          alt="Live Long and Prosper" 
          className="w-full h-full object-contain opacity-80"
          style={{
            animation: 'shake 3.5s ease-in-out infinite',
            animationDelay: '0.8s',
            filter: 'brightness(0) invert(1) drop-shadow(0 8px 24px rgba(16, 185, 129, 0.8))'
          }}
        />
      </div>
      <div className="absolute right-4 bottom-1/3 w-32 h-32 z-0 md:z-20 hidden sm:block">
        <img 
          src="/images/live_long.png" 
          alt="Live Long and Prosper" 
          className="w-full h-full object-contain opacity-80"
          style={{
            animation: 'shake 2.8s ease-in-out infinite',
            animationDelay: '2.2s',
            transform: 'scaleX(-1)',
            filter: 'brightness(0) invert(1) drop-shadow(0 8px 24px rgba(168, 85, 247, 0.8))'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('location.title')}
            </h2>
          </div>
          <div className="text-xl text-gray-300 mb-12">
            {t('location.subtitle')}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Media Section */}
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
                 style={{
                   boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
                   transform: 'perspective(1000px) rotateY(-5deg)',
                   height: '350px'
                 }}>
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                controls
                poster="/images/founderhaus_1.avif"
              >
                <source src="/images/founderhaus_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="transform hover:scale-105 transition-transform duration-300"
                   style={{
                     transform: 'perspective(1000px) rotateY(-3deg) rotateX(2deg)',
                   }}>
                <img 
                  src="/images/founderhaus_1.avif" 
                  alt="FounderHaus Interior" 
                  className="w-full h-48 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300"
                   style={{
                     transform: 'perspective(1000px) rotateY(3deg) rotateX(2deg)',
                   }}>
                <img 
                  src="/images/founderhaus_2.avif" 
                  alt="FounderHaus Space" 
                  className="w-full h-48 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
                 style={{
                   transform: 'perspective(1000px) rotateY(5deg)',
                   boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.3)'
                 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8">
                  <img 
                    src="/images/live_long.png" 
                    alt="Live Long and Prosper" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t('location.founderHausTitle')}
                </h3>
              </div>
              <p className="text-gray-300 mb-4" dangerouslySetInnerHTML={{
                __html: t('location.founderHausDesc1').replace(/\*\*(.*?)\*\*/g, '<strong class="text-green-400 font-bold">$1</strong>')
              }}>
              </p>
              <p className="text-gray-300 mb-4">
                {t('location.founderHausDesc2')}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
                 style={{
                   transform: 'perspective(1000px) rotateY(3deg)',
                   boxShadow: '0 20px 40px -12px rgba(59, 130, 246, 0.2)'
                 }}>
              <h4 className="text-xl font-bold mb-3 text-blue-400">{t('location.addressTitle')}</h4>
              <div className="text-gray-300 space-y-1">
                <p>{t('location.addressLine1')}</p>
                <p>{t('location.addressLine2')}</p>
                <p>{t('location.addressLine3')}</p>
                <p>{t('location.addressLine4')}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
             style={{
               boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
               transform: 'perspective(1000px) rotateX(3deg)',
             }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.8234567890123!2d-48.49123456789012!3d-27.601234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527345678901234%3A0x1234567890abcdef!2sAv.%20dos%20Merlins%2C%20156%20-%20Jurer%C3%AA%20Internacional%2C%20Florian%C3%B3polis%20-%20SC%2C%2088053-370!5e0!3m2!1sen!2sbr!4v1234567890123!5m2!1sen!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FounderHaus Location"
          ></iframe>
        </div>
      </div>
      
      {/* Navigation Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <SectionNavigator 
          currentSectionId="location-section" 
          nextSectionId="companies-section" 
          variant="light"
        />
      </div>
    </section>
  );
};

export default Location;