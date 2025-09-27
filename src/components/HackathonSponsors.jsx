import React from 'react';
import { useTranslation } from 'react-i18next';

const mainSponsors = [
  { name: 'Starknet', logo: '/images/sponsor_starknet.png', url: 'https://starknet.io', blurb: 'ZK-Rollup L2 escalável para Ethereum.' },
  { name: 'Codespect', logo: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=800,height=214.28571428571428/editor-images/dh/d91bbbed-4049-48ce-9354-3bc0d5ab0cb8.png', url: 'https://www.codespect.net/', blurbKey: 'sponsors.codespect.blurb' },
  { name: 'Moic Digital', logo: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=800,height=214.28571428571428/editor-images/zq/7af9a48e-02a9-4b17-a95a-2af4884580e9.png', url: 'https://www.moicdigital.com/', blurbKey: 'sponsors.moic.blurb' },
];

const hackathonSponsors = [
  // Add hackathon-only sponsors here if different from main sponsors
];

const SponsorCard = ({ s }) => {
  const { t } = useTranslation();
  const blurb = s.blurbKey ? t(s.blurbKey) : s.blurb;
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3">
        <img src={s.logo} alt={s.name} className="h-10 w-auto" />
        <div>
          <div className="font-semibold text-white">{s.name}</div>
          {blurb && <div className="text-xs text-blue-200">{blurb}</div>}
        </div>
        <div className="ml-auto">
          {s.url && (
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-300 hover:text-blue-200 underline">Visit →</a>
          )}
        </div>
      </div>
    </div>
  );
};

const HackathonSponsors = () => {
  return (
    <section id="sponsors" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Patrocinadores</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {mainSponsors.map((s) => (
            <SponsorCard key={s.name} s={s} />
          ))}
        </div>

        {/* Hackathon-only sponsors section temporarily removed */}
      </div>
    </section>
  );
}

export default HackathonSponsors;
