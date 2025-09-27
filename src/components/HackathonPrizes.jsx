import React from 'react';
import { useTranslation } from 'react-i18next';

const HackathonPrizes = () => {
  const { t } = useTranslation();
  return (
    <section id="prizes" className="py-16 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="inline-block text-xs uppercase tracking-wide text-yellow-300/80">{t('hackathon.total_prizes')}</span>
            <div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-black gold-prize-glow leading-tight">
                {t('hackathon.prize_money')}
              </div>
              <div className="text-base md:text-lg text-yellow-200/90 mt-1">{t('hackathon.prize_description')}</div>
            </div>
            <p className="text-sm text-blue-200">{t('prizes.tagline', 'Reconhecendo inovação, execução e impacto em Web3.')}</p>
          </div>
          <div>
            <div className="rounded-2xl border-2 border-yellow-400/60 bg-yellow-400/10 p-5 shadow-lg">
              <p className="text-base md:text-lg font-semibold text-yellow-300 uppercase">{t('prizes.payment.pt', 'O pagamento dos prêmios será realizado diretamente pela')} <strong>Starknet Foundation</strong>. {t('prizes.payment.pt2', 'Os organizadores do evento não receberão, custodiarão ou distribuirão quaisquer valores.')}</p>
              <p className="text-xs text-yellow-200/80 mt-2 uppercase">{t('prizes.payment.kyc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HackathonPrizes;
