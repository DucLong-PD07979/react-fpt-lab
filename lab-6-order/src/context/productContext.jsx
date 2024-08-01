import { createContext, useContext, useEffect, useState } from "react";

const Product = createContext({});

const ProductContextProvider = ({ children }) => {
    const [cartData, setCartData] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartData));
        const total = cartData.reduce((init, item, i) => {
            return (init = item.quantity * item.price + init);
        }, 0);
        setTotalPrice(total);
    }, [cartData]);

    const handleAddToCart = (product) => {
        const existingProductIndex = cartData.find(
            (item) => item.id === product.id
        );

        if (existingProductIndex) {
            const updatedCartData = [...cartData];
            existingProductIndex.quantity =
                existingProductIndex.quantity + product.quantity;
            setCartData(updatedCartData);
        } else {
            setCartData([
                ...cartData,
                { ...product, quantity: product.quantity },
            ]);
        }
    };

    return (
        <Product.Provider value={{ cartData, handleAddToCart, totalPrice }}>
            {children}
        </Product.Provider>
    );
};

const useProductContext = () => {
    return useContext(Product);
};
// eslint-disable-next-line react-refresh/only-export-components
export { ProductContextProvider, useProductContext };
