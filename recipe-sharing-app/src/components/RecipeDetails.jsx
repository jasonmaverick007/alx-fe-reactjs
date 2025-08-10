import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipeId.id === recipeId)
    );


    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm/>
            <DeleteRecipeButton recipeId={recipe.Id} onDelete={() => NavigationHistoryEntry('/')}/>
        </div>
    );
}

export default RecipeDetails