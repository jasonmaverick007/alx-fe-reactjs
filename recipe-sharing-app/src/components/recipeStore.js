import create from 'zustand'

const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({
        recipes: [...state.recipes, newRecipe]})),
    deleteRecipe: (Id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.Id !== Id),
        })),
    updateRecipe: (updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
            recipe.Id === updatedRecipe.id ? updatedRecipe : recipe),
        })),
    setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;