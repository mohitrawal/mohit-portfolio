import { ServiceCard } from '../components';
import { services } from '../data/content';
import { SectionHead } from './SectionHead';

export function Services() {
  return (
    <section className="wrap block" id="services">
      <SectionHead label={services.label} tone="sun" title={services.title} text={services.text} />
      <div className="g3">
        {services.list.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </section>
  );
}
