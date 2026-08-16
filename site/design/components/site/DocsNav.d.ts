/** DocsNav — 200px sidebar whose IA mirrors the repo's docs/ order, concepts before protocol notes. */
export interface DocsNavProps {
  groups?: { title: string; items: { slug: string; label: string }[] }[];
  /** slug of the open page */
  current?: string;
  onNavigate?: (slug: string) => void;
}
export function DocsNav(props: DocsNavProps): JSX.Element;
