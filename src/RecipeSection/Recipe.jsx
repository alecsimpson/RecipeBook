import {useState} from "react";
import RecipeForm from "./RecipeForm.jsx";


export default function Recipe(
	{
		recipe,
		shoppingList,
		setShoppingList,
		editMode,
		setEditMode,
		setSelectedRecipe
	})
{
	const [name, setName] = useState(recipe.name);
	const [description, setDescription] = useState(recipe.description);
	const [ingredients, setIngredients] = useState(recipe.ingredients);


	const handleSendToShoppingList = () => {
		setShoppingList([...shoppingList, ...recipe.ingredients]);
	}

	if (!editMode) {
		return (
			<div>
				<button onClick={() => {
					setEditMode(true)
					setSelectedRecipe(recipe)
				}}>Edit</button>
				<button	onClick={handleSendToShoppingList}>Send to Shopping List</button>
				<h3>{recipe.name}</h3>
				<p>{recipe.description}</p>
				<ul>
					{recipe.ingredients.map((ingredient) => (
						<li key={ingredient}>{ingredient}</li>
					))}
				</ul>
			</div>
		);
	} else {
		return (
			<div>
				<RecipeForm recipe={recipe} handleSave={handleSave}/>
			</div>
		);
	}
}