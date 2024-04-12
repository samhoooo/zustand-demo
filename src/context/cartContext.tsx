import React, {createContext, useState} from 'react';

type CartContextValues = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    deliveryCost: number;
    subTotal: number;
    payTotal: number;
}
export const CartContext = createContext<CartContextValues | null>(null);

type Props = {
    children: React.ReactNode
}

const DEFAULT_DELIVERY_COST = 4.99;
const PRODUCT_PRICE = 49.99;

export const CartContextProvider = ({children}: Props) => {
    const [count, setCount] = useState(0);
    const subTotal = Math.round(count * PRODUCT_PRICE * 100) / 100;
    const deliveryCost = subTotal > 200 ? 0 : DEFAULT_DELIVERY_COST;
    const payTotal = Math.round((subTotal + deliveryCost) * 100) / 100;

    return (
        <CartContext.Provider value={{count, setCount, payTotal, subTotal, deliveryCost}}>
            {children}
        </CartContext.Provider>
    );
}