import React from 'react';

/** Mono micro label. Not a heading — never counts in the outline. */
export function Eyebrow({ children, ...rest }) {
  return <div className="thut-eyebrow" {...rest}>{children}</div>;
}
