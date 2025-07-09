'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Bot } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/platforms', label: 'Platforms' },
  { href: '/services', label: 'Services' },
  { href: '/differentiators', label: 'Differentiators' },
  { href: '/revenue', label: 'Revenue' },
  { href: '/roadmap-careers', label: 'Roadmap' },
  { href: '/funding-incubation', label: 'Funding' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline inline-block">Vamsiram AI</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6" onClick={() => setSheetOpen(false)}>
                <Bot className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline inline-block">Vamsiram AI</span>
              </Link>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Button asChild className="hidden md:inline-flex" variant="outline">
            <Link href="/funding-incubation#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
