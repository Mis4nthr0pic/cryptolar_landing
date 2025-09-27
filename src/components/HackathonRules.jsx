import React from 'react';
import { useTranslation } from 'react-i18next';

const RuleBlock = ({ title, items }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
    <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
    <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  </div>
);

const HackathonRules = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('rules.sections.onboarding.title'),
      items: t('rules.sections.onboarding.items', { returnObjects: true })
    },
    {
      title: t('rules.sections.teams.title'),
      items: t('rules.sections.teams.items', { returnObjects: true })
    },
    {
      title: t('rules.sections.submissions.title'),
      items: t('rules.sections.submissions.items', { returnObjects: true })
    },
    {
      title: t('rules.sections.ip.title'),
      items: t('rules.sections.ip.items', { returnObjects: true })
    },
    {
      title: t('rules.sections.mentorship.title'),
      items: t('rules.sections.mentorship.items', { returnObjects: true })
    },
    {
      title: t('rules.sections.judging.title'),
      items: t('rules.sections.judging.items', { returnObjects: true })
    },
    {
      title: t('rules.sections.conduct.title'),
      items: t('rules.sections.conduct.items', { returnObjects: true })
    },
    {
      title: t('rules.sections.prizes.title'),
      items: t('rules.sections.prizes.items', { returnObjects: true })
    }
  ];

  return (
    <section id="rules" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('rules.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((sec, idx) => (
            <RuleBlock key={idx} title={sec.title} items={sec.items} />
          ))}
        </div>
        {false && (
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <RuleBlock
              title={t('rules.weights.title')}
              items={t('rules.weights.items', { returnObjects: true })}
            />
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">{t('rules.coc.title')}</h3>
              <p className="text-sm text-blue-100">
                {t('rules.coc.desc')}
                {' '}
                <a href={t('rules.coc.url', { defaultValue: '#' })} target="_blank" rel="noopener noreferrer" className="underline">{t('rules.coc.link')}</a>.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HackathonRules;
