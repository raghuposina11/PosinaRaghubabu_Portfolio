import Section from './Section';
import { DATA } from '../data';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DATA.projects.map(project => (
          <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="border rounded-3xl overflow-hidden hover:shadow-lg">
            <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.blurb}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}