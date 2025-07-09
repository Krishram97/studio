import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PropertyModerationTool from '@/components/product/PropertyModerationTool';
import { Bot, MapPin, ScanText, Languages, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product: Post My Property - Vamsiram AI',
  description: 'AI-powered property moderation platform with GPT-4o, Geo ML, OCR, and multilingual support.',
};

const features = [
  { icon: Bot, title: 'GPT-4o Integration', description: 'Advanced AI for accurate property classification and content moderation.' },
  { icon: MapPin, title: 'Geo ML', description: 'Leverages geospatial machine learning for location-based analysis and validation.' },
  { icon: ScanText, title: 'OCR Capabilities', description: 'Extracts and understands text from property images and documents automatically.' },
  { icon: Languages, title: 'Multilingual AI', description: 'Supports multiple Indian languages to cater to a diverse user base.' },
];

export default function ProductPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Post My Property</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Our flagship AI-powered platform designed to streamline and automate property listing moderation.
        </p>
      </section>

      <section className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="https://placehold.co/700x500.png"
            alt="Post My Property platform screenshot"
            width={700}
            height={500}
            className="rounded-lg shadow-lg"
            data-ai-hint="modern real estate"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-headline font-bold">Key Features</h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-full mt-1">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 text-center">
        <Card className="max-w-md mx-auto bg-primary/10 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 font-headline">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    Market Traction
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-4xl font-bold">850+</p>
                <p className="text-muted-foreground">Listings successfully moderated in Hyderabad.</p>
            </CardContent>
        </Card>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">Try the AI Moderation Tool</h2>
        <PropertyModerationTool />
      </section>
    </div>
  );
}
