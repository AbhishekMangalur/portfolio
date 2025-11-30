'use client';
import { resumeData } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedRoles from './AnimatedRoles';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Header() {
  const { name, contact } = resumeData;
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="about" className="py-24 md:py-32 px-4 md:px-6 flex items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-purple-500">
              {name}
            </h1>
            <div className="w-full md:w-auto">
              <AnimatedRoles />
            </div>
            <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
              {resumeData.summary}
            </p>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                <Button size="lg" onClick={scrollToContact} className="bg-primary/90 hover:bg-primary text-primary-foreground">
                  Get in Touch
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <a href="https://drive.google.com/file/d/1p6tnF8eDw8o0_Ak9lrkJtYKnzmKafYVd/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        View Resume
                    </a>
                </Button>
            </div>
            <div className="mt-10 flex items-center justify-center md:justify-start flex-wrap gap-4 text-muted-foreground">
              {Object.entries(contact).map(([key, item]) => (
                <Link key={item.value} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <item.icon className="w-6 h-6" />
                  <span className="sr-only">{key}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            {profileImage && (
              <Image 
                src={profileImage.imageUrl}
                alt="Abhishek Mangalur"
                fill
                className="rounded-full object-contain shadow-lg border-4 border-primary/20"
                data-ai-hint={profileImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
