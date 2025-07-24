import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionNavigator from './SectionNavigator';

const TalkCard = ({ talk, delay }) => {
  const { t } = useTranslation()
  
  return (
    <div 
      className="relative bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden transform hover:scale-105 hover:rotate-y-5 border border-white border-opacity-20 group perspective-1000"
      style={{ 
        animationDelay: `${delay}s`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255,255,255,0.3)',
        transform: 'translateZ(0) rotateX(10deg)',
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent opacity-20 transform -skew-y-12 scale-150 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-60"></div>
      <h3 className="relative text-2xl font-bold text-white mb-4 text-center transform group-hover:translateZ-10 transition-transform duration-300">
        {t(`talks.cards.${talk.key}.title`)}
      </h3>
      <p className="relative text-gray-200 text-center leading-relaxed transform group-hover:translateZ-5 transition-transform duration-300">
        {t(`talks.cards.${talk.key}.description`)}
      </p>
    </div>
  )
}

const Talks = ({ id }) => {
  const { t } = useTranslation()

  const talks = [
    { key: 'defi' },
    { key: 'daos' },
    { key: 'marketing' },
    { key: 'security' },
    { key: 'l2s' },
    { key: 'ai' },
    { key: 'oracles' },
    { key: 'network_societies' },
    { key: 'and_more' }
  ]

  return (
    <section id={id} className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating brain symbols */}
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
            🧠
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent text-center mb-16">
            {t('talks.title')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {talks.map((talk, index) => (
            <TalkCard 
              key={talk.key} 
              talk={talk} 
              delay={0.1 * (index + 1)} 
            />
          ))}
        </div>
      </div>
      
      {/* Navigation Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <SectionNavigator 
          currentSectionId="talks-section" 
          nextSectionId="location-section" 
          variant="light"
        />
      </div>
    </section>
  )
}

export default Talks