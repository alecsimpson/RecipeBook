import {useOutletContext} from "react-router-dom";
import { v4 as uuid } from 'uuid';
import styles from "./ShoppingList.module.css";

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
		console.log(e)
		e.target.classList.toggle(styles.checked)
	}

	return (
		<div className="shoppingList">
			<h2>Shopping List</h2>
			<button onClick={() => setShoppingList([])}>Clear</button>
			<form onSubmit={handleAdd}>
				<label htmlFor="newIngredient">New Ingredient:</label>
				<input id="newIngredient" name="newIngredient" type="text"/>
				<button type="submit">Add</button>
			</form>
			<div className={styles.ingredientList}>
				{shoppingList.map((item) => {
					return (
						<div key={item.id}
								 className={styles.ingredient}
								 onClick={handleIngredientClick}
						>
							{item.name}
							<button
								onClick={() => handleDelete(item)}
							>Delete
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}