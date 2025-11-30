import { resumeData } from '@/lib/data';
import { Section } from './Section';
import { Badge } from '@/components/ui/badge';

export default function TechnicalSkills() {
  return (
    <Section title="Technical Skills">
      <div className="space-y-6">
        {resumeData.technicalSkills.map((category, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg text-foreground mb-3">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
