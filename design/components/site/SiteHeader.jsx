import React from 'react';

/** 60px site header on a crust ground. Deliberately not the app titlebar. */
export function SiteHeader({ current, items = [], action, onNavigate, mark = 'assets/favicon.svg', compact, onMenu, ...rest }) {
  return (
    <header className="thut-header" style={compact ? { height: 'var(--header-h-mobile)', padding: '0 var(--page-pad-sm)' } : undefined} {...rest}>
      <a className="thut-header__mark" href="/" onClick={onNavigate ? (e) => { e.preventDefault(); onNavigate('/'); } : undefined}>
        <img src={mark} alt="term.hut" width={compact ? 22 : 24} height={compact ? 22 : 24} style={{ display: 'block' }} />
        <span className="thut-header__name">term.hut</span>
      </a>
      {compact ? (
        <button type="button" className="thut-header__burger" aria-label="Menu" onClick={onMenu}><span></span><span></span></button>
      ) : (
        <>
          <nav className="thut-header__nav">
            {items.map((it) => (
              <a key={it.href} className="thut-header__link" href={it.href}
                 aria-current={current === it.href ? 'page' : undefined}
                 onClick={onNavigate ? (e) => { e.preventDefault(); onNavigate(it.href); } : undefined}>{it.label}</a>
            ))}
          </nav>
          {action ? <div style={{ marginLeft: 'auto' }}>{action}</div> : null}
        </>
      )}
    </header>
  );
}
