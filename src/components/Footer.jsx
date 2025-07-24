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
          <p className="text-gray-400 max-w-2xl mx-auto">
            Where Ethereum feels at home. Join us for an unforgettable blockchain experience in Florianópolis.
          </p>
        </div>
        
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-center items-center border-t border-gray-700 pt-8">
          <div>
            <p className="text-gray-300">&copy; {new Date().getFullYear()} CryptoLar. {t('footer.rights_reserved')}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;