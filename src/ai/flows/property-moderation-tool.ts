'use server';
/**
 * @fileOverview Property moderation AI agent.
 *
 * - moderateProperty - A function that handles the property moderation process.
 * - ModeratePropertyInput - The input type for the moderateProperty function.
 * - ModeratePropertyOutput - The return type for the moderateProperty function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModeratePropertyInputSchema = z.object({
  propertyDescription: z
    .string()
    .describe('The description of the property to be moderated.'),
  propertyLocation: z.string().describe('The location of the property.'),
  propertyType: z.string().describe('The type of property (e.g., house, apartment, commercial).'),
  propertyImages: z.array(z.string()).optional().describe('Array of image URLs or data URIs of the property.'),
});
export type ModeratePropertyInput = z.infer<typeof ModeratePropertyInputSchema>;

const ModeratePropertyOutputSchema = z.object({
  category: z.string().describe('The appropriate category for the property listing.'),
  isApproved: z.boolean().describe('Whether the property listing is approved based on content policies.'),
  moderationNotes: z.string().describe('Any notes or recommendations from the moderation process.'),
});
export type ModeratePropertyOutput = z.infer<typeof ModeratePropertyOutputSchema>;

export async function moderateProperty(input: ModeratePropertyInput): Promise<ModeratePropertyOutput> {
  return moderatePropertyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'moderatePropertyPrompt',
  input: {schema: ModeratePropertyInputSchema},
  output: {schema: ModeratePropertyOutputSchema},
  prompt: `You are an AI-powered property moderation tool. You will receive a property description, location, type, and images.
Your task is to categorize the property, determine if it adheres to content policies, and provide moderation notes.

Property Description: {{{propertyDescription}}}
Property Location: {{{propertyLocation}}}
Property Type: {{{propertyType}}}
{% if propertyImages %}
Property Images: 
  {% each propertyImages as image %}
    {{media url=image}}
  {% endeach %}
{% endif %}

Based on this information, please provide the category, approval status, and moderation notes in the specified JSON format.`,
});

const moderatePropertyFlow = ai.defineFlow(
  {
    name: 'moderatePropertyFlow',
    inputSchema: ModeratePropertyInputSchema,
    outputSchema: ModeratePropertyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
