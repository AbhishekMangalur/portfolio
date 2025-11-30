import { resumeData } from '@/lib/data';
import { Section } from './Section';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { education } = resumeData;
  return (
    <Section title="Education">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{education.institution}</h3>
          <p className="font-semibold text-blue-400">{education.degree}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mt-1">
            <span>{education.location}</span>
            <span>{education.period}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
