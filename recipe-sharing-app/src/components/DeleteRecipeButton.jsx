// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from '../recipeStore';

function DeleteRecipeButton({ recipeId, onDelete }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      if (onDelete) onDelete();
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: '10px', backgroundColor: 'red', color: 'white', padding: '8px', border: 'none', cursor: 'pointer' }}
    >
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;
