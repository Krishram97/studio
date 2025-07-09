// Content Guide Tool
'use server';
/**
 * @fileOverview An AI-powered tool that suggests relevant pages based on user interests.
 *
 * - contentGuideTool - A function that suggests relevant website pages to the user.
 * - ContentGuideToolInput - The input type for the contentGuideTool function.
 * - ContentGuideToolOutput - The return type for the contentGuideTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentGuideToolInputSchema = z.object({
  interests: z
    .string()
    .describe('The user interests, so the AI can suggest the best pages.'),
});
export type ContentGuideToolInput = z.infer<typeof ContentGuideToolInputSchema>;

const ContentGuideToolOutputSchema = z.object({
  suggestedPages: z
    .string()
    .describe(
      'A list of suggested pages, based on the user interests. Just a comma separated string of the page names.'
    ),
});
export type ContentGuideToolOutput = z.infer<typeof ContentGuideToolOutputSchema>;

export async function contentGuideTool(input: ContentGuideToolInput): Promise<ContentGuideToolOutput> {
  return contentGuideToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentGuideToolPrompt',
  input: {schema: ContentGuideToolInputSchema},
  output: {schema: ContentGuideToolOutputSchema},
  prompt: `You are an AI assistant that helps users navigate the VAMSIRAM ENTERPRISES website.

  Based on the user's interests, suggest the most relevant pages to visit.
  Here is a list of the available pages: Home, Product, Core Platforms, Services, Differentiators, Revenue Model, Roadmap and Careers, Funding and Incubation Ask.

  Interests: {{{interests}}}

  Suggested Pages:`, // Just comma separated values.
});

const contentGuideToolFlow = ai.defineFlow(
  {
    name: 'contentGuideToolFlow',
    inputSchema: ContentGuideToolInputSchema,
    outputSchema: ContentGuideToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
