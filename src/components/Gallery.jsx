import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const LOCAL_KEY = 'cryptolar.gallery.v1';

const acceptTypes = 'image/*,video/*';

const MediaCard = ({ item, onRemove }) => {
  const isVideo = item.type.startsWith('video');
  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
      {isVideo ? (
        <video controls src={item.src} className="w-full h-48 object-cover bg-black" />
      ) : (
        <img src={item.src} alt={item.name || 'media'} className="w-full h-48 object-cover bg-black" />
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onRemove}
          className="px-2 py-1 text-xs rounded-md bg-red-600/90 hover:bg-red-600 text-white shadow"
        >
          ✕
        </button>
      </div>
      <div className="p-3 text-xs text-blue-100 truncate border-t border-white/10 bg-black/20">
        {item.name}
      </div>
    </div>
  );
};

const Gallery = ({ id }) => {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [busy, setBusy] = useState(false);
  const fileInputRef = useRef(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {}
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const onFiles = async (files) => {
    setBusy(true);
    const next = [];
    for (const f of files) {
      if (!f.type || (!f.type.startsWith('image') && !f.type.startsWith('video'))) continue;
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(f);
      });
      next.push({ id: crypto.randomUUID(), name: f.name, type: f.type, src: dataUrl });
    }
    setItems((prev) => [...next, ...prev]);
    setBusy(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files || []);
    onFiles(files);
  };

  const onPick = (e) => {
    const files = Array.from(e.target.files || []);
    onFiles(files);
    // reset so picking same file again works
    e.target.value = '';
  };

  const exportJson = () => {
    const payload = items.map(({ id, name, type, src }) => ({ id, name, type, src }));
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gallery.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importFromPublic = async () => {
    try {
      setBusy(true);
      const res = await fetch('/gallery.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error('Not found');
      const list = await res.json();
      if (Array.isArray(list)) setItems(list);
    } catch (e) {
      alert(t('gallery.importError'));
    } finally {
      setBusy(false);
    }
  };

  const empty = items.length === 0;

  return (
    <section id={id} className="relative py-16 bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400">
              {t('gallery.title')}
            </h2>
            <p className="mt-2 text-blue-200">{t('gallery.subtitle')}</p>
          </div>
        </Reveal>

        <Reveal>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            className="mb-8 p-6 rounded-2xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-sm flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-3">📸</div>
            <p className="text-blue-100 mb-4">{t('gallery.dropHint')}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
                disabled={busy}
              >
                {busy ? t('gallery.processing') : t('gallery.uploadBtn')}
              </button>
              <button
                onClick={exportJson}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white"
              >
                {t('gallery.export')}
              </button>
              <button
                onClick={importFromPublic}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white"
              >
                {t('gallery.import')}
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept={acceptTypes}
              multiple
              onChange={onPick}
              className="hidden"
            />
            <p className="text-xs text-blue-300 mt-3 max-w-2xl">
              {t('gallery.hintPersistent')}
            </p>
          </div>
        </Reveal>

        <Reveal>
          {empty ? (
            <div className="text-center text-blue-200 bg-white/5 border border-white/10 rounded-xl p-10">
              {t('gallery.empty')}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {items.map((it) => (
                <MediaCard
                  key={it.id}
                  item={it}
                  onRemove={() => setItems((prev) => prev.filter((p) => p.id !== it.id))}
                />
              ))}
            </div>
          )}
        </Reveal>
      </div>

      {/* subtle background accents */}
      <div className="pointer-events-none absolute -z-0 inset-0 opacity-30">
        <div className="absolute -top-24 -left-16 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-400/0 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/0 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Gallery;

