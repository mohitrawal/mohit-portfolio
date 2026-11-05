import { cx, type Tone } from './cx';
import { Sticker } from './Sticker';
import { Arrow } from './Arrow';

export interface ProjectCardProps {
  title: string;
  description?: string;
  meta?: string;
  file?: string;
  tags?: string[];
  tone?: Tone;
  image?: string;
  imageAlt?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}

const TAG_TONES = ['mint', 'sky', 'sun', 'paper'] as const;

export function ProjectCard({ title, description, meta, file, tags = [], tone = 'sky', image, imageAlt = '', href, linkLabel = 'Visit website', className }: ProjectCardProps) {
  return (
    <article className={cx('dd-card', className)}>
      <div className="dd-card__bar">
        <span className="dd-dot dd-dot--tomato" />
        <span className="dd-dot dd-dot--sun" />
        <span className="dd-dot dd-dot--mint" />
        {file && <span className="dd-card__file">{file}</span>}
      </div>
      <div className="dd-card__art" style={{ ['--dd-tone' as string]: `var(--${tone})` }}>
        {image ? (
          <img src={image} alt={imageAlt} loading="lazy" />
        ) : (
          <div className="dd-wire" aria-hidden="true"><span /><span /><span /><span /></div>
        )}
      </div>
      <div className="dd-card__body">
        {meta && <div className="dd-card__meta">{meta}</div>}
        <h3 className="dd-card__title">{title}</h3>
        {description && <p className="dd-card__desc">{description}</p>}
        {tags.length > 0 && (
          <div className="dd-tags">
            {tags.map((t, i) => (
              <Sticker key={t} tone={TAG_TONES[i % TAG_TONES.length]} tilt={i % 2 ? 2 : -2}>{t}</Sticker>
            ))}
          </div>
        )}
        {href && (
          <a className="dd-link" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            {linkLabel}
            <span className="dd-link__arrow" aria-hidden="true"><Arrow /></span>
          </a>
        )}
      </div>
    </article>
  );
}
