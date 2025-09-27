import React from 'react';
import { useTranslation } from 'react-i18next';
import { site } from '../config/site';

const Navbar = () => {
  const { t } = useTranslation();

  const navItems = [
    { name: t('navbar.home'), id: 'hero-section' },
    // Hackathon-first anchors
    { name: 'Prêmios', id: 'prizes' },
    { name: 'Especificações', id: 'specs' },
    { name: 'Juízes', id: 'judges' },
    { name: 'Patrocinadores', id: 'sponsors' },
    { name: 'Recursos', id: 'resources' },
    { name: 'Regras', id: 'rules' },
    { name: 'Submissão', id: 'submit' },
    // Existing anchors to keep routing/structure
    { name: t('navbar.about'), id: 'about-section' },
    { name: t('navbar.tracks'), id: 'talks-section' },
    { name: t('navbar.companies'), id: 'companies-section' },
    { name: t('navbar.location'), id: 'location-section' },
    { name: t('navbar.hackathon'), id: 'hackathon-section' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 shadow-lg" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto sm:h-10 md:h-12 z-10 relative" src="/images/logo_crypto_lar.png" alt="CryptoLar Logo" />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 relative z-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-300 hover:border-blue-500 hover:text-white cursor-pointer transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* CTA buttons (registration removed) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-3 rounded-lg hover:bg-blue-500 transition-colors"
              aria-label="Entrar no Telegram"
            >
              💬 <span className="hidden lg:inline">Entrar no Telegram</span>
            </a>
          </div>
          {/* Mobile menu button - omitted for brevity */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
