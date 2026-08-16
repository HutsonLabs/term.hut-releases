/** EmptyState — an empty feed or a failed fetch, with the reason stated. */
export interface EmptyStateProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  minHeight?: number;
}
export function EmptyState(props: EmptyStateProps): JSX.Element;
