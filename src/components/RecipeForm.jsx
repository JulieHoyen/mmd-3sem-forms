"use client";
 
import { useActionState } from "react";
import postRecipe from "@/actions/action";
import { success } from "zod";

const RecipiForm = () => { 
  const [state, postRecipeAction, isPending] = useActionState(postRecipe, {

  success: null,
    message: "Ha! Som om det er en opskrift du kan sætte ind. Ved du hvad du kan? Du kan sæt dig på den! Idiot",
  });
}

const RecipeForm = () => {
  return (
    <form action={postRecipe}>
      <input type="text" name="recipename" placeholder="Opskriftens titel" className="border" />
      <button type="submit" className="border">
        Opret opskrift
      </button>
    </form>
  );
};

export default RecipeForm;
