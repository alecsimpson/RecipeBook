import {useOutletContext} from "react-router-dom";
import { v4 as uuid } from 'uuid';
import styles from "./ShoppingList.module.css";
import {Button, TextField, Box, Typography, Paper, Divider} from '@mui/material';


export default function ShoppingList() {

	const {shoppingList, setShoppingList} = useOutletContext()

	function handleDelete(item) {
		const newShoppingList = shoppingList.filter(ing => item.id !== ing.id)
		setShoppingList(newShoppingList)
	}

	function handleAdd(e) {
		e.preventDefault();
		setShoppingList([...shoppingList, {id: uuid(), name: e.target[0].value}])
	}

	function handleIngredientClick(e) {
		e.target.classList.toggle(styles.checked)
	}

	shoppingList.forEach(item => console.log(item))

	return (
		<Box className={styles.shoppingList} display="flex" flexDirection="column" alignItems="center">
			<Typography variant="h2">Shopping List</Typography>
			<Box component="form" onSubmit={handleAdd} display="flex" flexDirection="column" alignItems="center" mb={2}>
				<TextField id="newIngredient" name="newIngredient" label="New Ingredient" variant="outlined" margin="normal" />
				<Button type="submit" variant="contained" color="primary" className="add btn">
					Add
				</Button>
			</Box>
			<Box className={styles.ingredientList} display="flex" flexDirection="column" alignItems="center" width="50%">
				{shoppingList.length > 0 ? (
					<>
						<Button variant="contained" color="secondary" className="clear btn" onClick={() => setShoppingList([])}>
							Clear
						</Button>
						<Divider />
					</>
				) : (
					<Typography variant="body1" mt={2}>
						Add some ingredients!
					</Typography>
				)}
				{shoppingList.map((item) => (
					<Paper
						key={item.id}
						className={`${styles.ingredient} ${item.checked ? styles.checked : ''}`}
						onClick={handleIngredientClick}
						elevation={3}
						sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: 1, marginY: 0.5 }}
					>
						<Typography variant="body1">{item.name}</Typography>
						<Button variant="outlined" color="secondary" onClick={(e) => { e.stopPropagation(); handleDelete(item); }}>
							Delete
						</Button>
					</Paper>
				))}
			</Box>
		</Box>
	)
}