import { Recipe } from "@/types/recipe";
import api from "@/lib/api";
import { transformMealToRecipe } from "@/lib/transform";
import Link from "next/link";

// fetching by ID
async function getRecipeById(id: string): Promise<Recipe | null> {
  const res = await api.get(`/recipes/${id}`);
  const meal = res.data.meals?.[0];
  return meal ? transformMealToRecipe(meal) : null;
}
// fetching by category
async function getCategoryRecipes(
  category: string,
  currentId: string
): Promise<Recipe[]> {
  const res = await api.get(`/recipes?category=${category}`);
  const meals = res.data.meals || [];

  return meals
    .filter((meal: any) => meal.idMeal !== currentId)
    .map(transformMealToRecipe);
}
type PageProps = {
  params: {
    id: string;
  };
};

export default async function RecipeInfoPage(props: PageProps) {
  const params = await props.params;
  const recipe = await getRecipeById(params.id);

  if (!recipe) return <p>Recipe not found</p>;

  const categoryRecipes = await getCategoryRecipes(recipe.category, recipe.id);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* LEFT: Image + Info */}
      <div className="md:w-2/3 ">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="rounded w-full h-80 object-cover mb-4 max-w-2xl"
        />
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold mb-1">{recipe.name}</h1>

          <p className="text-sm text-gray-600 mb-4">
            Country:
            <Link
              href={`/filter/country/${recipe.country}`}
              className="ml-2 text-blue-600 hover:underline"
            >
              {recipe.country}
            </Link>
          </p>

          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p className="mb-6 max-w-2xl">{recipe.instructions}</p>

          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
            {recipe.ingredients.map((ing, idx) => (
              <Link
                key={idx}
                href={`/filter/ingredient/${ing}`}
                className="bg-gray-200 text-black text-sm px-3 py-1 rounded hover:bg-gray-300"
              >
                {ing}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Sidebar (category recipes) */}
      <aside className="md:w-1/3 border-l pl-4">
        <h2 className="text-xl font-semibold mb-4">
          More in {recipe.category}
        </h2>
        <ul className="space-y-3">
          {categoryRecipes.map((r) => (
            <li key={r.id}>
              <Link
                href={`/recipe/${r.id}`}
                className="block hover:text-blue-600 underline"
              >
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
