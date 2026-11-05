"use server";
const postRecipe = async (formData) => {
  const recipeName = formData.get("recipename");

fetch('https://dummyjson.com/recipes/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: recipeName, 
  
  })
})
.then(res => res.json())
.then(console.log);




};
export default postRecipe;
