import { resumeData } from '@/lib/data';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';

export default function Projects() {
  return (
    <Section title="Academic Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {resumeData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
