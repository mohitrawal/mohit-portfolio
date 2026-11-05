import { Button, Mascot, SpeechBubble, Sticker } from '../components';
import { hero } from '../data/content';

const STICKER_TILTS = [6, -6, 4];

export function Hero() {
  const h = hero.headline;
  return (
    <header className="wrap hero">
      <div className="hero__words">
        <Sticker tone="paper" dot tilt={-2}>{hero.status}</Sticker>
        <h1>
          {h.before}<span className="dd-mark">{h.mark}</span>{h.middle}<span className="dd-scribble">{h.scribble}</span>{h.after}
        </h1>
        <p className="lead">{hero.intro}</p>
        <div className="cta-row">
          <Button size="lg" arrow href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button size="lg" variant="ghost" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Button>
        </div>
        <div className="note">{hero.note}</div>
      </div>
      <div className="stage">
        <div className="blob" aria-hidden="true" />
        <Mascot mood={hero.mascotMood} size={300} className="stage__mascot" />
        <SpeechBubble className="stage__bubble">{hero.bubble}</SpeechBubble>
        {hero.floatingStickers.map((s, i) => (
          <Sticker key={s.label} className={`stage__s${i + 1}`} tone={s.tone} tilt={STICKER_TILTS[i % 3]}>{s.label}</Sticker>
        ))}
      </div>
    </header>
  );
}
