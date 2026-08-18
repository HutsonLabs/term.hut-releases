/** Input — single-line text field. Border goes mauve on focus, red on invalid. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** paints the red border and sets aria-invalid */
  invalid?: boolean;
}
export function Input(props: InputProps): JSX.Element;
