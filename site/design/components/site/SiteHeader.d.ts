/**
 * SiteHeader — 60px, crust ground, hairline underneath. No traffic lights, no drag region.
 */
export interface SiteHeaderProps {
  /** href of the active page */
  current?: string;
  items?: { href: string; label: string }[];
  /** right-aligned action, usually a ghost Button */
  action?: React.ReactNode;
  /** intercepts nav clicks for a click-through prototype */
  onNavigate?: (href: string) => void;
  /** path to favicon.svg from the consuming page */
  mark?: string;
  /** mobile shell: two-line hamburger instead of nav */
  compact?: boolean;
  onMenu?: () => void;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
