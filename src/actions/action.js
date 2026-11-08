"use server";
// import * as z from "zod";
// import { Recipe } from "@/schemas/recipeSchema";
// import { success } from "zod";

const postRecipe = async (previousState, formData) => {
  const recipeName = formData.get("recipename");
  try {
    const response = await fetch("https://dummyjson.com/recipes/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: recipeName,
      }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    console.log(`Response status: ${response.status}`);
    return { success: true, message: "Opskriften blev oprettet. Hurra!!!!" };
  } catch (error) {
    if (error instanceof z.ZodEorror) {
      return { success: false, message: "Der er desværre sket en fejl. Prøv igen senere", fieldErros: {} };
    }
  }
};
export default postRecipe;
