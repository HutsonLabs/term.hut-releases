/** ChangelogEntry — a release on /changelog, populated from the GitHub releases feed. */
export interface ChangelogEntryProps {
  /** bare version, no leading v */
  version: string;
  /** ISO date */
  date: string;
  /** ok = added · warn = changed/beta · danger = breaking/removed */
  tone?: 'ok' | 'warn' | 'danger' | 'info';
  label?: string;
  items?: React.ReactNode[];
  /** dmg filename and size */
  asset?: React.ReactNode;
  children?: React.ReactNode;
}
export function ChangelogEntry(props: ChangelogEntryProps): JSX.Element;
