import * as z from "zod";

export const Recipe = z.object({
  recipename: z
    .string()
    .trim()
    .min(1, "Feltet må ikke være tomt")
    .regex(/^[\p{L} ]+$/u, "Brug kun bogstaver og mellemrum i opskriftsnavnet."),
});
