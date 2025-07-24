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
      
      {/* Event Info Panel - Mobile & Desktop Responsive */}
      <div className="absolute inset-x-4 bottom-8 md:right-8 md:top-1/2 md:transform md:-translate-y-1/2 md:inset-x-auto md:bottom-auto md:w-3/5 lg:w-2/3 xl:w-3/5 flex justify-center md:justify-start z-20">
        <div 
          className="relative max-w-lg lg:max-w-xl xl:max-w-2xl w-full text-white group"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(8,15,30,0.95) 50%, rgba(0,0,0,0.98) 100%)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
            transform: 'none'
          }}
        >
          {/* Clean Rotating Glow Border */}
          <div className="absolute inset-0 rounded-3xl">
            <div 
              className="absolute inset-0 rounded-3xl p-[2px] animate-border-rotate"
              style={{
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)',
                backgroundSize: '400% 400%'
              }}
            >
              <div 
                className="w-full h-full rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(8,15,30,0.95) 50%, rgba(0,0,0,0.98) 100%)',
                }}
              ></div>
            </div>
            
            {/* Outer glow effect */}
            <div 
              className="absolute inset-[-4px] rounded-3xl opacity-60 blur-lg animate-border-rotate"
              style={{
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)',
                backgroundSize: '400% 400%'
              }}
            ></div>
          </div>
          
          {/* Header with gradient title */}
          <div className="relative z-10 text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
            <div className="text-lg text-cyan-200 mb-4 font-semibold">
              📅 {t('about.details.date')}
            </div>
            <div className="text-gray-100 font-body leading-relaxed text-base md:text-lg font-normal space-y-4">
              <p className="text-gray-200">
                {t('about.subtitle.intro')}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 my-4">
                {t('about.subtitle.topics', { returnObjects: true }).map((topic, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-400/30 text-blue-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              
              <p className="text-yellow-200 font-medium">
                {t('about.subtitle.audience')}
              </p>
              
              <p className="text-gray-200" dangerouslySetInnerHTML={{
                __html: t('about.subtitle.hackathon').replace(/\*\*(.*?)\*\*/g, '<strong class="text-yellow-400 font-bold">$1</strong>')
              }}>
              </p>
            </div>
          </div>
          
          {/* Main Sponsors Section */}
          <div className="relative z-10 mb-8 text-center">
            <h3 className="text-lg font-semibold mb-4 text-cyan-200 flex items-center justify-center gap-2">
              <span className="text-xl">🏆</span>
              {t('about.sponsors')}
            </h3>
            <div className="flex items-center justify-center gap-6">
              <a href="https://ethereumlatam.org" target="_blank" rel="noopener noreferrer" className="bg-white/15 rounded-xl p-4 backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300 transform hover:scale-105 w-32 h-20 flex items-center justify-center">
                <img src="/images/sponsor_ethereum.svg" alt="Ethereum Latam" className="max-w-full max-h-full w-auto h-auto object-contain" />
              </a>
              <a href="https://starknet.io" target="_blank" rel="noopener noreferrer" className="bg-white/15 rounded-xl p-4 backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300 transform hover:scale-105 w-32 h-20 flex items-center justify-center">
                <img src="/images/sponsor_starknet.png" alt="Starknet" className="max-w-full max-h-full w-auto h-auto object-contain" />
              </a>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="relative z-10 text-center">
            <a 
              href="https://lu.ma/cryptolar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-body text-base md:text-lg"
            >
              📅 {t('about.buttons.registerOnLuma')}
            </a>
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