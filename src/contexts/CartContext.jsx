import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()


const CartProvider  = ({children}) => {
    const [cart, setCart] = useState([])


    const addToCart = (product, id)=> {
        const newItem = { ...product, amount: 1 }
        const cartItem = cart.find(item => {
            return item.id === id
        })
        if(cartItem) {
            const newCart = [ ...cart ].map(item=> {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem]) 
        }
        // console.log(`${product.title}Added to cart`)
    }

    const removeItemFromCart = (id) => {
        const newCart = cart.filter(item => {
            return (
                item.id !== id
            )
        })
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItemFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
