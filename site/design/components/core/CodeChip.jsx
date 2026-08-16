import React from 'react';

/** Inline code chip — the app's chat-panel treatment: peach on a warm dark wash. */
export function CodeChip({ children, ...rest }) {
  return <code className="thut-chip" {...rest}>{children}</code>;
}
