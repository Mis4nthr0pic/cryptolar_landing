import React from 'react';
import { social } from '../config/site';

const SocialLinksBand = () => {
  return (
    <div className="bg-gray-900 border-t border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {social.map((s) => (
            <a
              key={s.key}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-blue-200 text-sm"
              aria-label={s.label}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialLinksBand;

