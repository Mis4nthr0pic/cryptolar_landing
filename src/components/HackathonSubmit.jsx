import React from 'react';
import { site } from '../config/site';

const HackathonSubmit = () => {
  return (
    <section id="submit" className="py-16 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Submission</h2>
        <p className="text-blue-200 mb-6 text-sm md:text-base">
          Submissões serão avaliadas pelos juízes listados acima. Use o formulário externo para anexar repositório, demo e contatos.
        </p>
        <a
          href={site.submissionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 text-black font-semibold py-3 px-6 rounded-xl hover:bg-green-400 transition-colors shadow-lg"
          aria-label="Enviar Submissão (abre em nova aba)"
        >
          🚀 Enviar Submissão
        </a>
      </div>
    </section>
  );
}

export default HackathonSubmit;

