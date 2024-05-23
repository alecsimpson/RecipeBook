import Recipe from "./Recipe.jsx";
import {useState} from "react";
import {useOutletContext} from "react-router-dom";


export default function RecipeList() {

	const {recipes, setRecipes} = useOutletContext();
	const {shoppingList, setShoppingList} = useOutletContext();

	return (
		<div className="recipe-list">
			<h2>Recipes</h2>
			<ul>
				{recipes.map((recipe) => (
					<li key={recipe.name}>
						<Recipe
							recipe={recipe}
							recipes={recipes}
							setRecipes={setRecipes}
							shoppingList={shoppingList}
							setShoppingList={setShoppingList}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}