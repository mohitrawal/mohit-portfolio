import type { CSSProperties, ReactNode } from 'react';
import { cx } from './cx';

export interface SpeechBubbleProps {
  children: ReactNode;
  side?: 'bottom' | 'left' | 'right';
  tone?: 'paper' | 'sun' | 'mint';
  className?: string;
  style?: CSSProperties;
}

export function SpeechBubble({ children, side = 'bottom', tone = 'paper', className, style }: SpeechBubbleProps) {
  return (
    <div className={cx('dd-bubble', `dd-bubble--${side}`, tone !== 'paper' && `dd-bubble--${tone}`, className)} style={style}>
      {children}
    </div>
  );
}
