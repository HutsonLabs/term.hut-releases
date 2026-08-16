import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Crust footer: mark, bundle id, three link columns. */
export function SiteFooter({ columns = [], mark = 'assets/favicon.svg', org = 'HutsonLabs', bundleId = 'com.hutsonlabs.termhut', repoUrl, repoLabel = 'GitHub', ...rest }) {
  return (
    <footer className="thut-footer" {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <img src={mark} alt="" width={28} height={28} style={{ display: 'block' }} />
        <div className="thut-footer__meta">{org}<br />{bundleId}</div>
        {repoUrl ? (
          <a className="thut-footer__repo" href={repoUrl}><Icon name="brand-github" size={16} />{repoLabel}</a>
        ) : null}
      </div>
      <div className="thut-footer__cols">
        {columns.map((c) => (
          <div className="thut-footer__col" key={c.title}>
            <span className="thut-footer__head">{c.title}</span>
            {c.links.map((l) => <a className="thut-footer__link" key={l.label} href={l.href || '#'}>{l.label}</a>)}
          </div>
        ))}
      </div>
    </footer>
  );
}
