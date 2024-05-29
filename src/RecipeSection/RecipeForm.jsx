import {Component} from "react";


export default function RecipeForm({ recipe, onSave, onCancel }){
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
		onSave({ name, description, ingredients });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
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
	)
}