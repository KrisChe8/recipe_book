import { Recipe } from "@/types/recipe";
import api from "@/lib/api";
import { transformMealToRecipe } from "@/lib/transform";
import RecipeCard from "@/components/RecipeCard";

async function getFilteredRecipes(
  type: string,
  value: string
): Promise<Recipe[]> {
  const paramMap: Record<string, string> = {
    ingredient: "ingredient",
    country: "country",
    category: "category",
  };

  const queryParam = paramMap[type];
  if (!queryParam) return [];

  const res = await api.get(`/recipes?${queryParam}=${value}`);
  const meals = res.data.meals || [];
  return meals.map(transformMealToRecipe);
}

type PageProps = {
  params: { type: string; value: string };
};

export default async function FilteredPage(props: PageProps) {
  const { type, value } = props.params;
  const recipes = await getFilteredRecipes(type, value);

  const prettyType = type.charAt(0).toUpperCase() + type.slice(1);
  const prettyValue = decodeURIComponent(value);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Recipes with {prettyType}:{" "}
        <span className="text-blue-600">{prettyValue}</span>
      </h1>

      {recipes.length === 0 ? (
        <p>No recipes found for this filter.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </main>
  );
}
