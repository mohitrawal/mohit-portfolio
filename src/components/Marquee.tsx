import { cx, type Tone } from './cx';

export interface MarqueeProps {
  items: string[];
  tone?: Tone;
  speed?: number;
  tilt?: number;
  className?: string;
}

function Star() {
  return (
    <svg className="dd-marquee__star" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5c.8 5.6 3.9 8.7 10.5 10.5-6.6 1.8-9.7 4.9-10.5 10.5C11.2 16.9 8.1 13.8 1.5 12 8.1 10.2 11.2 7.1 12 1.5z" />
    </svg>
  );
}

/** A tilted ticker for short promises. For skills use SkillKeyboard. */
export function Marquee({ items, tone = 'sun', speed = 26, tilt = -1.5, className }: MarqueeProps) {
  const run = (dup: boolean) =>
    items.map((t, i) => (
      <span key={`${dup ? 'b' : 'a'}${i}`} className="dd-marquee__item" aria-hidden={dup || undefined}>
        {t}
        <Star />
      </span>
    ));
  return (
    <div
      className={cx('dd-marquee', tone !== 'sun' && `dd-marquee--${tone}`, className)}
      style={{ ['--dd-speed' as string]: `${speed}s`, ['--dd-tilt' as string]: `${tilt}deg` }}
      aria-label={items.join(', ')}
    >
      <div className="dd-marquee__track">{run(false)}{run(true)}</div>
    </div>
  );
}
