/** SectionHeading — numbered heading with a hairline rule and an optional right-aligned mono note. */
export interface SectionHeadingProps {
  /** zero-padded section number, e.g. "07" */
  number?: string;
  title: React.ReactNode;
  /** mono aside, right-aligned on the same baseline */
  note?: React.ReactNode;
  /** heading level; keep the document outline intact */
  level?: 2 | 3 | 4;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
