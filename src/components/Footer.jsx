import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Left: Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              CryptoLar 2025
            </h3>
            <p className="text-gray-400 text-sm">
              Where Ethereum feels at home
            </p>
          </div>
          
          {/* Center: Registration Button */}
          <div className="flex justify-center">
            <a 
              href="https://lu.ma/cryptolar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 hover:from-yellow-300 hover:via-orange-300 hover:to-yellow-400 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-110 text-sm shadow-2xl animate-pulse overflow-hidden group"
              style={{
                boxShadow: '0 0 25px rgba(251, 191, 36, 0.6), 0 0 50px rgba(251, 191, 36, 0.4), 0 0 75px rgba(251, 191, 36, 0.3)'
              }}
            >
              {/* Shining effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center gap-2">
                <span>📅</span>
                {t('about.buttons.registerOnLuma')}
              </div>
            </a>
          </div>
          
          {/* Right: Social Links */}
          <div className="flex justify-center md:justify-end items-center gap-4">
            <a 
              href="https://x.com/CryptoLarBrasil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
              title="@CryptoLarBrasil"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/opensensepw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
              title="@opensensepw"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/cryptolarbrasil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
              title="Telegram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Bottom copyright */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} CryptoLar. {t('footer.rights_reserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;