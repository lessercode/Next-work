'use server';

/**
 * @fileOverview Suggests a category for a given website URL.
 *
 * - suggestWebsiteCategory - A function that takes a website URL and returns a suggested category.
 * - SuggestWebsiteCategoryInput - The input type for the suggestWebsiteCategory function.
 * - SuggestWebsiteCategoryOutput - The return type for the suggestWebsiteCategory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestWebsiteCategoryInputSchema = z.object({
  url: z.string().describe('The URL of the website to categorize.'),
});
export type SuggestWebsiteCategoryInput = z.infer<
  typeof SuggestWebsiteCategoryInputSchema
>;

const SuggestWebsiteCategoryOutputSchema = z.object({
  category: z.string().describe('The suggested category for the website.'),
});
export type SuggestWebsiteCategoryOutput = z.infer<
  typeof SuggestWebsiteCategoryOutputSchema
>;

export async function suggestWebsiteCategory(
  input: SuggestWebsiteCategoryInput
): Promise<SuggestWebsiteCategoryOutput> {
  return suggestWebsiteCategoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestWebsiteCategoryPrompt',
  input: {schema: SuggestWebsiteCategoryInputSchema},
  output: {schema: SuggestWebsiteCategoryOutputSchema},
  prompt: `You are a website categorization expert. Given a URL, you will determine the most appropriate category for the website.

URL: {{{url}}}

Category:`,
});

const suggestWebsiteCategoryFlow = ai.defineFlow(
  {
    name: 'suggestWebsiteCategoryFlow',
    inputSchema: SuggestWebsiteCategoryInputSchema,
    outputSchema: SuggestWebsiteCategoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
