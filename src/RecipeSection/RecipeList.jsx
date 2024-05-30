import Recipe from "./Recipe.jsx";
import {useState} from "react";
import {useOutletContext} from "react-router-dom";
import RecipeForm from "./RecipeForm.jsx";
import { v4 as uuid } from 'uuid';

export default function RecipeList() {

	const {recipes, setRecipes} = useOutletContext();
	const {shoppingList, setShoppingList} = useOutletContext();
	const [editMode, setEditMode] = useState(false);
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	const newRecipe = () => {
		const newRecipe = {
			id: uuid(),
			name: 'New Recipe',
			description: '',
			ingredients: []
		}

		setEditMode(true);
		setRecipes([...recipes, newRecipe]);
		setSelectedRecipe(newRecipe);
	}

 	const deleteRecipe = (recipe) => {
		const index = recipes.findIndex((el) => el.id === recipe.id);

	}

	const handleSave = (updatedRecipe) => {
		const index = recipes.findIndex((el) => el.id === selectedRecipe.id);
		const updatedRecipes = [
			...recipes.slice(0, index),
			updatedRecipe,
			...recipes.slice(index + 1)
		];

		setRecipes(updatedRecipes);
		setEditMode(false);
	};

	if(editMode) {
		return (
			<>
				<RecipeForm recipe={selectedRecipe} handleSave={handleSave} />
			</>
		)
	} else {
		return (
			<div className="recipe-list">
				<h2>Recipes</h2>

				<button onClick={newRecipe}>New Recipe</button>
				<ul>
					{recipes.map((recipe) => (
						<li key={recipe.name}>
							<Recipe
								recipe={recipe}
								recipes={recipes}
								setRecipes={setRecipes}
								shoppingList={shoppingList}
								setShoppingList={setShoppingList}
								editMode={editMode}
								setEditMode={setEditMode}
								setSelectedRecipe={setSelectedRecipe}
							/>
						</li>
					))}
				</ul>
			</div>
		)
	}
}