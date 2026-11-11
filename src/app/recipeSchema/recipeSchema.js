import * as z from "zod";

export const Recipe = z.object({
  recipename: z
    .string()
    .trim()
    .min(1, "Feltet må ikke være tomt")
    .regex(/^[\p{L} ]+$/u, "Brug kun bogstaver og mellemrum i opskriftsnavnet."),

  ingredients: z.string().trim().min(1, "Tilføj min en ingrediens"),

  servings: z.coerce.number().int("Brug kun tal.").min(1, "Der skal være mindst én protion"),

  difficulty: z.enum(["Easy", "Medium", "Hard"], {
    message: "Vælg en sværhedsgrad",
  }),

  prepTimeMinutes: z.coerce.number().int().min(0, "Intast forberadningstiden"),

  // cookTimeMinutes: z.coerce.number().int().min(0, "Intast tilberedningstid"),
});
