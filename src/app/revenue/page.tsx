import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Bot, Building, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Revenue Model - Vamsiram AI',
  description: 'Our flexible revenue models include SaaS subscriptions, API metering, and enterprise licensing.',
};

const pricingTiers = [
  {
    icon: Bot,
    title: 'Starter',
    price: '1,000',
    description: 'For individuals and small teams getting started with AI.',
    features: ['Basic API Access', '1,000 AI Credits/mo', 'Community Support'],
    cta: 'Get Started',
  },
  {
    icon: Zap,
    title: 'Professional',
    price: '10,000',
    description: 'For growing businesses that need more power and support.',
    features: ['Full API Access', '15,000 AI Credits/mo', 'Email & Chat Support', 'Basic Analytics'],
    isPopular: true,
    cta: 'Choose Professional',
  },
  {
    icon: Building,
    title: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with custom needs and security requirements.',
    features: ['Volume Discounts', 'On-Prem Deployment', 'Dedicated Support', 'Advanced Compliance'],
    cta: 'Contact Sales',
  },
];

export default function RevenuePage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Revenue Model</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Transparent and flexible pricing to match your scale and needs.
        </p>
      </section>

      <section className="mt-16 grid lg:grid-cols-3 gap-8 items-stretch">
        {pricingTiers.map((tier) => (
          <Card key={tier.title} className={`flex flex-col ${tier.isPopular ? 'border-primary shadow-lg' : ''}`}>
            {tier.isPopular && <div className="bg-primary text-primary-foreground text-center text-sm py-1 font-semibold rounded-t-lg">Most Popular</div>}
            <CardHeader className="items-center text-center">
              <div className="p-4 bg-primary/20 rounded-full mb-4">
                <tier.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">{tier.title}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <div className="text-center">
                    {tier.price === 'Custom' ? (
                        <p className="text-4xl font-bold">Custom</p>
                    ) : (
                        <p className="text-4xl font-bold">
                        ₹{tier.price}<span className="text-lg font-normal text-muted-foreground">/mo</span>
                        </p>
                    )}
                </div>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={tier.isPopular ? 'default' : 'outline'}>
                <Link href="/funding-incubation#contact">{tier.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
      
      <section className="mt-20">
        <Card className="bg-secondary/50">
            <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="font-headline text-2xl font-bold">API Metering & Licensing</h3>
                    <p className="text-muted-foreground mt-2">Beyond our standard plans, we offer pay-as-you-go API metering for flexible usage and comprehensive enterprise licenses for large-scale deployments. Contact us to design a plan that fits your exact requirements.</p>
                </div>
                <div className="flex justify-center">
                     <Button asChild size="lg">
                        <Link href="/funding-incubation#contact">Discuss Your Needs</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
      </section>
    </div>
  );
}
