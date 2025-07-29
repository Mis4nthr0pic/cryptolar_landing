import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-black text-gray-300 py-16 overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-blue-900/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            CryptoLar 2025
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Where Ethereum feels at home. Join us for an unforgettable blockchain experience in Florianópolis.
          </p>
          
          {/* Luma Registration Button */}
          <div className="flex justify-center">
            <a 
              href="https://lu.ma/cryptolar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm"
            >
              <span>📅</span>
              Register for CryptoLar 2025
            </a>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <div>
            <p className="text-gray-300">&copy; {new Date().getFullYear()} CryptoLar. {t('footer.rights_reserved')}.</p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a 
              href="https://x.com/CryptoLarBrasil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="text-sm">@CryptoLarBrasil</span>
            </a>
            <a 
              href="https://t.me/cryptolarbrasil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span className="text-sm">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;