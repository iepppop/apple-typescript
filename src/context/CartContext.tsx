import { createContext, useContext, ReactNode } from 'react'

type ShoppingCartContext = { 
    increaseQuantity: (id: number) => void;
}

type ShoppingCartProvider = { 
    children: ReactNode;
}

export const CartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
    return useContext(CartContext)
}

export const ShoppingCartProvider = ({ children } : ShoppingCartProvider)  => {
    // const [ items, setItems ] = useState[]
    
    const increaseQuantity = (id:number) => {

    }
    
    return(
        <CartContext.Provider value={{ increaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}