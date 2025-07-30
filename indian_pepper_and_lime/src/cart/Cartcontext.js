import { createContext, useContext, useEffect, useState } from "react";

const CartContext=createContext()
export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState([])
    const addToCart=(items)=>{
        setCartItems([...cartItems,items])
    }
    useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
    const removeFromCart=(items)=>{
        setCartItems(cartItems.filter((apple)=>apple!==items))
    }
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const UseCart=()=>{
    return useContext(CartContext)
}