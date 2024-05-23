import {useState} from "react";


export default function Recipe(
	{ recipe, recipes, setRecipes, shoppingList, setShoppingList }
) {
	const [editMode, setEditMode] = useState(false);
	const [name, setName] = useState(recipe.name);
	const [description, setDescription] = useState(recipe.description);
	const [ingredients, setIngredients] = useState(recipe.ingredients);

	const handleSave = () => {
		const updatedRecipe = {
			name,
			description,
			ingredients
		};

		const index = recipes.findIndex((el) => el.name === recipe.name);
		setRecipes([
			...recipes.slice(0, index),
			updatedRecipe,
			...recipes.slice(index + 1)
		]);
		setEditMode(false);
	};

	const handleIngredientChange = (index, value) => {
		const newIngredients = [...ingredients];
		newIngredients[index] = value;
		setIngredients(newIngredients);
	};

	const handleSendToShoppingList = () => {
		setShoppingList([...shoppingList, ...recipe.ingredients]);
	}

	if (!editMode) {
		return (
			<div>
				<button onClick={() => setEditMode(true)}>Edit</button>
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
				<button onClick={handleSave}>Save</button>
				<form>
					<label htmlFor="name">Name: </label>
					<input
						id="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<label htmlFor="description">Description: </label>
					<input
						id="description"
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					{ingredients.map((ingredient, index) => (
						<div key={index}>
							<label htmlFor={`ingredient-${index}`}>Ingredient: </label>
							<input
								id={`ingredient-${index}`}
								type="text"
								value={ingredient}
								onChange={(e) => handleIngredientChange(index, e.target.value)}
							/>
						</div>
					))}
				</form>
			</div>
		);
	}
}