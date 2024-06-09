import {useState} from "react";
import { v4 as uuid } from 'uuid';


export default function RecipeForm({ recipe, handleSave }){
	const [name, setName] = useState(recipe.name);
	const [description, setDescription] = useState(recipe.description);
	const [ingredients, setIngredients] = useState(recipe.ingredients);



	const handleIngredientChange = (index, value) => {
		const newIngredients = [...ingredients];
		newIngredients[index] = {...ingredients[index], name: value};
		setIngredients(newIngredients);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSave({ id: recipe.id, name, description, ingredients });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<button type='submit'>Save</button>
				<button type='button' onClick={() => setIngredients([...ingredients, {id: uuid(), name: ""}])}>Add Ingredient</button>
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
							value={ingredient.name}
							onChange={(e) => handleIngredientChange(index, e.target.value)}
						/>
						<button type="button" onClick={() => {
							setIngredients(
								ingredients.filter(ing => ing.id !== ingredient.id)
							)
						}}>Delete Ingredient</button>
					</div>
				))}
			</form>
		</div>
	)
}