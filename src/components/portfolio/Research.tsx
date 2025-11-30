import { resumeData } from '@/lib/data';
import { Section } from './Section';
import { ExternalLink, Mic, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Research() {
  const { research } = resumeData;
  return (
    <Section title="Research and Publications">
      <div className="p-6 rounded-lg bg-card/50 border border-border/50">
        <h3 className="font-headline text-lg font-bold text-foreground mb-1">{research.title}</h3>
        <p className="text-sm italic mb-4">Authors: {research.authors.join(', ')}</p>
        <div className="flex items-start gap-3 mb-4">
            <FileText className="w-4 h-4 mt-1 shrink-0 text-blue-400" />
            <div>
                <h4 className="font-semibold text-foreground">Abstract</h4>
                <p className="text-sm text-justify">{research.abstract}</p>
            </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Paper available at:</h4>
          <div className="flex flex-wrap gap-4">
            {research.papers.map((paper, index) => (
              <Link key={index} href={paper.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline flex items-center gap-1">
                {paper.name}
                <ExternalLink className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
