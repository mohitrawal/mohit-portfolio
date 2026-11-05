import { cx } from './cx';

export type MascotMood = 'wave' | 'think' | 'party';

export interface MascotProps {
  mood?: MascotMood;
  size?: number;
  label?: string;
  className?: string;
}

/** Pixel: a little monitor-headed developer. Floats, blinks and waves. */
export function Mascot({ mood = 'wave', size = 200, label = 'Pixel, a cartoon developer mascot', className }: MascotProps) {
  let face, arm, extra = null;

  if (mood === 'think') {
    face = (
      <>
        <ellipse className="eye" cx={84} cy={82} rx={7} ry={9} />
        <ellipse className="eye" cx={124} cy={82} rx={7} ry={9} />
        <path className="face" d="M90 110 Q100 106 112 110" />
      </>
    );
    arm = (
      <g>
        <path className="o f-none" d="M132 162 Q160 170 164 152" />
        <circle className="o f-raised" cx={162} cy={148} r={8} />
      </g>
    );
    extra = (
      <g>
        <circle className="think-dot" cx={168} cy={40} r={5} />
        <circle className="think-dot" cx={182} cy={28} r={7} />
        <circle className="think-dot" cx={196} cy={12} r={9} />
      </g>
    );
  } else if (mood === 'party') {
    face = (
      <>
        <path className="face" d="M76 88 Q84 78 92 88" />
        <path className="face" d="M108 88 Q116 78 124 88" />
        <path className="f-tomato" d="M80 102 Q100 128 120 102 Z" style={{ stroke: 'var(--mint)', strokeWidth: 4, strokeLinejoin: 'round' }} />
      </>
    );
    arm = (
      <g className="arm-wave">
        <path className="o f-none" d="M132 160 Q172 154 184 120" />
        <circle className="o f-raised" cx={186} cy={114} r={8} />
      </g>
    );
    extra = (
      <g>
        <rect className="confetti f-tomato o" x={22} y={30} width={10} height={10} rx={2} strokeWidth={2.5} />
        <rect className="confetti f-sky o" x={170} y={22} width={10} height={10} rx={2} strokeWidth={2.5} />
        <circle className="confetti f-mint o" cx={40} cy={8} r={5} strokeWidth={2.5} />
        <circle className="confetti f-sun o" cx={156} cy={4} r={5} strokeWidth={2.5} />
      </g>
    );
  } else {
    face = (
      <>
        <ellipse className="eye" cx={80} cy={88} rx={7} ry={9} />
        <ellipse className="eye" cx={120} cy={88} rx={7} ry={9} />
        <path className="face" d="M84 106 Q100 120 116 106" />
      </>
    );
    arm = (
      <g className="arm-wave">
        <path className="o f-none" d="M132 160 Q172 156 182 126" />
        <circle className="o f-raised" cx={184} cy={120} r={8} />
      </g>
    );
  }

  return (
    <svg className={cx('dd-mascot', className)} width={size} height={size * 1.1} viewBox="0 0 200 220" role="img" aria-label={label}>
      <ellipse className="shadow" cx={100} cy={210} rx={52} ry={7} />
      {extra}
      <g className="body">
        <g className="antenna">
          <path className="o f-none" d="M100 40 L100 20" />
          <circle className="o f-tomato" cx={100} cy={14} r={9} />
        </g>
        <path className="o f-none" d="M84 186 L84 202 M116 186 L116 202" />
        <path className="o f-none" d="M68 160 Q48 168 42 184" />
        <rect className="o f-tomato" x={68} y={148} width={64} height={40} rx={12} />
        <text x={100} y={175} textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '16px', fill: 'var(--on-fill)' }}>
          {'</>'}
        </text>
        <rect className="o f-sun" x={30} y={40} width={140} height={112} rx={28} />
        <rect className="o f-screen" x={48} y={58} width={104} height={72} rx={16} strokeWidth={3} />
        {face}
        {arm}
      </g>
    </svg>
  );
}
