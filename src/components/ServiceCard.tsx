import type { ReactNode } from 'react';
import { cx, type Tone } from './cx';

export type ServiceIcon = 'code' | 'rocket' | 'design' | 'bolt' | 'chat';

const ICONS: Record<ServiceIcon, ReactNode> = {
  code: (<><path d="M10 9 4 16l6 7" /><path d="M22 9l6 7-6 7" /><path d="M18 6l-4 20" /></>),
  rocket: (<><path d="M16 4c5 3 7 9 5 16h-10C9 13 11 7 16 4z" /><circle cx="16" cy="12" r="2.5" /><path d="M11 20l-4 4 1-6M21 20l4 4-1-6M14 24c0 2 1 4 2 5 1-1 2-3 2-5" /></>),
  design: (<><path d="M6 26l3-8L21 6l5 5-12 12z" /><path d="M18 9l5 5" /><path d="M6 26l5-1" /></>),
  bolt: <path d="M18 3 7 18h8l-2 11 12-16h-8z" />,
  chat: (<><path d="M5 8c0-2 1-3 3-3h16c2 0 3 1 3 3v10c0 2-1 3-3 3H13l-6 5v-5c-1 0-2-1-2-3z" /><path d="M11 12h10M11 16h6" /></>),
};

export interface ServiceCardProps {
  title: string;
  description?: string;
  points?: string[];
  icon?: ServiceIcon;
  tone?: Tone;
  className?: string;
}

export function ServiceCard({ title, description, points = [], icon = 'code', tone = 'sun', className }: ServiceCardProps) {
  return (
    <div className={cx('dd-service', `dd-service--${tone}`, className)}>
      <div className="dd-service__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32">{ICONS[icon]}</svg>
      </div>
      <h3 className="dd-service__title">{title}</h3>
      {description && <p className="dd-service__desc">{description}</p>}
      {points.length > 0 && (
        <ul className="dd-service__list">
          {points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      )}
    </div>
  );
}
