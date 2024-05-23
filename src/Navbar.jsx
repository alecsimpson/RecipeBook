import {Link} from "react-router-dom";


export default function Navbar() {

	return (
		<div className="navBar">
			<Link to="recipes">Recipes</Link> / <Link to="shoppingList">Shopping List</Link>
		</div>
	)
}