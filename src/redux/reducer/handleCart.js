const cart = []

export const hadleCart = (state=cart,action) => {
    const product = action.payload
    switch(action.type){
        case "ADDITEM":
            const exits = state.find((x)=>x.id === product.id)
            if(exits){
                //increase the qnty
                return state.map((x) =>
                x.id === product.id ? { ...x, qty: x.qty + 1 } : x
              );
            }else{
                alert("product added into the cart")
                const product = action.payload
                return [...state,{...product,qty:1}]
            }
        case "DELITEM":
            const exits1 = state.find((x)=>x.id === product.id)
            if(exits1.qty ===1){
                return state.filter((x)=>x.id !== exits1.id)
            }else{
                return state.map((x)=> x.id === product.id ? {...x, qty:x.qty-1}:x)
            }
      default:
            return state;
    }
}