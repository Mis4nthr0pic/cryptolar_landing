import React from 'react';
import { useTranslation } from 'react-i18next';

const Logistics = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">
          {t('logistics.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{t('logistics.food_drinks_title')}</h3>
            <p className="text-blue-200 mb-4">{t('logistics.food_drinks_desc')}</p>
            <p className="text-sm text-gray-400">{t('logistics.food_drinks_note')}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{t('logistics.transportation_title')}</h3>
            <p className="text-blue-200 mb-4">{t('logistics.transportation_desc')}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{t('logistics.wifi_title')}</h3>
            <p className="text-blue-200 mb-4">{t('logistics.wifi_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;