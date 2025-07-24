import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionNavigator from './SectionNavigator';

const About = ({ id }) => {
  const { t } = useTranslation()

  return (
    <section 
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/section_about_the_event.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Floating Fisherman */}
      <div className="absolute left-0 top-1/3 transform -translate-y-1/3 animate-float z-10 w-1/2 flex justify-center pointer-events-none">
        <div className="relative">
          <img 
            src="/images/floating_fisherman_paralax.png" 
            alt="Floating Fisherman" 
            className="w-full max-w-lg h-auto pointer-events-none"
          />
          {/* Animated fishing line overlay */}
          <div className="absolute top-1/4 left-3/4 w-1 h-32 bg-gray-400 opacity-30 animate-[bobFishingLine_4s_ease-in-out_infinite] origin-top"></div>
          {/* Floating cube overlay */}
          <div className="absolute top-1/2 left-4/5 w-4 h-4 bg-blue-500 rounded opacity-70 animate-[floatCube_3s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
      {/* Multiple Content Boxes */}
      <div className="absolute inset-2 md:inset-8 flex flex-col justify-start md:justify-center items-center z-20 pt-4 md:pt-0 overflow-y-auto max-h-screen">
        
        {/* Main Title Box */}
        <div className="bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-white/30 shadow-2xl text-center max-w-2xl w-full mb-4 md:mb-6 relative overflow-hidden">
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-t-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-3xl font-display font-bold mb-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
            <div className="text-cyan-200 font-semibold text-sm md:text-base">
              📅 {t('about.details.date')}
            </div>
          </div>
        </div>

        {/* Content Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl w-full px-2 md:px-0">
          
          {/* What We Explore Box */}
          <div className="bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 backdrop-blur-xl rounded-2xl p-4 md:p-5 border border-white/30 shadow-2xl text-white relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-t-2xl"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white">
                {t('about.subtitle.intro')}
              </h3>
              <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                {t('about.subtitle.topics', { returnObjects: true }).map((topic, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full text-xs md:text-sm border border-blue-400/50 text-blue-200 shadow-lg backdrop-blur-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Audience Box */}
          <div className="bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 backdrop-blur-xl rounded-2xl p-4 md:p-5 border border-white/30 shadow-2xl text-white relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-t-2xl"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white">
                Para Quem
              </h3>
              <p className="text-gray-200 text-xs md:text-sm">
                {t('about.subtitle.audience')}
              </p>
            </div>
          </div>

          {/* Sponsors Box */}
          <div className="bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 backdrop-blur-xl rounded-2xl p-4 md:p-5 border border-white/30 shadow-2xl text-white relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-t-2xl"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white">
                {t('about.sponsors')}
              </h3>
              <div className="flex items-center justify-center gap-4 md:gap-6">
                <img src="/images/sponsor_ethereum.svg" alt="Ethereum Latam" className="h-8 md:h-12 w-auto filter drop-shadow-lg" />
                <img src="/images/sponsor_starknet.png" alt="Starknet" className="h-6 md:h-9 w-auto filter drop-shadow-lg" />
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 backdrop-blur-xl rounded-2xl p-4 md:p-5 border border-white/30 shadow-2xl text-white relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-t-2xl"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white">
                Participe
              </h3>
              <a 
                href="https://lu.ma/cryptolar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-2 px-3 md:px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-xs md:text-sm shadow-lg"
              >
                📅 {t('about.buttons.registerOnLuma')}
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Navigation Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <SectionNavigator 
          currentSectionId="about-section" 
          nextSectionId="talks-section" 
        />
      </div>
    </section>
  )
}

export default About