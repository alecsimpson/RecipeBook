import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, TextField, Box, IconButton, } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

export default function RecipeForm({ recipe, handleSave }) {
	const [name, setName] = useState(recipe.name);
	const [description, setDescription] = useState(recipe.description);
	const [ingredients, setIngredients] = useState(recipe.ingredients);

	const handleIngredientChange = (index, value) => {
		const newIngredients = [...ingredients];
		newIngredients[index] = { ...ingredients[index], name: value };
		setIngredients(newIngredients);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSave({ id: recipe.id, name, description, ingredients });
	};

	return (
		<Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
			<Button type="submit" variant="contained" color="primary">
				Save
			</Button>
			<Button
				type="button"
				variant="contained"
				color="secondary"
				startIcon={<Add />}
				onClick={() => setIngredients([...ingredients, { id: uuid(), name: "" }])}
			>
				Add Ingredient
			</Button>
			<TextField
				id="name"
				label="Name"
				variant="outlined"
				value={name}
				onChange={(e) => setName(e.target.value)}
				fullWidth
			/>
			<TextField
				id="description"
				label="Description"
				variant="outlined"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				fullWidth
			/>
			{ingredients.map((ingredient, index) => (
				<Box key={index} display="flex" alignItems="center" gap={2}>
					<TextField
						id={`ingredient-${index}`}
						label={`Ingredient ${index + 1}`}
						variant="outlined"
						value={ingredient.name}
						onChange={(e) => handleIngredientChange(index, e.target.value)}
						fullWidth
					/>
					<IconButton
						color="error"
						onClick={() => setIngredients(ingredients.filter(ing => ing.id !== ingredient.id))}
					>
						<Delete />
					</IconButton>
				</Box>
			))}
		</Box>
	);
}
