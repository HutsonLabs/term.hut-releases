/**
 * Button — the site's only filled action. Primary carries the download; secondary
 * carries docs; ghost carries a mono link-like action.
 */
export interface ButtonProps {
  /** primary = peach fill (once per view), secondary = bordered, ghost = mono text */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** lg 52px · md 48px · sm 44px — never below 44 */
  size?: 'lg' | 'md' | 'sm';
  /** renders an <a> instead of a <button> */
  href?: string;
  /** mono detail that rides inside the label, e.g. "5.4 MB · dmg" */
  meta?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
