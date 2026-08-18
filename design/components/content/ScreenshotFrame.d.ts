/**
 * ScreenshotFrame — window chrome around a real app screenshot. No perspective,
 * no floating device art. Renders a hatched placeholder while no screenshot exists.
 */
export interface ScreenshotFrameProps {
  /** titlebar text, conventionally "term.hut — ~/path" */
  title?: string;
  src?: string;
  /** describe what the window is doing, not what it contains */
  alt?: string;
  /** placeholder height when src is absent */
  height?: number;
  placeholder?: React.ReactNode;
}
export function ScreenshotFrame(props: ScreenshotFrameProps): JSX.Element;
