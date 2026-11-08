"use client";
import postRecipe from "@/actions/action";
import { useActionState } from "react";
import { useState } from "react";

const RecipeForm = () => {
  const [state, postRecipeAction, isPending] = useActionState(postRecipe, {
    success: null,
    message: "",
  });
  const [formFields, setFormFields] = useState({ recipename: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }));
  }

  return (
    <>
      <section className="flex flex-col justify-center p-40 ">
        <div>
          <form action={postRecipeAction}>
            <input type="text" name="recipename" value={formFields.recipename} placeholder="Opskriftens titel" className="border" onChange={handleChange} />

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
