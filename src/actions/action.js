"use server";

import * as z from "zod";
import { Recipe } from "@/app/recipeSchema/recipeSchema";

const postRecipe = async (previousState, formData) => {
  const recipeName = formData.get("recipename");

  const validatedFields = Recipe.safeParse({
    recipename: recipeName,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Kontrollér opskriftens navn",
      fieldErrors: z.flattenError(validatedFields.error).fieldErrors,
    };
  }
  try {
    const response = await fetch("https://dummyjson.com/recipes/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: validatedFields.data.recipename,
      }),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    console.log(`Response status: ${response.status}`);
    return { success: true, message: "Opskriften blev oprettet. Hurra!!!!" };
 } catch (error) {
  return {
    success: false,
    message: "Der er desværre sket en fejl. Prøv igen senere",
    fieldErrors: {},
  };

  }};

export default postRecipe;
