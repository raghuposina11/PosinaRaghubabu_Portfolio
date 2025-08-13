import Section from './Section';
import { DATA } from '../data';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-3">
        {DATA.skills.map(skill => (
          <span key={skill} className="px-3 py-2 rounded-xl border shadow-sm">{skill}</span>
        ))}
      </div>
    </Section>
  );
}