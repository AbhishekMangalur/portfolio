import React from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-m-20 py-16 animate-in fade-in-0 slide-in-from-bottom-12 duration-1000 ease-out', className)}>
      <h2 className="font-headline text-3xl font-bold tracking-tight text-blue-400 mb-8 pb-2 border-b-2 border-blue-400/30">
        {title}
      </h2>
      <div className="space-y-8 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
