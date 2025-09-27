import React from 'react';
import { useTranslation } from 'react-i18next';
import { site } from '../config/site';

const Icon = ({ name, className = 'w-5 h-5' }) => {
  if (name === 'deck') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M3 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm11-1v4h4"/>
      </svg>
    );
  }
  if (name === 'video') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M4 5h12a2 2 0 0 1 2 2v2l4-2v10l-4-2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>
      </svg>
    );
  }
  if (name === 'team') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 9a7 7 0 0 1 14 0z"/>
      </svg>
    );
  }
  if (name === 'repo') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M12 .5l3.09 6.26L22 7.77l-5 4.86 1.18 6.88L12 16.9l-6.18 3.61L7 12.63l-5-4.86 6.91-1.01z"/>
      </svg>
    );
  }
  return null;
};

const Step = ({ index, icon, title, desc }) => (
  <div className="relative group rounded-2xl neon-surface p-5 overflow-hidden">
    <div className="absolute -inset-px neon-ring" aria-hidden></div>
    <div className="flex items-start gap-4 relative z-10">
      <div className="step-badge">
        <span className="text-xs font-bold">{index}</span>
      </div>
      <div className="mt-0.5">
        <div className="flex items-center gap-2 text-white font-semibold">
          <Icon name={icon} className="w-5 h-5 text-yellow-300" />
          <span>{title}</span>
        </div>
        <p className="text-sm text-blue-100 mt-1">{desc}</p>
      </div>
    </div>
    <div className="accent-bar" aria-hidden></div>
  </div>
);

const SubmissionDay = () => {
  const { t } = useTranslation();
  const { deckTemplateUrl, readmeTemplateUrl } = site;

  const steps = [
    { icon: 'deck', title: t('submission.deck.title'), desc: t('submission.deck.desc') },
    { icon: 'repo', title: t('submission.solution.title'), desc: t('submission.solution.desc') },
    { icon: 'video', title: t('submission.video.title'), desc: t('submission.video.desc') },
    { icon: 'team', title: t('submission.team.title'), desc: t('submission.team.desc') },
    { icon: 'repo', title: t('submission.repo.title'), desc: t('submission.repo.desc') },
  ];

  return (
    <section id="submission" className="relative py-16 text-white bg-gray-950">
      <div className="submission-bg" aria-hidden></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-3">
            {t('submission.title')}
          </h2>
          <p className="text-blue-200">{t('submission.subtitle')}</p>
        </div>

        {/* Deadline callout */}
        <div className="deadline-wrap mb-10">
          <div className="deadline-glow" aria-hidden></div>
          <div className="deadline-card">
            <div className="chip">
              <span className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-wider uppercase text-yellow-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden>
                  <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 6H4v12h16V8z"/>
                </svg>
                {t('submission.deadlineTitle')}
              </span>
            </div>
            <div className="deadline-date gradient-text">
              {t('submission.deadlineDate')}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <Step key={i} index={i + 1} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-yellow-400/30 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-yellow-300 font-semibold">{t('submission.form.title')}</div>
              <p className="text-sm text-yellow-200">{t('submission.form.desc')}</p>
            </div>
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold py-2 px-4 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg"
            >
              🚀 {t('submission.form.joinTelegram')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionDay;
