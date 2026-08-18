import React from 'react';

/** Dashed border marks a state, not a card. Name the reason. */
export function EmptyState({ title, children, minHeight = 150, ...rest }) {
  return (
    <div className="thut-empty" style={{ minHeight }} {...rest}>
      <span className="thut-empty__title">{title}</span>
      {children ? <span className="thut-empty__body">{children}</span> : null}
    </div>
  );
}
