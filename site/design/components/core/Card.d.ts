/** Card — the site's container. No shadows anywhere; depth comes from the mantle/base/crust ladder. */
export interface CardProps {
  /** default · well (crust ground) · flush (no padding, clipped) · edge (gradient hairline) · dashed (a state, not a card) · danger · warn */
  variant?: 'default' | 'well' | 'flush' | 'edge' | 'dashed' | 'danger' | 'warn';
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
