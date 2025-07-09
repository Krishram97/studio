'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { moderateProperty, ModeratePropertyInput, ModeratePropertyOutput } from '@/ai/flows/property-moderation-tool';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { Badge } from '../ui/badge';

const formSchema = z.object({
  propertyDescription: z.string().min(10, 'Description must be at least 10 characters.'),
  propertyLocation: z.string().min(3, 'Location is required.'),
  propertyType: z.enum(['Apartment', 'House', 'Commercial', 'Land']),
});

type FormData = z.infer<typeof formSchema>;

export default function PropertyModerationTool() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ModeratePropertyOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyDescription: '',
      propertyLocation: '',
      propertyType: 'Apartment',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const input: ModeratePropertyInput = data;
      const output = await moderateProperty(input);
      setResult(output);
    } catch (e) {
      console.error(e);
      setError('An error occurred while moderating the property. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Enter Property Details</CardTitle>
          <CardDescription>Submit a property for AI-powered moderation analysis.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="propertyDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., 'Spacious 3BHK with a beautiful view...'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'Hyderabad'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a property type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Apartment">Apartment</SelectItem>
                        <SelectItem value="House">House</SelectItem>
                        <SelectItem value="Commercial">Commercial</SelectItem>
                        <SelectItem value="Land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading} className="w-full">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Moderate Property
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Moderation Result</CardTitle>
          <CardDescription>The AI's analysis will appear here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading && <div className="flex justify-center items-center h-full"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
          {error && <div className="text-destructive">{error}</div>}
          {result && (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Approval Status</h4>
                <div className="flex items-center gap-2 mt-1">
                  {result.isApproved ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <XCircle className="h-6 w-6 text-destructive" />
                  )}
                  <Badge variant={result.isApproved ? 'default' : 'destructive'} className={result.isApproved ? 'bg-green-100 text-green-800' : ''}>
                    {result.isApproved ? 'Approved' : 'Rejected'}
                  </Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Suggested Category</h4>
                <p className="text-muted-foreground">{result.category}</p>
              </div>
              <div>
                <h4 className="font-semibold">Moderation Notes</h4>
                <p className="text-muted-foreground text-sm p-3 bg-secondary/50 rounded-md">{result.moderationNotes}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
