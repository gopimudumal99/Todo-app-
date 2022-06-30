import React,{useEffect,memo} from 'react'
import "./Cart.css"
import {useSelector,useDispatch} from 'react-redux'
import {addItem,removeItemQty,getTotoal,removeItem} from "../../reduxToolKit/createSlice"
function Cart() {
  const {products,totalAmount} = useSelector((state)=>state.cart)

  const dispatch = useDispatch()
  
  useEffect(()=>{
      dispatch(getTotoal())
  },[products,dispatch])

  const handlebtnPlus = (product)=>{
    dispatch(addItem(product))
  }


  const handlebtnMinus = (product)=>{
    if (product.qty === 1) { 
      alert("product is removed from the cart")
  }
       dispatch(removeItemQty(product));
  }


  return products.length ===0 ? <h1 className='cart-empty'>Cart is Empty</h1> :(
    <div className='cart-cont'>
      {products.map((x)=>{
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
              <button  className="prod-plus buyBtn" onClick={() => dispatch(removeItem(x))}>
                  Remove</button>          
               </div>
            </div>
          </div>
        )
      })}

      <div className="cart-total">
        <h3>Total Price: <span>$ {totalAmount}</span></h3>
      </div>

    </div>
  )
}

export default memo(Cart)