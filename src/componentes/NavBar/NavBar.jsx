import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <h1>Lamar UY</h1>

        <nav>
            <ul>
                <li>
                  <NavLink to={"/"}> Home </NavLink>
                </li>
                <li>
                  <NavLink to={"/categoria/pantalonshort"}> Pantalon/Short </NavLink>
                </li>
                <li>
                  <NavLink to={"/categoria/remera"}> Remera </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar