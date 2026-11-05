import { useEffect, useMemo, useState } from 'react';
import { cx, type Tone } from './cx';

export type SkillLevel = 'expert' | 'advanced' | 'learning';

export interface Skill {
  name: string;
  group: string;
  level?: SkillLevel;
  note?: string;
}

export interface SkillKeyboardProps {
  skills: Skill[];
  groups?: { name: string; tone: Tone }[];
  title?: string;
  command?: string;
  autoplay?: boolean;
  interval?: number;
  legend?: boolean;
  className?: string;
}

const LEVELS: Record<SkillLevel, number> = { expert: 3, advanced: 2, learning: 1 };
const LEVEL_LABEL: Record<SkillLevel, string> = { expert: 'Expert', advanced: 'Advanced', learning: 'Learning' };
const TONES: Tone[] = ['sky', 'mint', 'sun', 'tomato'];
const slug = (x: string) => x.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function Pips({ n, className }: { n: number; className: string }) {
  return (
    <span className={className} aria-hidden="true">
      {[1, 2, 3].map((i) => <i key={i} className={i <= n ? 'on' : ''} />)}
    </span>
  );
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Every skill always visible as keycaps; the active one is "typed" into a terminal. */
export function SkillKeyboard({ skills, groups = [], title = 'skills.sh', command = 'skills --show', autoplay = true, interval = 2600, legend = true, className }: SkillKeyboardProps) {
  const { order, byGroup, toneOf } = useMemo(() => {
    const order: string[] = [];
    const byGroup: Record<string, number[]> = {};
    skills.forEach((s, i) => {
      if (!byGroup[s.group]) { byGroup[s.group] = []; order.push(s.group); }
      byGroup[s.group].push(i);
    });
    const toneOf: Record<string, Tone> = {};
    groups.forEach((g) => { toneOf[g.name] = g.tone; });
    order.forEach((g, i) => { toneOf[g] ??= TONES[i % TONES.length]; });
    return { order, byGroup, toneOf };
  }, [skills, groups]);

  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [typed, setTyped] = useState(0);
  const reduce = prefersReducedMotion();
  const cur = skills[active] ?? { name: '', group: '' };
  const cmd = `$ ${command} ${slug(cur.name)}`;

  useEffect(() => {
    if (reduce) { setTyped(cmd.length); return; }
    setTyped(0);
    let n = 0;
    const id = window.setInterval(() => {
      n += 1;
      setTyped(n);
      if (n >= cmd.length) window.clearInterval(id);
    }, 26);
    return () => window.clearInterval(id);
  }, [cmd, reduce]);

  useEffect(() => {
    if (held || reduce || !autoplay || skills.length < 2) return;
    const id = window.setInterval(() => setActive((x) => (x + 1) % skills.length), interval);
    return () => window.clearInterval(id);
  }, [held, reduce, autoplay, interval, skills.length]);

  const done = typed >= cmd.length;
  const lvl = cur.level ? LEVELS[cur.level] : 0;

  return (
    <div className={cx('dd-kb', className)} onMouseEnter={() => setHeld(true)} onMouseLeave={() => setHeld(false)}>
      <div className="dd-kb__screen" aria-live="polite">
        <div className="dd-kb__bar">
          <span className="dd-dot dd-dot--tomato" />
          <span className="dd-dot dd-dot--sun" />
          <span className="dd-dot dd-dot--mint" />
          <span className="dd-kb__title">{title}</span>
        </div>
        <div className="dd-kb__line dd-kb__cmd">
          {cmd.slice(0, typed)}
          {!done && <span className="dd-kb__caret" />}
        </div>
        <div className={cx('dd-kb__out', done && 'is-in')} key={active}>
          <div className="dd-kb__name">
            {cur.name}
            {cur.level && (
              <span className="dd-kb__lvl">
                <Pips n={lvl} className="dd-kb__meter" />
                {LEVEL_LABEL[cur.level]}
              </span>
            )}
          </div>
          {cur.note && <div className="dd-kb__note">// {cur.note}</div>}
          {done && <span className="dd-kb__caret" />}
        </div>
      </div>

      <div className="dd-kb__deck">
        {order.map((g) => (
          <div className="dd-kb__row" key={g}>
            <div className="dd-kb__group">{g}</div>
            <div className="dd-kb__keys">
              {byGroup[g].map((i) => {
                const s = skills[i];
                const on = i === active;
                return (
                  <button
                    key={s.name}
                    type="button"
                    className={cx('dd-key', `dd-key--${toneOf[g]}`, on && 'is-down')}
                    aria-pressed={on}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => { setHeld(true); setActive(i); }}
                    onBlur={() => setHeld(false)}
                    onClick={() => setActive(i)}
                  >
                    <span className="dd-key__label">{s.name}</span>
                    {s.level && <Pips n={LEVELS[s.level]} className="dd-key__pips" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {legend && (
        <div className="dd-kb__legend">
          {(Object.keys(LEVELS) as SkillLevel[]).map((l) => (
            <span key={l}><Pips n={LEVELS[l]} className="dd-key__pips" />{LEVEL_LABEL[l]}</span>
          ))}
          <span className="dd-kb__hint">Hover, tap or tab through the keys</span>
        </div>
      )}
    </div>
  );
}
