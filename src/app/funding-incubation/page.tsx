import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Cpu, Handshake, Briefcase, BarChart } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';

export const metadata: Metadata = {
  title: 'Funding & Incubation - Vamsiram AI',
  description: 'Pre-seed funding ask of INR 50 Lakhs to scale our AI team, infrastructure, and partnerships.',
};

const useOfFunds = [
    { icon: Cpu, label: "AI Team Expansion" },
    { icon: BarChart, label: "Infrastructure & R&D" },
    { icon: Handshake, label: "Partnerships & GTM" },
    { icon: Briefcase, label: "Legal & Operations" },
]

export default function FundingPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Funding & Incubation Ask</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We are seeking strategic partners to fuel the next phase of our growth and build India's deep tech backbone.
        </p>
      </section>

      <section className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <Card className="bg-primary/10 border-primary/20">
                <CardHeader className="items-center">
                    <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                        <DollarSign className="h-10 w-10 text-primary" />
                        Pre-Seed Ask: ₹50 Lakhs
                    </CardTitle>
                </CardHeader>
            </Card>
            <div>
                <h3 className="text-2xl font-headline font-semibold mb-4">Use of Funds</h3>
                <div className="grid grid-cols-2 gap-4">
                    {useOfFunds.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                            <item.icon className="h-5 w-5 text-primary"/>
                            <span className="text-sm text-muted-foreground">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-muted-foreground">This pre-seed investment will provide us with a 24-month runway to scale our core team, enhance our AI infrastructure, forge strategic partnerships, and accelerate our go-to-market strategy.</p>
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
