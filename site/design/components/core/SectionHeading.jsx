import React from 'react';

/** Numbered rule-under section heading. The number is peach, the note is optional. */
export function SectionHeading({ number, title, note, level = 2, ...rest }) {
  const H = 'h' + level;
  return (
    <div className="thut-sechead" {...rest}>
      {number ? <span className="thut-sechead__num">{number}</span> : null}
      <H className="thut-sechead__title">{title}</H>
      {note ? <span className="thut-sechead__note">{note}</span> : null}
    </div>
  );
}
