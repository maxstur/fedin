import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [itemCount, setItemCount] = React.useState(0);
    return (
        <CartContext.Provider value={{ itemCount, setItemCount }}>
            {children}</CartContext.Provider>)
}