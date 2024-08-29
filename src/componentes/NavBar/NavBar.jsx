import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <h1>Lamar UY</h1>

        <nav>
            <ul>
                <li>Registro</li>
                <li>Información</li>
                <li>Productos</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar