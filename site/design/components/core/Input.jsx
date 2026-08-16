import React from 'react';

/** Text field. Crust fill so it reads as a well, not a card. */
export function Input({ invalid, className = '', ...rest }) {
  return <input className={('thut-input ' + className).trim()} aria-invalid={invalid ? 'true' : undefined} {...rest} />;
}
