import React, { useRef, useState, useEffect } from 'react';

const judges = [
  {
    name: 'Alexandre Melo',
    role: 'Fundador da CryptoLar e da OpenSense',
    org: 'Pesquisador de Segurança Web3',
    bio: 'Fundador da CryptoLar e da OpenSense; pesquisador de segurança Web3 e líder comunitário.',
    avatar: '/images/pfp_alexandre.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/alexoncrypto',
      twitter: 'https://twitter.com/mis4nthr0pic',
      telegram: 'https://t.me/cryptolarbrasil'
    }
  },
  {
    name: 'Felipe Novaes',
    role: 'Auditor e Pesquisador Blockchain',
    org: '',
    bio: 'Dev há 24+ anos; liderou pessoas e projetos. Agnóstico de linguagem: usa a ferramenta certa para cada desafio.',
    avatar: '/images/pfp_felipe.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/felipenovaesrocha/',
      twitter: 'https://x.com/FelipeNovaesFR1',
      telegram: 'https://t.me/felipenovaesrocha'
    }
  },
  {
    name: 'Ernesto De Oliveira',
    role: 'Backend developer | .NET | Blockchain | Web3 | AI',
    org: '',
    bio: 'Backend developer com foco em .NET, Blockchain, Web3 e IA; pesquisador Starknet.',
    avatar: '/images/pfp_ernesto.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/ernesto-de-oliveira/',
      twitter: 'https://x.com/0xErnesto',
      telegram: 'https://t.me/ZxErnesto'
    }
  },
  {
    name: 'Ranulfo Paiva Sobrinho',
    role: 'Cambiatus & CofiBlocks Co‑Founder',
    org: 'Ph.D. e pós‑doutor (UNICAMP)',
    bio: 'Ph.D. e pós‑doutorado em Economia e Criptoativos Ambientais para Sustentabilidade pela UNICAMP (Brasil).',
    avatar: '/images/pfp_ranulfo.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/ranulfosobrinho/',
      twitter: 'https://x.com/ranulfovm',
      telegram: 'https://t.me/ranulfovm'
    }
  },
  {
    name: 'Isaque Coelho',
    role: 'AI Engineer | Multi‑Agent Systems & LLMs | CrewAI, LangChain, OpenAI API, AWS',
    org: '',
    bio: 'Engenheiro de IA com foco em sistemas multiagentes e LLMs, usando CrewAI, LangChain e stack AWS/OpenAI.',
    avatar: '/images/pfp_coelho.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/coelhoxyz/',
      twitter: 'https://x.com/coelhoxyz',
      telegram: 'https://t.me/coelhoxyz'
    }
  },
  {
    name: 'Lorenzo Baumgratz',
    role: 'Team Lead @ MOIC Digital | Computer Engineering | Crypto | Blockchain | Web3',
    org: '',
    bio: 'Líder de time na MOIC Digital; engenharia de computação aplicada a cripto, blockchain e Web3.',
    avatar: '/images/pfp_lorenzo.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/lorenzo-baumgratz/',
      twitter: 'https://x.com/LorenzoBaumgrtz',
      telegram: 'https://t.me/LBZAO'
    }
  },
  {
    name: 'Ion Neto',
    role: 'Head of Research @ Blockful | UX, security and efficiency of digital governance systems',
    org: '',
    bio: 'Head of Research na Blockful; foco em UX, segurança e eficiência de sistemas de governança digital.',
    avatar: '/images/pfp_zeugh.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/ionneto/',
      twitter: 'https://x.com/theZeugh',
      telegram: 'https://t.me/zeugh'
    }
  }
];

const Pill = ({ href, label, kind }) => {
  const Icon = () => {
    if (kind === 'linkedin') {
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09V23h-3.99v-7.07c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.83-2.71 3.73V23H8V8z"/>
        </svg>
      );
    }
    if (kind === 'twitter') {
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    }
    // telegram
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    );
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300/70"
    >
      <Icon />
    </a>
  );
};

const HackathonJudges = () => {
  return (
    <section id="judges" className="py-16 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Juízes</h2>
            <p className="text-blue-200">Avaliadores do Hackathon.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {judges.map((j, idx) => (
            <TiltCard key={j.name} delay={idx * 0.05}>
              <div className="relative h-full">
                <div className="fire-glow" aria-hidden="true" />
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm h-full flex flex-col min-h-[260px]">
                  <div className="flex items-center gap-4">
                <img src={j.avatar} alt={j.name} loading="lazy" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <div className="text-lg font-semibold">{j.name}</div>
                      <div className="text-sm text-blue-200">{j.role}{j.org ? ` • ${j.org}` : ''}</div>
                    </div>
                  </div>
                  <p className="text-sm text-blue-100 mt-3 flex-grow">{j.bio}</p>
                  <div className="flex gap-2 mt-4" aria-label={`${j.name} social links`}>
                    {j.social.linkedin && (
                      <Pill href={j.social.linkedin} label={`${j.name} LinkedIn`} kind="linkedin" />
                    )}
                    {j.social.twitter && (
                      <Pill href={j.social.twitter} label={`${j.name} Twitter`} kind="twitter" />
                    )}
                    {j.social.telegram && (
                      <Pill href={j.social.telegram} label={`${j.name} Telegram`} kind="telegram" />
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HackathonJudges;

// Simple 3D tilt + reveal wrapper
function TiltCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
    };
  }, []);

  const onMove = (e) => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    const rx = (py * 8).toFixed(2);
    const ry = (-px * 8).toFixed(2);
    setStyle({ transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)` });
  };

  const onLeave = () => {
    setStyle({ transform: reducedMotion ? undefined : `perspective(900px) rotateX(0deg) rotateY(0deg)` });
  };

  return (
    <div
      ref={ref}
      className="glitch-reveal transition-transform duration-300 will-change-transform h-full"
      style={{ animationDelay: `${delay}s`, ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
