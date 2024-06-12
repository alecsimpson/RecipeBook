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
		e.target.classList.toggle(styles.checked)
	}

	shoppingList.forEach(item => console.log(item))

	return (
		<div className={styles.shoppingList}>
			<h2>Shopping List</h2>
			<form onSubmit={handleAdd}>
				<label htmlFor="newIngredient">New Ingredient:</label>
				<input id="newIngredient" name="newIngredient" type="text"/>
				<button
					className="add btn"
					type="submit">Add</button>
			</form>
			<div className={styles.ingredientList}>
				{shoppingList.length > 0
					?
					<>
						<button
							className="clear btn"
							onClick={() => setShoppingList([])}>Clear
						</button>
						<hr/>
					</>
					:
					<>
						<p>Add some ingredients!</p>
					</>
				}
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