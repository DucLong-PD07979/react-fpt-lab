import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItemCart from "../components/card/CardItemCart";
import { addCartWithUser } from "../store/cartSlice/cartSlice";
import ButtonHistory from "../components/button/ButtonHistory";

const Order = () => {
    const [itemsCart, setItemsCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quanity, setQuanity] = useState(0);
    const [address, setAddress] = useState("");
    const [receiver, setReceiver] = useState("");

    const { isLoading: isCartLoading, addProductToggle } = useSelector(
        (state) => state.cartReducer
    );

    useEffect(() => {
        const cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
        setItemsCart(cart);
        const sumPrice = cart.reduce((init, cart) => {
            return (init += cart.totalPrice);
        }, 0);
        setTotalPrice(sumPrice);
        const sumQuanity = cart.reduce((init, cart) => {
            return (init += cart.quanity);
        }, 0);
        setQuanity(sumQuanity);
    }, [addProductToggle]);

    const dispatch = useDispatch();
    const handleSubmitOrder = () => {
        dispatch(
            addCartWithUser({
                id: 1,
                address,
                receiver,
                user_id: new Date(),
                totalPrice,
                totalQuantity: quanity,
                items: itemsCart,
            })
        );
    };

    if (isCartLoading) {
        return "loadding...";
    }

    return (
        <div className="order">
            <ButtonHistory />
            <div className="order-wrapper-page">
                <div className="order-cart-details">
                    <h2>Giỏi hàng của bạn</h2>
                    <div>
                        {itemsCart.length > 0 &&
                            itemsCart.map((cart) => {
                                return (
                                    <CardItemCart
                                        {...cart}
                                        key={cart.name + cart.id}
                                    />
                                );
                            })}
                    </div>
                </div>
                <div className="order-form-wrapper">
                    <h2>Thanh toán</h2>
                    <div className="input-form">
                        <label htmlFor="">receiver</label>
                        <input
                            type="text"
                            placeholder="Nguyễn Văn A"
                            onChange={(e) => setReceiver(e.target.value)}
                        />
                    </div>
                    <div className="input-form">
                        <label htmlFor="">Address</label>
                        <input
                            type="text"
                            placeholder="37 Lê Sao , hòa minh , liên chiểu , dn"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="label-text">Tông Số lượng: {quanity}</div>
                    <div className="label-text">
                        Tông tiền cần thanh toán : {totalPrice}đ
                    </div>
                    <button
                        className="btn-order-submint"
                        onClick={() => handleSubmitOrder()}
                    >
                        Thanh toán đơn hàng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;
