/**
 * FeatureCard — one mechanism, stated as a mechanism. Three-up on the home page.
 */
export interface FeatureCardProps {
  /** "01", "02", "03" — the reading order of the claims */
  number?: string;
  title: React.ReactNode;
  /** the mechanism, two sentences at most */
  children?: React.ReactNode;
  /** makes the whole card a link and reveals the trailing label */
  href?: string;
  more?: string;
  /** optional Tabler Icon at 26px */
  icon?: React.ReactNode;
}
export function FeatureCard(props: FeatureCardProps): JSX.Element;
