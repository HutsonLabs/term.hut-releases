import React from 'react';

/** Marketing / docs button. One filled button per view. */
export function Button({ variant = 'primary', size = 'lg', href, meta, disabled, children, ...rest }) {
  const cls = ['thut-btn', 'thut-btn--' + variant, 'thut-btn--' + size].join(' ');
  const body = [children, meta ? <span className="thut-btn__meta" key="m">{meta}</span> : null];
  if (href && !disabled) return <a className={cls} href={href} {...rest}>{body}</a>;
  return <button type="button" className={cls} disabled={disabled} {...rest}>{body}</button>;
}
