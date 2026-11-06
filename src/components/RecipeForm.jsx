"use client";
import postRecipe from "@/actions/action";
import { useActionState } from "react";

const RecipeForm = () => {
  const [state, postRecipeAction, isPending] = useActionState(postRecipe, {
    success: null,
    message: "",
  });
  return (
    <>
      <section className="flex flex-col justify-center p-40 ">
        <div>
          <form action={postRecipeAction}>
            <input type="text" name="recipename" placeholder="Opskriftens titel" className="border "
            defaultValue={} />
            <button type="submit" disabled={isPending} className="border ">
              {isPending ? "Opretter..." : "Opret opskrift"}
            </button>
          </form>
        </div>
        {state.message && <div className={state.success ? "text-green-700" : "text-red-700"}>{state.message}</div>}
      </section>
    </>
  );
};

export default RecipeForm;
