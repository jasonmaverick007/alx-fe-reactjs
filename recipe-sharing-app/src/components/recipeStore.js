// src/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  // Add / set recipes
  addRecipe: (newRecipe) =>
    set((state) => {
      const newRecipes = [...state.recipes, newRecipe];
      // update recipes and filteredRecipes
      return {
        recipes: newRecipes,
        filteredRecipes: filterHelper(newRecipes, state.searchTerm)
      };
    }),
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: filterHelper(recipes, state.searchTerm)
    })),

  // Update
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const newRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: newRecipes,
        filteredRecipes: filterHelper(newRecipes, state.searchTerm)
      };
    }),

  // Delete
  deleteRecipe: (id) =>
    set((state) => {
      const newRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: newRecipes,
        filteredRecipes: filterHelper(newRecipes, state.searchTerm)
      };
    }),

  // Search term and filtering
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterHelper(state.recipes, term)
    })),

  // explicit filter action if needed
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: filterHelper(state.recipes, state.searchTerm)
    }))
}));

// Helper used inside the store to compute filtered results
function filterHelper(recipes, searchTerm) {
  const q = (searchTerm || '').trim().toLowerCase();
  if (!q) return recipes.slice(); // return a shallow copy

  return recipes.filter((r) => {
    // fields to match: title, description, ingredients (array or string), and optionally prepTime
    const title = (r.title || '').toLowerCase();
    const desc = (r.description || '').toLowerCase();

    let ingredientsText = '';
    if (Array.isArray(r.ingredients)) {
      ingredientsText = r.ingredients.join(' ').toLowerCase();
    } else {
      ingredientsText = (r.ingredients || '').toLowerCase();
    }

    const prep = r.prepTime !== undefined && r.prepTime !== null ? String(r.prepTime).toLowerCase() : '';

    return (
      title.includes(q) ||
      desc.includes(q) ||
      ingredientsText.includes(q) ||
      prep.includes(q)
    );
  });
}
