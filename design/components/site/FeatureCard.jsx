import React from 'react';

/** Numbered mechanism card with the approved gradient hairline. */
export function FeatureCard({ number, title, children, href, more = 'how it works →', icon, ...rest }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag className="thut-feature" href={href} {...rest}>
      {icon ? <span style={{ color: 'var(--ink)', display: 'flex' }}>{icon}</span> : null}
      {number ? <div className="thut-feature__num">{number}</div> : null}
      <h3 className="thut-feature__title">{title}</h3>
      <p className="thut-feature__body">{children}</p>
      {href ? <span className="thut-feature__more">{more}</span> : null}
    </Tag>
  );
}
