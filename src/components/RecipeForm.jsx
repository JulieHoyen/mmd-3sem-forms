"use client";
import postRecipe from "@/actions/action";
import { useActionState } from "react";
import { useState } from "react";

const RecipeForm = () => {
  const [state, postRecipeAction, isPending] = useActionState(postRecipe, {
    success: null,
    message: "",
    fieldErrors: {},
  });
  const [formFields, setFormFields] = useState({
    recipename: "",
    ingredients: "",
    servings: "",
    difficulty: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    const [selectedDifficulty, setSelectedDifficulty] = useState("");

    function handleChange(event) {
      const { name, value } = event.target;

      setFormFields((currentFields) => ({
        ...currentFields,
        [name]: value,
      }));
    }
  }

  return (
    <>
      <section className="min-h-screen bg-orange-100 px-4 py-12 sm:px-8">
        <article className="mx-auto max-w-2xl rounded-2xl border border-orange-200 bg-orange-50 p-6 shadow-sm sm:p-10">
          <form action={postRecipeAction} noValidate className="flex flex-col gap-6">
            <div>
              <label htmlFor="recipename" className="font-semibold gap-5 p-2 text-amber-700 ">
                Opskriftens titel
              </label>
              <input type="text" name="recipename" value={formFields.recipename} placeholder="Fx. Lagsange" onChange={handleChange} className="w-full rounded-lg border border-amber-300 bg-white px-4 py-3 text-amber-950 placeholder:text-orange-300 " />
              {state.fieldErrors?.recipename?.[0] && <p className="text-red-700 text-sm">{state.fieldErrors.recipename[0]}</p>}
            </div>

            <div>
              <label htmlFor="ingredients" className="font-semibold gap-5 p-2 text-amber-700">
                Ingredienser
              </label>
              <textarea type="text" name="ingredients" value={formFields.ingredients} placeholder="Fx. Hakket oksekød, flået tomater, pastapader" onChange={handleChange} row={4} className="w-full resize-y rounded-lg border border-amber-300 bg-white px-4 py-3 text-amber-950 placeholder:text-orange-300 " />
              {state.fieldErrors?.ingredients?.[0] && <p className="text-red-700 text-sm">{state.fieldErrors.ingredients[0]}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="servings" className="font-semibold text-amber-700">
                Antal portioner
              </label>
              <input type="number" name="servings" min="1" value={formFields.servings} placeholder="Fx. 4" onChange={handleChange} className="w-full rounded-lg border border-amber-300 bg-white px-4 py-3 text-amber-950 placeholder:text-orange-300 " />
              {state.fieldErrors?.servings?.[0] && <p className="text-red-700 text-sm">{state.fieldErrors.servings[0]}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="difficulty" className="font-semibold text-amber-700">
                Sværhedsgrad
              </label>

              <select type="number" name=" difficulty" value={formFields.difficulty} onChange={handleChange} className="w-full rounded-lg border border-amber-300 bg-white px-4 py-3 text-amber-700  placeholder:text-orange-300 ">
                <option value="">Vælg sværhedsgrad</option>
                <option value="Easy">Nem</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Svær</option>
              </select>

              {state.fieldErrors?.difficulty?.[0] && <p className="text-sm text-red-700">{state.fieldErrors.difficulty[0]}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="servings" className="font-semibold text-amber-700">
                Forberadnings tid
              </label>
              <input type="number" name="prepTimeMinutes" min="1" value={formFields.prepTimeMinutes} placeholder="Fx. 40" onChange={handleChange} className="w-60 rounded-lg border border-amber-300 bg-white px-4 py-3 text-amber-950 placeholder:text-orange-300" />
              {state.fieldErrors?.prepTimeMinutes?.[0] && <p className="text-red-700 text-sm">{state.fieldErrors.prepTimeMinutes[0]}</p>}
              <p className="px-4 py-3 text-amber-950 w-20">min</p>
            </div>

            <div>
              <button type="submit" disabled={isPending} className="flex justify-center  border rounded-lg text-amber-50 bg-amber-700 font-semibold p-3">
                {isPending ? "Opretter..." : "Opret opskrift"}
              </button>
              {state.message && <div className={state.success ? "text-lime-600" : "text-red-700 text-sm"}>{state.message}</div>}
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default RecipeForm;
