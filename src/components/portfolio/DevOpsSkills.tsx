import { resumeData } from '@/lib/data';
import { Section } from './Section';
import { CheckCircle2 } from 'lucide-react';

export default function DevOpsSkills() {
  return (
    <Section title="DevOps & Deployment">
      <ul className="space-y-3 columns-1 md:columns-2">
        {resumeData.devopsSkills.map((skill, index) => (
          <li key={index} className="flex items-start gap-3">
             <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-blue-400" />
             <span>{skill}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
