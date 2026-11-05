import { SkillKeyboard } from '../components';
import { skills } from '../data/content';
import { SectionHead } from './SectionHead';

export function Skills() {
  return (
    <section className="wrap block block--first" id="skills">
      <SectionHead label={skills.label} tone="sky" title={skills.title} text={skills.text} />
      <SkillKeyboard title={skills.terminalTitle} skills={skills.list} groups={skills.groups} />
    </section>
  );
}
