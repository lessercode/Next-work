
'use server';

import { z } from 'zod';

const schema = z.object({
  url: z.string().url({ message: 'Please enter a valid URL.' }),
});

export type FormState = {
  message: string;
  category?: string;
  error?: string;
};
