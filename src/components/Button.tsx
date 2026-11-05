import type { ReactNode, MouseEventHandler } from 'react';
import { cx } from './cx';
import { Arrow } from './Arrow';

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'sun' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: MouseEventHandler;
  arrow?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  target?: string;
}

export function Button({ children, variant = 'primary', size = 'md', href, onClick, arrow, icon, disabled, className, target }: ButtonProps) {
  const cls = cx('dd-btn', `dd-btn--${variant}`, `dd-btn--${size}`, className);
  const glyph = icon ?? (arrow ? <Arrow /> : null);
  const inner = (
    <>
      <span>{children}</span>
      {glyph && <span className="dd-btn__icon" aria-hidden="true">{glyph}</span>}
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick} target={target} rel={target === '_blank' ? 'noreferrer' : undefined}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
}
