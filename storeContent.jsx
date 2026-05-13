import { createContext, useState } from "react";
import React from "react";
export const StoreContent = createContext();
export const StoreProvider = ({children}) => {
    const [products] = useState([
        {id: 1,title: "Product 1",price: 10.99,Image: "https://picsum.photos/150/150?random=1"},
        {id: 2,title: "Product 2",price: 19.99,Image: "https://picsum.photos/150/150?random=2"},
        {id: 3,title: "Product 3",price: 5.99,Image: "https://picsum.photos/150/150?random=3"},
        ]);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return(
        <StoreContent.Provider value={{products, cart, addToCart, totalPrice}}>
            {children}
        </StoreContent.Provider>
    );
};