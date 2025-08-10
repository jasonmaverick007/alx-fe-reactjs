// src/components/DeleteRecipeButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { useRecipeStore } from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // ✅ Redirect after deletion
  };

  return (
    <button onClick={handleDelete} style={{ background: "red", color: "white" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
