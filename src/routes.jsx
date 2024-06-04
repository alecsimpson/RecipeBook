import RecipeList from "./RecipeSection/RecipeList/RecipeList.jsx";
import App from "./App.jsx";
import ShoppingList from "./ShoppingListSection/ShoppingList.jsx";


export const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: "/recipes",
				element: <RecipeList />
			},
			{
				path: "/shoppingList",
				element: <ShoppingList />
			}
		]
	}
]

