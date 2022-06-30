import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
    products:[],
    totalAmount:0
    },
    reducers:{
        addItem:(state,action)=>{
            const exits = state.products.find(prod=>prod.id === action.payload.id)
            if(exits){
                alert("increased the qty of this product in cart")
                state.products = state.products.map(prod=>prod.id === action.payload.id ? {...prod, qty:prod.qty+1 }:prod)
            }else{
                alert("product is added to the cart")
                const product = action.payload
                state.products = [...state.products,{...product,qty:1}]
                // state.products = state.products.push(action.payload)
            }

        },
        removeItemQty:(state,action)=>{
            const exits = state.products.find(prod=>prod.id === action.payload.id)
            if(exits.qty ===1){
                state.products = state.products.filter(prod=>prod.id !==exits.id)
            }else{
                state.products = state.products.map(prod=>prod.id === exits.id ? {...prod,qty:prod.qty-1}:prod)
            }
        },
        getTotoal:(state)=>{
          let {totalAmount} = state.products.reduce((cartTotal,cartItem)=>{
                let {qty,price} = cartItem;
                const prodTotal = qty*price;
                cartTotal.totalAmount += prodTotal
                return cartTotal
            },{totalAmount:0})
            state.totalAmount =totalAmount.toFixed(2)
        },
        removeItem:(state,action)=>{
            state.products = state.products.filter(prod=>prod.id!==action.payload.id)
        }
    }
})

export const {removeItemQty,getTotoal,addItem,removeItem} = cartSlice.actions 

export default cartSlice.reducer