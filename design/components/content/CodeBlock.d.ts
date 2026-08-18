/** CodeBlock — crust-ground code sample with a language bar and a copy action. */
export interface CodeBlockProps {
  /** shown in the bar, lowercase: zsh, rust, json */
  language?: string;
  copyable?: boolean;
  onCopy?: () => void;
  /** pre-formatted lines; wrap tokens in .hl-* classes or <span style> from --hl-* */
  children?: React.ReactNode;
}
export function CodeBlock(props: CodeBlockProps): JSX.Element;
