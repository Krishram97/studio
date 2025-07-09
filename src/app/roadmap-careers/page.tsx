import type { Metadata } from 'next';
import AnimatedRoadmap from '@/components/roadmap/AnimatedRoadmap';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Scale } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roadmap & Careers - Vamsiram AI',
  description: 'Our roadmap through 2026 and open positions for ML Scientists and Legal AI Advisors.',
};

const jobOpenings = [
    {
        icon: Bot,
        title: 'ML Scientist',
        description: 'Join our core team to design, build, and deploy next-generation machine learning models for our core platforms.',
    },
    {
        icon: Scale,
        title: 'Legal AI Advisor',
        description: 'Bridge the gap between law and technology. Help us build and refine our LegalTech AI plugins and ensure compliance.',
    }
]

export default function RoadmapCareersPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Roadmap & Careers</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Charting the future of deep tech in India and looking for brilliant minds to join us on the journey.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-headline font-bold text-center mb-12">Our Journey Ahead</h2>
        <AnimatedRoadmap />
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-headline font-bold text-center mb-12">Join Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {jobOpenings.map(job => (
                 <Card key={job.title} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/20 rounded-full">
                                <job.icon className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="font-headline">{job.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription>{job.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" asChild>
                           <Link href="/funding-incubation#contact">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </CardFooter>
                 </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
