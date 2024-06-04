import {useOutletContext} from "react-router-dom";
import { v4 as uuid } from 'uuid';

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

	return (
		<div className="shoppingList">
			<h2>Shopping List</h2>
			<button onClick={() => setShoppingList([])}>Clear</button>
			<form onSubmit={handleAdd}>
				<label htmlFor="newIngredient">New Ingredient:</label>
				<input id="newIngredient" name="newIngredient" type="text"/>
				<button type="submit">Add</button>
			</form>
			<ul>
				{shoppingList.map((item) => {
					return (
						<li key={item.id}>
							{item.name}
							<button
								onClick={() => handleDelete(item)}
							>Delete</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}