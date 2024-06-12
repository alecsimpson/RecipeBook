import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Header/Navbar.jsx';
import {Outlet} from 'react-router-dom';
import {createContext} from "react";
import { v4 as uuid } from 'uuid';

export default function App() {

  const [recipes, setRecipes] = useState(
    [{
      id: uuid(),
      name: 'Test Recipe',
      description: 'Test description',
      ingredients: [
        {id: uuid(), name: 'ing1'},
        {id: uuid(), name: 'ing2'}
      ],
    },
      {
        id: uuid(),
        name: 'Test Recipe',
        description: 'Test description',
        ingredients: [
          {id: uuid(), name: 'ing1'},
          {id: uuid(), name: 'ing2'}
        ],
      },
      {
        id: uuid(),
        name: 'Test Recipe',
        description: 'Test description',
        ingredients: [
          {id: uuid(), name: 'ing1'},
          {id: uuid(), name: 'ing2'}
        ],
      },
      {
        id: uuid(),
        name: 'Test Recipe',
        description: 'Test description',
        ingredients: [
          {id: uuid(), name: 'ing1'},
          {id: uuid(), name: 'ing2'}
        ],
      }]
  )

  const [shoppingList, setShoppingList] = useState(
    [
      {id: uuid(), name: 'ingredient1'},
      {id: uuid(), name: 'ingredient2'},
      {id: uuid(), name: 'ingredient3'}
    ]
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




