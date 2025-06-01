import { Recipe } from "@/types/recipe";
import api from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";
import { transformMealToRecipe } from "@/lib/transform";

async function getRecipes(): Promise<Recipe[]> {
  const res = await api.get("/recipes");
  const meals = res.data.meals || [];
  return meals.map(transformMealToRecipe);
}

export default async function Home() {
  const recipes = await getRecipes();
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
