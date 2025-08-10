// src/recipeStore.js
import { create } from "zustand";

// Helper function for filtering recipes
const filterHelper = (recipes, term) => {
  const lowerTerm = term.toLowerCase();
  return recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(lowerTerm) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(lowerTerm)
      )
  );
};

const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: "",

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterHelper(updatedRecipes, state.searchTerm),
      };
    }),

  // Update an existing recipe by ID
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterHelper(updatedRecipes, state.searchTerm),
      };
    }),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterHelper(updatedRecipes, state.searchTerm),
      };
    }),

  // Update only the prep time of a recipe
  updatePrepTime: (id, newTime) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, prepTime: newTime } : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterHelper(updatedRecipes, state.searchTerm),
      };
    }),

  // Search recipes by term
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterHelper(state.recipes, term),
    })),

  // Reset all recipes
  resetRecipes: () => set({ recipes: [], filteredRecipes: [], searchTerm: "" }),
}));

export default useRecipeStore;
