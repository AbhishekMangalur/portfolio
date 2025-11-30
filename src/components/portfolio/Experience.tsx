import { resumeData } from '@/lib/data';
import { Section } from './Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <Section title="Experience">
      {resumeData.experience.map((exp, index) => (
        <div key={index}>
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
               <Building className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
              <p className="font-semibold text-blue-400">{exp.role}</p>
              <p className="text-sm mt-1 text-justify">{exp.description}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6 ml-4 md:ml-16">
            {exp.subSections.map((sub, subIndex) => (
              <Card key={subIndex} className="bg-card/50 border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{sub.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {sub.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-blue-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
