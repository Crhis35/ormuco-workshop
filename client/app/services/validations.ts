import { z } from 'zod';

const email = z.string().email();
const password = z.string().min(5);

export const SignUp = z.object({
  email,
  password,
});
export const LogIn = z.object({
  email,
  password,
});

export const CreateServer = z.object({
  name: z.string().optional(),
  imageRef: z.string(),
  flavorRef: z.string(),
  networks: z
    .array(
      z.object({
        uuid: z.string(),
      })
    )
    .optional(),
});
