'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contentGuideTool, ContentGuideToolInput, ContentGuideToolOutput } from '@/ai/flows/content-guide-tool';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Wand2 } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  interests: z.string().min(3, { message: 'Please tell us a bit more about your interests.' }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContentGuide() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ContentGuideToolOutput | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { interests: '' },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setResult(null);
    try {
      const output = await contentGuideTool(data);
      setResult(output);
    } catch (error) {
      console.error('Error with content guide tool:', error);
    }
    setLoading(false);
  };

  const getPageUrl = (pageName: string) => {
    const mapping: { [key: string]: string } = {
      'Home': '/',
      'Product': '/product',
      'Core Platforms': '/platforms',
      'Services': '/services',
      'Differentiators': '/differentiators',
      'Revenue Model': '/revenue',
      'Roadmap and Careers': '/roadmap-careers',
      'Funding and Incubation Ask': '/funding-incubation',
    };
    return mapping[pageName.trim()] || '/';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Wand2 className="h-6 w-6 text-accent" />
            <CardTitle className="font-headline">Need a Guide?</CardTitle>
        </div>
        <CardDescription>Tell us what you're interested in, and our AI will suggest the best pages for you to visit.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Interests</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 'AI in defense', 'job openings', 'investment opportunities'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              Suggest Pages
            </Button>
          </form>
        </Form>
        {result && (
          <div className="mt-6">
            <h3 className="font-semibold font-headline">Suggested Pages:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
                {result.suggestedPages.split(',').map((page, index) => (
                    <Button asChild variant="outline" key={index}>
                        <Link href={getPageUrl(page)}>{page.trim()}</Link>
                    </Button>
                ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
