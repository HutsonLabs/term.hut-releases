import React from 'react';

/** Mono pill. Always factual: a version, a requirement, a capability. */
export function Badge({ tone = 'neutral', children, ...rest }) {
  return <span className={'thut-badge' + (tone === 'neutral' ? '' : ' thut-badge--' + tone)} {...rest}>{children}</span>;
}
