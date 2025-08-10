// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available yet.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
