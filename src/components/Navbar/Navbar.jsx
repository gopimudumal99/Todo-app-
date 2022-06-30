import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"
function Navbar() {
  const data = useSelector((state)=>state.cart.products)

  return (
        <nav>
            <ul>
                <li><Link to="/">Logo GM</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart ({data?data.length:0})</Link></li>
            </ul>
        </nav>
  )
}

export default Navbar