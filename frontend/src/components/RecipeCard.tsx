"use client";

import Link from "next/link";
import { Recipe } from "@/types/recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="block border p-4 rounded shadow hover:bg-gray-50 hover:text-black"
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className="h-40 w-full object-cover rounded mb-2"
      />
      <h2 className="text-xl text-center font-semibold">{recipe.name}</h2>
      <p className="text-sm text-gray-600">{recipe.category}</p>
    </Link>
  );
}
