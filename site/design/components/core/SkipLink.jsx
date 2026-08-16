import React from 'react';

/** First focusable element on every page. Visually hidden until focused. */
export function SkipLink({ href = '#main', children = 'Skip to content', ...rest }) {
  return <a className="thut-skiplink" href={href} {...rest}>{children}</a>;
}
