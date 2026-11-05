import { ProjectCard } from '../components';
import { work } from '../data/content';
import { SectionHead } from './SectionHead';

export function Work() {
  return (
    <section className="wrap block" id="work">
      <SectionHead label={work.label} tone="mint" title={work.title} text={work.text} />
      <div className="g3">
        {work.projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}
