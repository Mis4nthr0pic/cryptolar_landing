import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const Confetti = () => {
  // lightweight confetti: a few floating colored dots
  const pieces = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map((_, i) => (
        <span
          key={i}
          className="absolute confetti-piece"
          style={{
            left: `${(i * 100) / pieces.length}%`,
            animationDelay: `${(i % 7) * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
};

const ThankYou = ({ id }) => {
  const { t } = useTranslation();
  return (
    <section id={id} className="relative py-16 bg-gradient-to-b from-black via-gray-900 to-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <Confetti />
          <Reveal>
            <div className="px-6 md:px-10 py-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400">
                {t('thankyou.title')}
              </h2>
              <p className="mt-3 text-blue-100 max-w-3xl mx-auto">
                {t('thankyou.subtitle')}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <span className="px-3 py-1 rounded-full bg-yellow-400 text-black text-sm font-semibold">{t('thankyou.attendees')}</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm">{t('thankyou.speakers')}</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm">{t('thankyou.sponsors')}</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm">{t('thankyou.volunteers')}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;

