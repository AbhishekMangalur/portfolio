'use client';
import { useState, useTransition } from 'react';
import type { Project } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, Wand2, Github, ExternalLink } from 'lucide-react';
import { enhanceProjectDescription } from '@/ai/flows/enhance-project-descriptions';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const iconComponents = {
  github: Github,
  'external-link': ExternalLink,
};

export function ProjectCard({ project }: { project: Project }) {
  const [isPending, startTransition] = useTransition();
  const [enhancedDescription, setEnhancedDescription] = useState<string | null>(null);
  const [isEnhanced, setIsEnhanced] = useState(false);
  const { toast } = useToast();

  const handleEnhance = () => {
    if (isEnhanced) {
      setIsEnhanced(false);
      return;
    }

    if (enhancedDescription) {
      setIsEnhanced(true);
      return;
    }
    
    startTransition(async () => {
      try {
        const result = await enhanceProjectDescription({
          projectDescription: project.description,
          keywords: project.technologies.join(', '),
        });
        setEnhancedDescription(result.enhancedDescription);
        setIsEnhanced(true);
      } catch (error) {
        console.error('Failed to enhance description:', error);
        toast({
          title: "AI Enhancement Failed",
          description: "Sorry, we couldn't enhance the description at this time.",
          variant: "destructive"
        });
      }
    });
  };

  const currentDescription = isEnhanced && enhancedDescription ? enhancedDescription : project.description;

  return (
    <Card className="flex flex-col h-full bg-card/70 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
          <Button onClick={handleEnhance} disabled={isPending} variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0 group">
              {isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                isEnhanced ? <Sparkles className="h-4 w-4 text-blue-400" /> : <Wand2 className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
              )}
              <span className="sr-only">Enhance with AI</span>
            </Button>
        </div>
        <CardDescription className="text-justify pt-2 transition-all duration-300">
            {isEnhanced && <span className='block text-xs text-blue-400 font-headline mb-2'>AI-ENHANCED</span>}
            {currentDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4">
            {project.links.map(link => {
                const IconComponent = iconComponents[link.icon];
                return (
                    <Link key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors">
                      <IconComponent className="w-5 h-5" />
                      <span className="sr-only">{link.name}</span>
                    </Link>
                )
            })}
        </div>
      </CardFooter>
    </Card>
  );
}
