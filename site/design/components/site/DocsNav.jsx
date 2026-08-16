import React from 'react';

/** Docs sidebar. Active row: raised ground plus a 2px mauve edge. */
export function DocsNav({ groups = [], current, onNavigate, ...rest }) {
  return (
    <nav className="thut-docsnav" aria-label="Docs" {...rest}>
      {groups.map((g) => (
        <React.Fragment key={g.title}>
          <div className="thut-docsnav__group">{g.title}</div>
          {g.items.map((it) => (
            <a key={it.slug} className="thut-docsnav__item" href={'/docs/' + it.slug}
               aria-current={current === it.slug ? 'page' : undefined}
               onClick={onNavigate ? (e) => { e.preventDefault(); onNavigate(it.slug); } : undefined}>{it.label}</a>
          ))}
        </React.Fragment>
      ))}
    </nav>
  );
}
