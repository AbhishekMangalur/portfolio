import { resumeData } from '@/lib/data';
import { Section } from './Section';
import { Award, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Certifications() {
  return (
    <Section title="Certifications">
      <ul className="space-y-3">
        {resumeData.certifications.map((cert, index) => (
          <li key={index} className="flex items-start gap-3">
            <Award className="w-4 h-4 mt-1 shrink-0 text-blue-400" />
            <Link href={cert.url} target="_blank" rel="noopener noreferrer" className="group text-foreground hover:text-blue-400 transition-colors">
              <span>{cert.name}</span>
              <ExternalLink className="w-3 h-3 ml-1 inline-block opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
