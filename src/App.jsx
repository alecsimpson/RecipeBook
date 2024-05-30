import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx';
import {Outlet} from 'react-router-dom';
import {createContext} from "react";
import { v4 as uuid } from 'uuid';

export default function App() {

  const [recipes, setRecipes] = useState(
    [{
      id: uuid(),
      name: 'Test Recipe',
      description: 'Test description',
      ingredients: ['ing1', 'ing2', 'ing3']
    }])
  const [shoppingList, setShoppingList] = useState(
    ['item1', 'item2', 'item3', 'item4']
  )


  const context = {
    recipes,
    setRecipes,
    shoppingList,
    setShoppingList
  }

  return (
    <div className='app-container'>
      <Navbar />
      <Outlet
        context={context} />
    </div>
  )
}




