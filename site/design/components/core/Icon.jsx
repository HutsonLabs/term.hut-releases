import React from 'react';

const CDN = 'https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js';
let loaded = false;
function ensureIconify() {
  if (loaded || typeof document === 'undefined') return;
  loaded = true;
  if (document.querySelector('script[data-thut-iconify]')) return;
  const s = document.createElement('script');
  s.src = CDN; s.async = true; s.setAttribute('data-thut-iconify', '');
  document.head.appendChild(s);
}

/** Tabler outline icon, 24x24 grid, stroke 2, currentColor. The app's set, unchanged. */
export function Icon({ name, size = 20, label, style, ...rest }) {
  ensureIconify();
  return React.createElement('iconify-icon', {
    icon: 'tabler:' + name,
    width: size, height: size,
    role: label ? 'img' : undefined,
    'aria-label': label,
    'aria-hidden': label ? undefined : 'true',
    style: { display: 'inline-flex', verticalAlign: 'middle', color: 'currentColor', ...style },
    ...rest
  });
}
