import Header from '@/components/portfolio/Header';
import Experience from '@/components/portfolio/Experience';
import DevOpsSkills from '@/components/portfolio/DevOpsSkills';
import TechnicalSkills from '@/components/portfolio/TechnicalSkills';
import Projects from '@/components/portfolio/Projects';
import Education from '@/components/portfolio/Education';
import Research from '@/components/portfolio/Research';
import Internships from '@/components/portfolio/Internships';
import Languages from '@/components/portfolio/Languages';
import Certifications from '@/components/portfolio/Certifications';
import Contact from '@/components/portfolio/Contact';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/portfolio/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <Header />
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-12">
          <div id="experience">
            <Experience />
          </div>
          <div id="skills">
            <DevOpsSkills />
            <Separator className="my-12 bg-border/50" />
            <TechnicalSkills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <Education />
          <Research />
          <Internships />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            <Languages />
            <Certifications />
          </div>
        </div>
        <Separator className="my-20 bg-border/50" />
        <Contact />
      </main>
      <footer className="text-center p-6 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Abhishek Mangalur. All rights reserved.</p>
      </footer>
    </div>
  );
}
