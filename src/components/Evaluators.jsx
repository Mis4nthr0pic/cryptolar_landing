import React from 'react';
import { useTranslation } from 'react-i18next';

const Evaluators = () => {
  const { t } = useTranslation();

  const evaluators = [
    {
      name: 'Alexandre Melo',
      twitter: '@mi4nthr0pic',
      twitterUrl: 'https://twitter.com/mi4nthr0pic',
      photo: '/images/alexandre-melo.jpg' // Placeholder for now
    },
    {
      name: 'Felipe Novaes',
      twitter: '@FelipeNovaesFR1',
      twitterUrl: 'https://twitter.com/FelipeNovaesFR1',
      photo: '/images/felipe-novaes.jpg' // Placeholder for now
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t('evaluators.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body">
            {t('evaluators.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {evaluators.map((evaluator, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
            >
              {/* Profile Photo */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                      {evaluator.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-display font-bold text-white text-center mb-4">
                {evaluator.name}
              </h3>

              {/* Twitter Link */}
              <div className="text-center">
                <a
                  href={evaluator.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  {evaluator.twitter}
                </a>
              </div>

              {/* Role Badge */}
              <div className="mt-6 text-center">
                <span className="inline-block bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-mono border border-purple-500/30">
                  {t('evaluators.role')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evaluators;