import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../store/productSlice/productSlice";
import Card from "../components/card/Card";
import NavigateFilter from "../components/navigaterFilter/NavigateFilter";
import { getCart } from "../store/cartSlice/cartSlice";
import CardItemCart from "../components/card/CardItemCart";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const { products, isLoading: isProducsLoading } = useSelector(
        (state) => state.productReducer
    );

    const { isLoading: isCartLoading, addProductToggle } = useSelector(
        (state) => state.cartReducer
    );

    const [itemsCart, setItemsCart] = useState([]);

    useEffect(() => {
        const cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
        setItemsCart(cart);
    }, [addProductToggle]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProduct());
    }, []);

    useEffect(() => {
        dispatch(getCart(1));
    }, []);

    const handleSwitchToOrderPage = () => {
        navigate("/order");
    };

    return (
        <div className="homepage-wrapper">
            <div className="homepage-inner">
                <div>
                    {products.length > 0 && <NavigateFilter />}
                    <div className="left">
                        {isProducsLoading && "...loading!"}
                        {products.length > 0 &&
                            products.map((product) => {
                                return (
                                    <Card
                                        {...product}
                                        key={product.id + product.name}
                                    />
                                );
                            })}
                    </div>
                </div>
                <div className="right">
                    <h2 className="right-title">Sản phẩm trong giỏ hàng</h2>
                    {!itemsCart.length && (
                        <div>Bạn chưa có sản phẩm trong giỏ hàng</div>
                    )}

                    {itemsCart.length > 0 &&
                        itemsCart.map((cart) => {
                            return (
                                <CardItemCart
                                    {...cart}
                                    key={cart.name + cart.id}
                                />
                            );
                        })}

                    {itemsCart.length > 0 && (
                        <div className="order-wrapper">
                            <button
                                className="btn-order-submint"
                                onClick={() => {
                                    handleSwitchToOrderPage();
                                }}
                            >
                                Đến trang thanh toán
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
