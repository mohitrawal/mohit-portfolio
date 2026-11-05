import { useState } from 'react';
import { cx } from './cx';
import { Button } from './Button';
import { Mascot } from './Mascot';

export interface ContactCTAProps {
  title: string;
  subtitle?: string;
  email: string;
  buttonLabel?: string;
  href?: string;
  mascot?: boolean;
  id?: string;
  className?: string;
}

export function ContactCTA({ title, subtitle, email, buttonLabel = 'Start a project', href, mascot = true, id, className }: ContactCTAProps) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard?.writeText(email); } catch { /* clipboard blocked */ }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section className={cx('dd-cta', className)} id={id}>
      <div>
        <h2 className="dd-cta__title">{title}</h2>
        {subtitle && <p className="dd-cta__sub">{subtitle}</p>}
        <div className="dd-cta__actions">
          <Button variant="sun" size="lg" href={href ?? `mailto:${email}`} arrow>{buttonLabel}</Button>
          <button type="button" className="dd-cta__email" onClick={copy} aria-label={`Copy email address ${email}`}>
            {email}
            {copied && <span className="dd-cta__copied" role="status">Copied!</span>}
          </button>
        </div>
      </div>
      {mascot && <Mascot mood="party" size={180} className="dd-cta__mascot" />}
    </section>
  );
}
