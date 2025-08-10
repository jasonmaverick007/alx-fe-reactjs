// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p style={{ margin: '6px 0' }}>{recipe.description}</p>
            {recipe.prepTime !== undefined && (
              <small>Prep time: {recipe.prepTime} mins</small>
            )}
            {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 && (
              <div style={{ marginTop: '8px' }}>
                <strong>Ingredients:</strong>{' '}
                {recipe.ingredients.slice(0, 5).join(', ')}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;
