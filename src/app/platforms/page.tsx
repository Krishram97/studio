import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Scale, ScanText, Tv, Mic, Bot } from 'lucide-react';
import Radar from '@/components/platforms/Radar';

export const metadata: Metadata = {
  title: 'Core Platforms (2025-2027) - Vamsiram AI',
  description: 'Our roadmap for core AI platforms, including VAMSIRAM AI Plugins, V-SENSE MCP, VAM-GPT, and Sonic Radar Simulators.',
};

const platforms = [
  {
    icon: Cpu,
    title: 'VAMSIRAM AI Plugins',
    description: 'A suite of modular APIs including advanced OCR, NLP, and specialized LegalTech tools.',
  },
  {
    icon: Tv,
    title: 'V-SENSE MCP',
    description: 'An AI observability panel providing insights and monitoring for complex AI systems.',
  },
  {
    icon: Bot,
    title: 'VAM-GPT',
    description: 'Homegrown Large Language Models optimized for Telugu, Hindi, and Kannada.',
  },
  {
    icon: Mic,
    title: 'Sonic Radar Simulator',
    description: 'Cutting-edge simulation technology for defense and healthcare applications.',
  },
];

export default function PlatformsPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Core Platforms (2025–2027)</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Our vision for building a comprehensive, India-first deep tech ecosystem.
        </p>
      </section>

      <section className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {platforms.map((platform, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="items-center text-center">
              <div className="p-4 bg-primary/20 rounded-full">
                <platform.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline pt-4">{platform.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-muted-foreground flex-grow">
              <p>{platform.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">Sonic Radar Simulator Demo</h2>
        <Card>
            <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-headline font-semibold">Advanced Signal Simulation</h3>
                        <p className="text-muted-foreground">Our Sonic Radar Simulator provides high-fidelity simulations for critical applications in defense and healthcare. This technology enables realistic testing and training environments, from tracking aerial targets to advanced medical imaging analysis.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Radar />
                    </div>
                </div>
            </CardContent>
        </Card>
      </section>
    </div>
  );
}
