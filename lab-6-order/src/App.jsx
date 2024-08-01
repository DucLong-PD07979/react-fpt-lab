import { useState, useEffect } from "react";
import pizzaData from "./pizza.json";
import Card from "./components/Card";
import { useProductContext } from "./context/productContext";
import CartItem from "./components/CartItem";

function App() {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    const { cartData, totalPrice } = useProductContext();

    useEffect(() => {
        setProducts(pizzaData);
        setCarts(cartData);
    }, [cartData, carts]);

    return (
        <div className="pizza-wrapper">
            <h2>Pizza order</h2>
            <div className="pizza-inner">
                <div className="pizza-product-list">
                    {products.map((item, index) => {
                        return <Card {...item} key={index + item.name} />;
                    })}
                </div>
                <div>
                    <h3>Carts</h3>
                    <div className="pizza-cart-list">
                        {carts.length > 0 &&
                            carts.map((item) => {
                                return (
                                    <CartItem
                                        {...item}
                                        key={item.id + item.name}
                                    />
                                );
                            })}
                        {!carts.length && "bạn chưa có sản phẩm trong giỏ hàng"}
                    </div>
                    <div>Total price: {totalPrice} </div>
                </div>
            </div>
        </div>
    );
}

export default App;
