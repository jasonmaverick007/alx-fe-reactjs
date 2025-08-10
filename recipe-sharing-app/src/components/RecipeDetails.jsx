import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeid }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipeid.id === recipeid)
    );


    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm/>
            <DeleteRecipeButton recipeid={recipe.id} onDelete={() => NavigationHistoryEntry('/')}/>
        </div>
    );
}

export default RecipeDetails