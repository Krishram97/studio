import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Bot, Rocket, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services - Vamsiram AI',
  description: 'Our services include Custom AI/ML Development, Civic and Defense Simulations, Embedded Android AI, and AR/VR Interfaces.',
};

const services = [
  {
    icon: Code,
    title: 'Custom AI/ML Development',
    description: 'Tailored AI and Machine Learning solutions designed to solve your unique business challenges and drive innovation.',
  },
  {
    icon: Rocket,
    title: 'Civic and Defense Simulations',
    description: 'High-fidelity simulations for urban planning, infrastructure management, and strategic defense applications.',
  },
  {
    icon: Bot,
    title: 'Embedded Android AI',
    description: 'Integrating powerful AI capabilities directly into Android devices for on-the-edge processing and enhanced user experiences.',
  },
  {
    icon: Layers,
    title: 'AR/VR Interfaces',
    description: 'Developing immersive Augmented and Virtual Reality interfaces powered by AI for training, visualization, and interaction.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We provide end-to-end solutions to help organizations leverage the power of deep technology.
        </p>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-primary/20 rounded-full">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
