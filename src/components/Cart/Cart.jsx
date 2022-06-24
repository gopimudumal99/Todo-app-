import React from 'react'
import "./Cart.css"
import {useSelector,useDispatch} from 'react-redux'
import { addCart, deleteCart } from '../../redux/actions/index.js'

function Cart() {
  const data = useSelector((state)=>state.hadleCart)

  const dispatch = useDispatch()
  
  const handlebtnPlus = (product)=>{
    dispatch(addCart(product))
  }


  const handlebtnMinus = (product)=>{
    if (product.qty === 1) { 
      alert("product is removed from the cart")
  }
       dispatch(deleteCart(product));
  }


  return (
    <div className='cart-cont'>
      {data.map((x)=>{
        return(
          <div key={x.id} className='prod-cart'>
            <div className="cart-img">
              <img src={x.image} alt={x.title} />
            </div>
            <div className="cart-body">
              <h3 className="cart-title">
                  {x.title}
              </h3>
              <p className="cart-price">
                   {x.qty} X ${x.price} = ${x.price * x.qty}
               </p>
               <div className="buttons">
              <button className="prod-minus buyBtn" onClick={() => handlebtnMinus(x)}>
                  -</button>
              <button  className="prod-plus buyBtn" onClick={() => handlebtnPlus(x)}>
                  +</button>        
               </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Cart