/**
 * Icon — Tabler outline glyph by name, inheriting currentColor.
 * Loads the Iconify web component from CDN on first use; in production the
 * brand rule is to inline the SVG instead (no icon font, no sprite request).
 */
export interface IconProps {
  /** Tabler icon name without the prefix, e.g. "git-branch" */
  name: string;
  /** 16 inline · 20 nav · 26 feature */
  size?: number;
  /** omit for decorative icons — they get aria-hidden */
  label?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
