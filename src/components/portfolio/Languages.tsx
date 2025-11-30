import { resumeData } from '@/lib/data';
import { Section } from './Section';
import { Globe } from 'lucide-react';

export default function Languages() {
  return (
    <Section title="Languages">
      <ul className="space-y-2">
        {resumeData.languages.map((lang, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-foreground">{lang.language}</span>
            </span>
            <span className="text-sm">{lang.proficiency}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
