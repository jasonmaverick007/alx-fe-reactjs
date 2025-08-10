// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
