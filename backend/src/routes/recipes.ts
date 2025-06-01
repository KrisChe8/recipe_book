import express from "express";

import { getRecipes, getRecipeById } from "../services/recipeService";

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipeById);

export default router;
