import React from 'react';

/** Reproduces the app's own overlay titlebar so a screenshot reads as the Mac app it is. */
export function ScreenshotFrame({ title = 'term.hut', src, alt, height = 190, placeholder, ...rest }) {
  return (
    <div className="thut-frame" {...rest}>
      <div className="thut-frame__bar">
        <span className="thut-frame__dot" style={{ background: 'var(--ctp-red)' }}></span>
        <span className="thut-frame__dot" style={{ background: 'var(--ctp-yellow)' }}></span>
        <span className="thut-frame__dot" style={{ background: 'var(--ctp-green)' }}></span>
        <span className="thut-frame__title">{title}</span>
      </div>
      {src
        ? <img src={src} alt={alt} style={{ display: 'block', width: '100%' }} />
        : <div className="thut-frame__body thut-frame__placeholder" style={{ height }}>{placeholder || 'app screenshot'}</div>}
    </div>
  );
}
