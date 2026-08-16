import React from 'react';

/** Base surface: base ground, hairline, 12px radius, 24px padding. */
export function Card({ variant = 'default', as = 'div', children, className = '', ...rest }) {
  const Tag = as;
  const mod = variant === 'default' ? '' : ' thut-card--' + variant;
  return <Tag className={('thut-card' + mod + ' ' + className).trim()} {...rest}>{children}</Tag>;
}
