import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Recipe from "../Recipe/Recipe.jsx";
import RecipeForm from "../RecipeForm/RecipeForm.jsx";
import { v4 as uuid } from 'uuid';
import { Button, Typography, Box, Card } from '@mui/material';

export default function RecipeList() {
	const { recipes, setRecipes } = useOutletContext();
	const { shoppingList, setShoppingList } = useOutletContext();
	const [editMode, setEditMode] = useState(false);
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	const newRecipe = () => {
		const newRecipe = {
			id: uuid(),
			name: 'New Recipe',
			description: '',
			ingredients: []
		};

		setEditMode(true);
		setRecipes([...recipes, newRecipe]);
		setSelectedRecipe(newRecipe);
	};

	const deleteRecipe = (recipe) => {
		setRecipes(recipes.filter(el => el.id !== recipe.id));
	};

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

	if (editMode) {
		return (
			<RecipeForm recipe={selectedRecipe} handleSave={handleSave} />
		);
	} else {
		return (
			<Box>
				<Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
					<Typography variant="h4">Recipes</Typography>
					<Button variant="contained" color="primary" onClick={newRecipe}>
						New Recipe
					</Button>
				</Box>
				<Box>
					{recipes.map((recipe) => (
						<Card key={recipe.id} sx={{ mb: 2 }}>
							<Recipe
								recipe={recipe}
								recipes={recipes}
								setRecipes={setRecipes}
								shoppingList={shoppingList}
								setShoppingList={setShoppingList}
								editMode={editMode}
								setEditMode={setEditMode}
								setSelectedRecipe={setSelectedRecipe}
								handleDelete={deleteRecipe}
							/>
						</Card>
					))}
				</Box>
			</Box>
		);
	}
}
