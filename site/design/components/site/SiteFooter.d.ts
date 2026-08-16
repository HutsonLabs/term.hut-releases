/** SiteFooter — crust ground, mark + bundle id on the left, link columns on the right. */
export interface SiteFooterProps {
  columns?: { title: string; links: { label: string; href?: string }[] }[];
  mark?: string;
  org?: string;
  bundleId?: string;
  /** repository URL — renders a tabler:brand-github icon link under the bundle id */
  repoUrl?: string;
  repoLabel?: string;
}
export function SiteFooter(props: SiteFooterProps): JSX.Element;
