import { createContext, useContext, ReactNode, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  quantity: number;
};

type ShoppingCartContext = {
  increaseQuantity: (id: number) => void;
  items: CartItem[]
};

type ShoppingCartProvider = {
  children: ReactNode;
};

export const CartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(CartContext);
};

export const ShoppingCartProvider = ({ children }: ShoppingCartProvider) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const increaseQuantity = (id: number) => {
    return setItems((currItems) : any => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <CartContext.Provider value={{ increaseQuantity, items }}>
      {children}
    </CartContext.Provider>
  );
};
