import { Recipe } from "@/types/recipe";

function extractIngredients(meal: any): string[] {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    // const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(ingredient.trim());
      // ingredients.push(
      //   measure ? `${measure.trim()} ${ingredient.trim()}` : ingredient.trim()
      // );
    }
  }

  return ingredients;
}

export function transformMealToRecipe(meal: any): Recipe {
  return {
    id: meal.idMeal,
    name: meal.strMeal,
    image: meal.strMealThumb,
    country: meal.strArea || "",
    instructions: meal.strInstructions || "",
    ingredients: extractIngredients(meal),
    category: meal.strCategory || "",
  };
}
