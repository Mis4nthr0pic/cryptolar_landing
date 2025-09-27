import React from 'react';
import { useTranslation } from 'react-i18next';

const LinkItem = ({ href, children }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">
      {children}
    </a>
  </li>
);

const ResourceItem = ({ href, title, desc }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <div className="font-semibold text-white mb-1">{title}</div>
      {desc && <div className="text-sm text-blue-100">{desc}</div>}
    </a>
  </div>
);

const HackathonResources = () => {
  const { t } = useTranslation();
  const ptItems = t('resources.ptBasecamp.items', { returnObjects: true }) || [];
  return (
    <section id="resources" className="py-16 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('resources.title', 'Recursos Úteis')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">{t('resources.ptTitle')}</h3>
            <div className="space-y-3">
              {ptItems.map((item, idx) => (
                <ResourceItem key={idx} href={item.href} title={item.title} desc={item.desc} />
              ))}
              <ul className="space-y-2 text-sm text-blue-100">
                <LinkItem href="https://www.youtube.com/@Starknet_Portuguese/videos">{t('resources.ptChannel')}</LinkItem>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">{t('resources.enTitle')}</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <LinkItem href="https://www.starknet.io/tutorials/basecamp-12-session-1-starknet-fundamentals/">{t('resources.links.s1')}</LinkItem>
              <LinkItem href="https://www.starknet.io/tutorials/basecamp-12-session-2-cairo-smart-contracts/">{t('resources.links.s2')}</LinkItem>
              <LinkItem href="https://www.starknet.io/tutorials/basecamp-12-bonus-how-to-deploy-locally-after-renaming-a-smart-contract/">{t('resources.links.b1')}</LinkItem>
              <LinkItem href="https://www.starknet.io/tutorials/basecamp-12-session-3-testing-with-foundry/">{t('resources.links.s3')}</LinkItem>
              <LinkItem href="https://www.starknet.io/tutorials/basecamp-12-bonus-updating-test-suite/">{t('resources.links.b2')}</LinkItem>
              <LinkItem href="https://www.starknet.io/tutorials/basecamp-12-session-4-frontend-with-scaffold/">{t('resources.links.s4')}</LinkItem>
              <LinkItem href="https://www.starknet.io/tutorials/basecamp-12-session-5-building-games-with-dojo/">{t('resources.links.s5')}</LinkItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HackathonResources;
