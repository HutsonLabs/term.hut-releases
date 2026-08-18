/** Badge — mono pill stating a fact. Never a superlative in a pill. */
export interface BadgeProps {
  /** neutral = version/meta · ok shipped · warn caveat/beta · danger breaking · info docs · remote ssh */
  tone?: 'neutral' | 'ok' | 'warn' | 'danger' | 'info' | 'remote';
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
