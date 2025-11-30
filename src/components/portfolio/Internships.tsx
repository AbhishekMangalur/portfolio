import { resumeData } from '@/lib/data';
import { Section } from './Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, ShieldCheck } from 'lucide-react';

export default function Internships() {
  const icons = {
    "Cybersecurity": <ShieldCheck className="w-6 h-6" />,
    "AI and Cloud": <BrainCircuit className="w-6 h-6" />,
  }
  return (
    <Section title="Internships">
        <div className="grid md:grid-cols-2 gap-6">
        {resumeData.internships.map((internship, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader className='flex-row items-center gap-4'>
                    <div className="bg-primary/10 text-primary p-2 rounded-full">
                        {icons[internship.title as keyof typeof icons]}
                    </div>
                    <CardTitle className="text-xl text-foreground">{internship.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-justify">{internship.description}</p>
                </CardContent>
            </Card>
        ))}
        </div>
    </Section>
  );
}
