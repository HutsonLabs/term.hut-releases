import React from 'react';

/** Terminal / code sample on a crust ground. ANSI hues exactly as the terminal maps them. */
export function CodeBlock({ language = 'zsh', copyable = true, onCopy, children, ...rest }) {
  return (
    <div className="thut-code" {...rest}>
      <div className="thut-code__bar">
        <span>{language}</span>
        {copyable ? <button type="button" className="thut-code__copy" onClick={onCopy}>copy</button> : null}
      </div>
      <pre className="thut-code__body">{children}</pre>
    </div>
  );
}
