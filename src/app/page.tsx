import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BrainCircuit, Users, Package } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/10">
        <div className="container grid lg:grid-cols-2 gap-12 items-center min-h-[70vh] py-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary-foreground/90 leading-tight">
              India’s Deep Tech Backbone – AI-Powered by Design
            </h1>
            <p className="text-lg text-muted-foreground">
              VAMSIRAM ENTERPRISES builds modular, India-first AI infrastructure for Real Estate, LegalTech, Public Infra, and Defense, democratizing deep tech for Bharat and the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/roadmap-careers">Join the Mission <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/funding-incubation">Incubate with Us</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Modern Indian AI Imagery"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
              data-ai-hint="India AI technology"
            />
          </div>
        </div>
      </section>

      {/* About the Founder Section */}
      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Vamsee Krishna Kari"
              width={500}
              height={500}
              className="rounded-full shadow-xl mx-auto"
              data-ai-hint="AI architect portrait"
            />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <h2 className="text-3xl font-headline font-bold">About the Founder</h2>
            <p className="text-xl font-semibold text-primary">Vamsee Krishna Kari</p>
            <p className="text-md text-muted-foreground">
              A Full-stack AI Architect with a vision to build ethical, multilingual, and culturally tuned AI for India. Vamsee's expertise drives our mission to democratize deep technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container text-center">
          <h2 className="text-3xl font-headline font-bold mb-4">Why Now?</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
            The market is ripe for disruption. We are addressing a critical gap created by SaaS fatigue and the demand for specialized, sovereign AI solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/20 rounded-full">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">India-First AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Developing LLMs and AI models that understand Indian languages and cultural contexts.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/20 rounded-full">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Modular Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Flexible, API-first infrastructure that avoids vendor lock-in and scales with your needs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/20 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Ethical & Sovereign</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Committed to data privacy, regulatory compliance (DPDP), and building for India's strategic autonomy.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
