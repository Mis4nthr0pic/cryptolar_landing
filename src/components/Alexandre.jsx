import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionNavigator from './SectionNavigator';
import QRCodeComponent from './QRCode';

const Alexandre = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section 
      id={id}
      className="relative flex items-center justify-center py-12 md:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
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
        {/* Main Container */}
        <div className="bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 backdrop-blur-xl rounded-3xl p-4 md:p-6 lg:p-8 border border-white/20 shadow-2xl relative overflow-hidden">
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-t-3xl"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent mb-3">
                {t('alexandre.title')}
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                {t('alexandre.subtitle')}
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              
              {/* Bio Content - Takes 2 columns on large screens */}
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  
                  {/* Web3 Journey */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-3 md:p-4 border border-gray-600/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <span className="text-lg">🚀</span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-blue-300">{t('alexandre.web3_start')}</h3>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">{t('alexandre.web3_start_desc')}</p>
                  </div>

                  {/* Education */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-3 md:p-4 border border-gray-600/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <span className="text-lg">🎓</span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-purple-300">{t('alexandre.education')}</h3>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">{t('alexandre.education_desc')}</p>
                  </div>

                  {/* Career */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-3 md:p-4 border border-gray-600/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <span className="text-lg">🌍</span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-green-300">{t('alexandre.career')}</h3>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">{t('alexandre.career_desc')}</p>
                  </div>

                  {/* Roles */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-3 md:p-4 border border-gray-600/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <span className="text-lg">👨‍💻</span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-orange-300">{t('alexandre.roles')}</h3>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">{t('alexandre.roles_desc')}</p>
                  </div>

                </div>

                {/* Community & Speaking - Full width */}
                <div className="space-y-3 md:space-y-4">
                  
                  {/* Community */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-3 md:p-4 border border-gray-600/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-lg">🌐</span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-cyan-300">{t('alexandre.community')}</h3>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">{t('alexandre.community_desc')}</p>
                  </div>

                  {/* Speaking */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-3 md:p-4 border border-gray-600/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-lg">🎤</span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-yellow-300">{t('alexandre.speaking')}</h3>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">{t('alexandre.speaking_desc')}</p>
                  </div>

                </div>
              </div>

              {/* Social Links & QR Codes - Takes 1 column on large screens */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-600/30 sticky top-8">
                  <h4 className="text-lg md:text-xl font-semibold mb-4 text-center bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    {t('alexandre.connect')}
                  </h4>
                  
                  <div className="space-y-4">
                    
                    {/* Alexandre Twitter */}
                    <div className="text-center">
                      <div className="flex flex-col items-center gap-2">
                        <QRCodeComponent text="https://x.com/mis4nthr0pic" size={80} className="mx-auto" />
                        <div>
                          <p className="text-gray-300 font-semibold mb-1 text-sm">Alexandre Melo</p>
                          <a 
                            href="https://x.com/mis4nthr0pic" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-mono transition-colors text-sm"
                          >
                            @mis4nthr0pic
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* CryptoLar Twitter */}
                    <div className="text-center">
                      <div className="flex flex-col items-center gap-2">
                        <QRCodeComponent text="https://x.com/cryptolarbrasil" size={80} className="mx-auto" />
                        <div>
                          <p className="text-gray-300 font-semibold mb-1 text-sm">CryptoLar Brasil</p>
                          <a 
                            href="https://x.com/cryptolarbrasil" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-mono transition-colors text-sm"
                          >
                            @cryptolarbrasil
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* LinkedIn */}
                    <div className="text-center">
                      <div className="flex flex-col items-center gap-2">
                        <QRCodeComponent text="https://www.linkedin.com/in/alexoncrypto/" size={80} className="mx-auto" />
                        <div>
                          <p className="text-gray-300 font-semibold mb-1 text-sm">LinkedIn</p>
                          <a 
                            href="https://www.linkedin.com/in/alexoncrypto/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                          >
                            /in/alexoncrypto
                          </a>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <SectionNavigator 
          currentSectionId="alexandre-section" 
          nextSectionId="about-section" 
          variant="light"
        />
      </div>
    </section>
  );
};

export default Alexandre;