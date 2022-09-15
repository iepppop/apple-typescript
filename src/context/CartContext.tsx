import { createContext, useContext, ReactNode } from 'react'
import storelist from '../data/item.json'

type ShoppingCartContext = { 

}

type ShoppingCartProvider = { 
    children: ReactNode;
}

export const CartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
    return useContext(CartContext)
}

export const ShoppingCartProvider = ({ children } : ShoppingCartProvider)  => {
    const data = storelist
    return(
        <CartContext.Provider value={{ data }}>
            {children}
        </CartContext.Provider>
    )
}