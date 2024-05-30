import {Component, useState} from "react";


export default function RecipeForm({ recipe, handleSave }){
	const [name, setName] = useState(recipe.name);
	const [description, setDescription] = useState(recipe.description);
	const [ingredients, setIngredients] = useState(recipe.ingredients);

	const handleIngredientChange = (index, value) => {
		const newIngredients = [...ingredients];
		newIngredients[index] = value;
		setIngredients(newIngredients);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSave({ name, description, ingredients });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<button type='submit'>Save</button>
				<button type='button' onClick={() => setIngredients([...ingredients, ""])}>Add Ingredient</button>
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
						<button type="button" onClick={() => {
							setIngredients([
								...ingredients.slice(0, index),
								...ingredients.slice(index + 1)
							])
						}}>Delete Ingredient</button>
					</div>
				))}
			</form>
		</div>
	)
}