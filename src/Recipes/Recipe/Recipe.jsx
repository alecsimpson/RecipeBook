import RecipeForm from "../RecipeForm/RecipeForm.jsx";
import { Card, CardContent, Typography, Button, List, ListItem, Box } from '@mui/material';

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
	};

	if (!editMode) {
		return (
			<Card>
				<CardContent>
					<Typography variant="h5">{recipe.name}</Typography>
					<Typography variant="body2" color="textSecondary" paragraph>
						{recipe.description}
					</Typography>
					<List>
						{recipe.ingredients.map((ingredient) => (
							<ListItem key={ingredient.id}>
								<Typography variant="body1">{ingredient.name}</Typography>
							</ListItem>
						))}
					</List>
					<Box
						display="flex"
						justifyContent="flex-end"
						gap="2%"
						mt={2}>
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								setEditMode(true);
								setSelectedRecipe(recipe);
							}}
						>
							Edit
						</Button>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => handleDelete(recipe)}
						>
							Delete
						</Button>
						<Button
							variant="contained"
							onClick={handleSendToShoppingList}
						>
							To Shopping List
						</Button>
					</Box>
				</CardContent>
			</Card>
		);
	} else {
		return (
			<div>
				<RecipeForm recipe={recipe} handleSave={handleSave}/>
			</div>
		);
	}
}