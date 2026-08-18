import React from 'react';

/** Docs callout. The label is the tone's word, in mono. */
export function Callout({ tone = 'info', label, children, ...rest }) {
  return (
    <div className={'thut-callout thut-callout--' + tone} {...rest}>
      <span className="thut-callout__label">{label || tone}</span>
      <p className="thut-callout__body">{children}</p>
    </div>
  );
}
