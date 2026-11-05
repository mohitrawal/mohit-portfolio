import { useState } from 'react';
import { cx } from './cx';
import { Button } from './Button';
import { ThemeToggle } from './ThemeToggle';

export interface NavLink { label: string; href: string }

export interface NavBarProps {
  brand: string;
  brandHref?: string;
  links: NavLink[];
  cta?: NavLink;
  className?: string;
}

export function NavBar({ brand, brandHref = '#top', links, cta, className }: NavBarProps) {
  const [open, setOpen] = useState(false);
  return (
    <nav className={cx('dd-nav', open && 'is-open', className)} aria-label="Main">
      <a className="dd-nav__brand" href={brandHref}>
        <span className="dd-nav__logo" aria-hidden="true" />
        {brand}
      </a>
      <ul className="dd-nav__links" id="dd-nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>
      <div className="dd-nav__end">
        <ThemeToggle />
        {cta && <Button variant="sun" size="sm" href={cta.href}>{cta.label}</Button>}
        <button type="button" className="dd-nav__menu" aria-expanded={open} aria-controls="dd-nav-links" onClick={() => setOpen((o) => !o)}>
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
