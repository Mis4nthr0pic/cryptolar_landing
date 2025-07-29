import React from 'react';
import { useTranslation } from 'react-i18next';
import StarknetBackgroundSimple from './StarknetBackgroundSimple';

const StarknetHackathon = ({ id }) => {
  const { t } = useTranslation()

  return (
    <section id={id} className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* 3D Starknet Background with ZK Formulas */}
      <StarknetBackgroundSimple />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Hackathon Container */}
        <div className="starknet-gradient backdrop-blur-sm rounded-3xl p-8 md:p-12 starknet-border relative overflow-hidden">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-8">
              <a href="https://starknet.org" target="_blank" rel="noopener noreferrer" className="mb-6">
                <img 
                  src="/images/sponsor_starknet.png" 
                  alt="Starknet" 
                  className="h-12 md:h-16 w-auto hover:scale-105 transition-transform duration-300 filter drop-shadow-lg"
                />
              </a>
              
              {/* Glowing BUILDATHON text */}
              <div className="text-2xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 starknet-glow">
                {t('hackathon.buildathon')}
              </div>
              
              
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Hackathon Details with Integrated Evaluators */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  {t('hackathon.details.title')}
                </h3>
                
                <div className="space-y-4 text-blue-100 font-body mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏆</span>
                    <span>{t('hackathon.details.prizes')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">⏰</span>
                    <span>{t('hackathon.details.duration')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">👥</span>
                    <span>{t('hackathon.details.teams')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📅</span>
                    <span>{t('hackathon.dateToBeAnnounced')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📍</span>
                    <span>{t('hackathon.details.location')}</span>
                  </div>
                </div>
                
                {/* Integrated Evaluators */}
                <div className="border-t border-white/10 pt-4 mb-6">
                  <h4 className="text-lg font-bold text-white mb-3 text-center">
                    👨‍💻 {t('hackathon.evaluators')}
                  </h4>
                  
                  <div className="space-y-3">
                    {/* Alexandre Melo */}
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src="/images/pfp_alexandre.jpeg" alt="Alexandre Melo" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white">Alexandre Melo</div>
                        <div className="text-xs text-blue-300">{t('hackathon.evaluator_role')}</div>
                        <a href="https://twitter.com/mi4nthr0pic" target="_blank" rel="noopener noreferrer" 
                           className="text-xs text-blue-300 hover:text-blue-200">
                          @mi4nthr0pic
                        </a>
                      </div>
                    </div>
                    
                    {/* Felipe Novaes */}
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src="/images/pfp_felipe.jpeg" alt="Felipe Novaes" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white">Felipe Novaes</div>
                        <div className="text-xs text-blue-300">{t('hackathon.evaluator_role')}</div>
                        <a href="https://twitter.com/FelipeNovaesFR1" target="_blank" rel="noopener noreferrer" 
                           className="text-xs text-blue-300 hover:text-blue-200">
                          @FelipeNovaesFR1
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mt-6">
                  <h4 className="text-lg font-bold text-white mb-3 text-center">{t('hackathon.call_to_action_title')}</h4>
                  <a 
                    href="https://starknet.org" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full text-center bg-white text-blue-600 font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-body hover:bg-blue-50 text-sm"
                  >
                    {t('hackathon.buttons.about')}
                  </a>
                </div>
              </div>
            </div>

            {/* Cairo & Starknet Context Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Cairo & Cairo-Coder Context */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
                  🏗️ {t('hackathon.hackathon_tech')}
                </h3>
                <p className="text-center text-blue-200 mb-8">{t('hackathon.starknet_intro')}</p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Starknet */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                      ⚡
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{t('hackathon.starknetTitle')}</h4>
                    <p className="text-sm text-blue-100 mb-3">{t('hackathon.starknet_description')}</p>
                    <a href="https://docs.starknet.io" target="_blank" rel="noopener noreferrer" 
                       className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full transition-colors">
                      📚 {t('hackathon.starknet_docs')}
                    </a>
                  </div>
                  
                  {/* Cairo */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl">
                      🔧
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{t('hackathon.cairoTitle')}</h4>
                    <p className="text-sm text-blue-100 mb-3">{t('hackathon.cairo_description')}</p>
                    <a href="https://cairo-lang.org" target="_blank" rel="noopener noreferrer" 
                       className="text-xs bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-full transition-colors">
                      📖 {t('hackathon.cairo_docs')}
                    </a>
                  </div>
                  
                  {/* Cairo-Coder */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl">
                      🤖
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{t('hackathon.cairoCoderTitle')}</h4>
                    <p className="text-sm text-blue-100 mb-3">{t('hackathon.cairo_coder_description')}</p>
                    <a href="https://github.com/cairo-coder" target="_blank" rel="noopener noreferrer" 
                       className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full transition-colors">
                      🚀 {t('hackathon.cairo_coder')}
                    </a>
                  </div>
                </div>
                
                {/* Core Concepts Explanation */}
                <div className="border-t border-white/10 pt-6 mt-6">
                  <div className="grid md:grid-cols-2 gap-6 text-blue-100 font-body">
                    <div>
                      <h4 className="font-bold text-lg text-white mb-2">{t('hackathon.zk_rollups_title')}</h4>
                      <p className="text-sm">{t('hackathon.zk_rollups_desc')}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-2">{t('hackathon.zk_proofs_title')}</h4>
                      <p className="text-sm">{t('hackathon.zk_proofs_desc')}</p>
                    </div>
                  </div>
                </div>
              </div>

              

              {/* Prominent Prize Highlight */}
              <div className="relative mt-8 mb-6">
                <div className="prize-container bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 prize-glow">
                  <div className="text-center">
                    <div className="text-xs font-bold text-yellow-900 mb-1 font-body">{t('hackathon.total_prizes')}</div>
                    <div className="text-3xl md:text-4xl font-black text-yellow-900 prize-amount-large mb-1 font-display">{t('hackathon.prize_money')}</div>
                    <div className="text-xs text-yellow-800 font-semibold font-body">{t('hackathon.prize_description')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* 3D Glass Blocker Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
              
              {/* Content */}
              <div className="relative text-center">
                <div className="text-6xl mb-6">📅</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t('hackathon.dateToBeAnnounced')}
                </h3>
                <p className="text-lg text-gray-200 mb-6 max-w-md">
                  {t('hackathon.dateToBeAnnouncedDesc')}
                </p>
                <div className="text-4xl">🔥</div>
              </div>
              
            </div>
            
            {/* Floating particles around the glass */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-60"
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
  )
}

export default StarknetHackathon
