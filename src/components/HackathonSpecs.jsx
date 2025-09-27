import React from 'react';

const Stat = ({ label, value, badge }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
    <div className="text-sm text-blue-200">{label}</div>
    <div className="text-xl font-bold text-white mt-1 flex items-center gap-2">
      {value}
      {badge && (
        <span className="text-[10px] uppercase tracking-wide bg-blue-600 text-white px-2 py-0.5 rounded-full">{badge}</span>
      )}
    </div>
  </div>
);

const HackathonSpecs = () => {
  return (
    <section id="specs" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Hackathon Specs</h2>
          <p className="text-blue-200">Informações rápidas sobre a competição.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Stat label="Duração" value="1 semana" />
          <Stat label="Equipes" value="2–4 pessoas" />
          <Stat label="Local" value="MOIC DIGITAL" />
          <Stat label="Avaliação" value="Juízes listados abaixo" />
          <Stat label={"Prazo"} value="4 de Outubro (Sábado)" />
        </div>
      </div>
    </section>
  );
}

export default HackathonSpecs;
