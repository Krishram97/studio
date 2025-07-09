import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Languages, ShieldCheck, Package, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Differentiators - Vamsiram AI',
  description: 'What sets us apart: India-first LLMs, modular APIs, on-prem deployments, and regulatory compliance with DPDP and FHIR.',
};

const differentiators = [
  {
    icon: Languages,
    title: 'India-First LLMs',
    description: 'Our Large Language Models are built from the ground up to understand the nuances of Indian languages and contexts, ensuring higher accuracy and cultural relevance.',
  },
  {
    icon: Package,
    title: 'Modular APIs & Open Standards',
    description: 'We offer flexible, unbundled APIs that prevent vendor lock-in. Our commitment to open standards promotes interoperability and future-proofing.',
  },
  {
    icon: Server,
    title: 'On-Prem & Sovereign Deployments',
    description: 'For organizations with strict data residency and security needs, we provide on-premise deployment options, ensuring complete data control.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Compliance by Design',
    description: 'Our platforms are architected to comply with Indian and global regulations, including the Digital Personal Data Protection (DPDP) Act and FHIR for healthcare.',
  },
];

export default function DifferentiatorsPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Differentiators</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We are not just another AI company. Our approach is fundamentally different, designed for the unique needs of India and emerging economies.
        </p>
      </section>

      <section className="mt-16 space-y-8">
        {differentiators.map((item, index) => (
          <Card key={index} className="w-full">
            <CardContent className="p-6 grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="p-4 bg-primary/20 rounded-full mb-4">
                        <item.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-semibold">{item.title}</h3>
                </div>
                <div className="md:col-span-2">
                    <p className="text-muted-foreground">{item.description}</p>
                </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
