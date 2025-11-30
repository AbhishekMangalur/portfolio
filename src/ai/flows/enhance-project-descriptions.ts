'use server';

/**
 * @fileOverview This file defines a Genkit flow to enhance project descriptions using AI.
 *
 * - enhanceProjectDescription - Enhances a given project description using AI.
 * - EnhanceProjectDescriptionInput - The input type for the enhanceProjectDescription function.
 * - EnhanceProjectDescriptionOutput - The return type for the enhanceProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceProjectDescriptionInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The original project description to be enhanced.'),
  keywords: z
    .string()
    .describe(
      'Comma-separated keywords related to the project for better enhancement.'
    ),
});
export type EnhanceProjectDescriptionInput = z.infer<
  typeof EnhanceProjectDescriptionInputSchema
>;

const EnhanceProjectDescriptionOutputSchema = z.object({
  enhancedDescription: z
    .string()
    .describe('The AI-enhanced project description.'),
});
export type EnhanceProjectDescriptionOutput = z.infer<
  typeof EnhanceProjectDescriptionOutputSchema
>;

export async function enhanceProjectDescription(
  input: EnhanceProjectDescriptionInput
): Promise<EnhanceProjectDescriptionOutput> {
  return enhanceProjectDescriptionFlow(input);
}

const enhanceProjectDescriptionPrompt = ai.definePrompt({
  name: 'enhanceProjectDescriptionPrompt',
  input: {schema: EnhanceProjectDescriptionInputSchema},
  output: {schema: EnhanceProjectDescriptionOutputSchema},
  prompt: `You are an AI assistant specialized in enhancing project descriptions.

  Given the original project description and a list of keywords, your task is to rewrite and enhance the description to be more engaging, informative, and relevant.
  The enhanced description should clearly communicate the project's value and relevance to potential visitors.

  Original Description: {{{projectDescription}}}
  Keywords: {{{keywords}}}

  Enhanced Description:`,
});

const enhanceProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceProjectDescriptionFlow',
    inputSchema: EnhanceProjectDescriptionInputSchema,
    outputSchema: EnhanceProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await enhanceProjectDescriptionPrompt(input);
    return output!;
  }
);
