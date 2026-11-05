import { Sticker, type Tone } from '../components';

export function SectionHead({ label, tone, title, text }: { label: string; tone: Tone; title: string; text?: string }) {
  return (
    <div className="head">
      <div>
        <Sticker tone={tone}>{label}</Sticker>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}
