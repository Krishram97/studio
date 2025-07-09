import Link from 'next/link';
import { Bot, Linkedin, Twitter, Github } from 'lucide-react';
import ContentGuide from '@/components/shared/ContentGuide';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mr-6 flex items-center space-x-2 mb-4">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">Vamsiram AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              India’s Deep Tech Backbone – AI-Powered by Design.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="GitHub"><Github className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
            </div>
          </div>
          <div className="lg:col-span-3">
             <ContentGuide />
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VAMSIRAM ENTERPRISES PVT LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
