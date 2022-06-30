import React,{memo} from 'react'
import {BsCartCheckFill} from 'react-icons/bs'
import{BiStoreAlt} from'react-icons/bi'
import {GiCondorEmblem} from 'react-icons/gi'



import "./Navbar.css"
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"
function Navbar() {
  const data = useSelector((state)=>state.cart.products)

  return (
        <nav>
            <ul>
                <li title='Home'><Link to="/">G<GiCondorEmblem/>M</Link></li>
                <li title="Products"><Link to="/products"><BiStoreAlt/></Link></li>
                <li title='cart'><Link to="/cart"><BsCartCheckFill/><span className='cart-logo'>{data?data.length:0}</span></Link></li>
            </ul>
        </nav>
  )
}

export default memo(Navbar)