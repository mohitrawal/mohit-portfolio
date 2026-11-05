import { process } from '../data/content';
import { SectionHead } from './SectionHead';

export function Process() {
  return (
    <section className="wrap block" id="process">
      <SectionHead label={process.label} tone="sky" title={process.title} />
      <ol className="steps">
        {process.steps.map((s, i) => (
          <li className="step" key={s.title}>
            <b>{i + 1}</b>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
