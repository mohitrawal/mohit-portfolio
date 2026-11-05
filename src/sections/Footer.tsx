import { footer, site } from '../data/content';

export function Footer() {
  const links = [...site.socials, { label: 'Résumé', href: site.resumeUrl }];
  return (
    <footer className="wrap footer">
      <span>© {new Date().getFullYear()} {site.name} · {footer.text}</span>
      <span>
        {links.map((l, i) => (
          <span key={l.label}>
            {i > 0 && ' · '}
            <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{l.label}</a>
          </span>
        ))}
      </span>
    </footer>
  );
}
