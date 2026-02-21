'use server';
/**
 * @fileOverview A Genkit flow for generating concise, system-level project descriptions.
 *
 * - generateProjectDescription - A function that generates a project description using generative AI.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  techStack: z
    .array(z.string())
    .describe('A list of key technologies used in the project.'),
  projectOverview:
    z.string().optional().describe('An optional brief overview or context of the project.'),
});
export type GenerateProjectDescriptionInput = z.infer<
  typeof GenerateProjectDescriptionInputSchema
>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z
    .string()
    .describe('A concise, system-level description of the project.'),
});
export type GenerateProjectDescriptionOutput = z.infer<
  typeof GenerateProjectDescriptionOutputSchema
>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are an expert AI Engineer specializing in crafting concise, system-level descriptions for technical projects. Your goal is to generate a project description that highlights the system architecture, key technologies used, and the impact of the project, similar to descriptions found in high-end tech portfolios.

The description should be professional, technical, and no longer than 2-3 sentences. Focus on the 'how' and 'why' from a system perspective, rather than just the 'what'.

Project Name: {{{projectName}}}
Tech Stack: {{#each techStack}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{#if projectOverview}}Project Overview: {{{projectOverview}}}{{/if}}

Generate a concise, system-level description for this project:`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
