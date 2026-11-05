import type { CSSProperties, ReactNode } from 'react';
import { cx, type Tone } from './cx';

export interface StickerProps {
  children: ReactNode;
  tone?: Tone | 'paper';
  tilt?: number;
  dot?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Sticker({ children, tone = 'sun', tilt = -3, dot, className, style }: StickerProps) {
  return (
    <span className={cx('dd-sticker', `dd-sticker--${tone}`, className)} style={{ ...style, ['--dd-tilt' as string]: `${tilt}deg` }}>
      {dot && <span className="dd-sticker__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
