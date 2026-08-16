import React from 'react';

/** One release, read from the releases feed. Never hand-written. */
export function ChangelogEntry({ version, date, tone = 'ok', label = 'added', items = [], asset, children, ...rest }) {
  return (
    <div className="thut-card" style={{ gap: 14 }} {...rest}>
      <div className="thut-release__head">
        <span className="thut-release__version">{version}</span>
        <span className="thut-release__date">{date}</span>
        <span style={{ marginLeft: 'auto' }}><span className={'thut-badge thut-badge--' + tone}>{label}</span></span>
      </div>
      {items.length ? <ul className="thut-release__list">{items.map((it, i) => <li key={i}>{it}</li>)}</ul> : children}
      {asset ? <div className="thut-release__asset">{asset}</div> : null}
    </div>
  );
}
