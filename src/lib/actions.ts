
'use server';

import { suggestWebsiteCategory } from '@/ai/flows/suggest-website-category';
import { z } from 'zod';

const schema = z.object({
  url: z.string().url({ message: 'Please enter a valid URL.' }),
});

export type FormState = {
  message: string;
  category?: string;
  error?: string;
};

export async function getWebsiteCategory(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    url: formData.get('url'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed.',
      error: validatedFields.error.flatten().fieldErrors.url?.[0],
    };
  }

  try {
    const result = await suggestWebsiteCategory({
      url: validatedFields.data.url,
    });
    return { message: 'Success', category: result.category };
  } catch (e) {
    console.error(e);
    return {
      message: 'AI request failed.',
      error: 'Could not categorize website. Please try again later.',
    };
  }
}
