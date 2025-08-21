import Section from './Section';
import { DATA } from '../data';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-4 lg:grid-cols-4">
        {DATA.projects.map(project => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="border rounded-3xl overflow-hidden hover:shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-44 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.blurb}</p>

              {/* Skills list */}
              {project.skills && (
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-green-100 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
