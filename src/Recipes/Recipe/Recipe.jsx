import {useState} from "react";
import RecipeForm from "../RecipeForm/RecipeForm.jsx";
import styles from "./Recipe.module.css";


export default function Recipe(
	{
		recipe,
		shoppingList,
		setShoppingList,
		editMode,
		setEditMode,
		setSelectedRecipe,
		handleDelete
	})
{

	const handleSendToShoppingList = () => {
		setShoppingList([...shoppingList, ...recipe.ingredients]);
	}

	if (!editMode) {
		return (
			<div className={styles.recipeContainer}>
				<h3>{recipe.name}</h3>
				<p>{recipe.description}</p>
				<ul>
					{recipe.ingredients.map((ingredient) => (
						<li key={ingredient.id}>{ingredient.name}</li>
					))}
				</ul>
				<div className={styles.buttonContainer}>
					<button type='button'
									onClick={() => {
										setEditMode(true)
										setSelectedRecipe(recipe)}}
					>Edit</button>
					<button type='button'
									onClick={() => handleDelete(recipe)}
					>Delete</button>
					<button onClick={handleSendToShoppingList}>To Shopping List</button>
				</div>
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