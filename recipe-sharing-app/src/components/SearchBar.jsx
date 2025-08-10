// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <div style={{ margin: '16px 0' }}>
      <input
        type="text"
        placeholder="Search recipes by name, ingredient, or prep time..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '8px',
          width: '100%',
          maxWidth: '480px',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
};

export default SearchBar;
