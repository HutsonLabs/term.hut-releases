/** Callout — a tinted note inside docs prose. */
export interface CalloutProps {
  tone?: 'info' | 'ok' | 'warn' | 'danger';
  /** mono label; defaults to the tone word */
  label?: string;
  children?: React.ReactNode;
}
export function Callout(props: CalloutProps): JSX.Element;
