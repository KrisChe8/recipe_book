import axios from "axios";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const baseURL = process.env.MEALDB_BASE_URL;

export const getRecipes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { ingredient, country, category } = req.query;

  // All Available Recipes
  let url = `${baseURL}/search.php?s=`;

  // filtering
  if (ingredient) {
    url = `${baseURL}/filter.php?i=${ingredient}`;
  }
  if (country) {
    url = `${baseURL}/filter.php?a=${country}`;
  }
  if (category) {
    url = `${baseURL}/filter.php?c=${category}`;
  }

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    console.log(err, "Failed to fetch recipes");
    next({ status: 500, message: "Failed to fetch recipes" });
  }
};

export const getRecipeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`${baseURL}/lookup.php?i=${id}`);
    res.json(response.data);
  } catch (err) {
    next({ status: 500, message: "Failed to fetch recipe by id info" });
  }
};
