import {useState} from "react";
import {useOutletContext} from "react-router-dom";


export default function ShoppingList() {

	const {shoppingList, setShoppingList} = useOutletContext()

	return (
		<div className="shoppingList">
			<h2>Shopping List</h2>
			<button onClick={() => setShoppingList([])}>Clear</button>
			<ul>
				{shoppingList.map((item) => {
					return <li key={item}>{item}</li>
				})}
			</ul>
		</div>
	)
}