import React from 'react';

/** Docs prose wrapper — 720px measure, 1.7 line-height, table and blockquote styling. */
export function Prose({ as = 'div', children, className = '', ...rest }) {
  const Tag = as;
  return <Tag className={('thut-prose ' + className).trim()} {...rest}>{children}</Tag>;
}
