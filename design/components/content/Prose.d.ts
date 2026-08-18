/** Prose — wraps rendered markdown from the repo's docs/*.md. */
export interface ProseProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}
export function Prose(props: ProseProps): JSX.Element;
