import React from 'react';
import { useTranslation } from 'react-i18next';
import CryptoPriceWidget from './CryptoPriceWidget';
import SectionNavigator from './SectionNavigator';

const CryptoSection = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="relative min-h-screen py-20 bg-gradient-to-b from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating crypto symbols */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`crypto-${i}`}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              color: ['#f7931a', '#627eea', '#00d4aa', '#1652f0'][Math.floor(Math.random() * 4)],
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          >
            {['₿', 'Ξ', '◊', '⟠'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Live Crypto Prices
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Real-time cryptocurrency prices powered by CoinGecko API. 
            <span className="block mt-2 text-lg text-blue-300">
              Updates every 2 minutes with trend indicators
            </span>
          </p>
        </div>

        {/* Crypto Price Widget */}
        <div className="max-w-4xl mx-auto">
          <CryptoPriceWidget className="mb-12" />
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* API Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Real-Time Data</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Powered by CoinGecko API with automatic price updates every 2 minutes for accurate market data.
            </p>
          </div>

          {/* 3D Visualization */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">🎲</span>
              </div>
              <h3 className="text-lg font-semibold text-white">3D Visualization</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Interactive 3D panels built with Three.js showing price trends with smooth animations and visual feedback.
            </p>
          </div>

          {/* Trend Indicators */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Trend Analysis</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Visual trend indicators with green ▲ for price increases and red ▼ for decreases since last update.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <SectionNavigator 
          currentSectionId="crypto-section" 
          nextSectionId="hackathon-section" 
          variant="light"
        />
      </div>
    </section>
  );
};

export default CryptoSection;