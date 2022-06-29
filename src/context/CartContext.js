import React, { useState, createContext } from "react";


export const CartContext = createContext();


// // creo un componente que le pueda proveer a todos sus hijos
export const CartProvider = ({ children }) => {

    const arr = [];

    const [cart, setCart] = useState([])


    const addItem = (value) => {
        // arr.push(value)
        setCart([...cart, value])
    }

    const checkItem = (params) => {
        return cart
    }

    const removeItem = (itemId) => {

    }

    const isInCart = (id) => {

    }

    const countItems = () => {
        return cart.length;
    }



    return <CartContext.Provider value={{ cart, addItem, checkItem, countItems }}>{children}</CartContext.Provider>
}


// function CustomContext({children}){

//     let arr = [];

//     function addItem(value){
//         arr.push(value)
//     }

//     function checkItem(params){
//         return arr
//     }

//     return (
//         <CartContext.Provider value={{addItem,checkItem,countItem}}>
//             {children}
//         </CartContext.Provider>
//     )

// // }

//export {CartProvider};
 //export default CartContext;
