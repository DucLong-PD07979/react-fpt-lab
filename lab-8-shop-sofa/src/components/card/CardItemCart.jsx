import { useDispatch } from "react-redux";
import { removeProductItem } from "../../store/cartSlice/cartSlice";

const CardItemCart = ({
    name,
    quanity,
    totalPrice,
    image,
    id,
    price_discount,
    price_old,
}) => {
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(
            removeProductItem({
                name,
                quanity,
                totalPrice,
                image,
                id,
                price_discount,
                price_old,
            })
        );
    };
    return (
        <div className="card-item-cart">
            <div>
                <img src={image} className="img-cart" alt={name + id} />
            </div>
            <div className="card-item-cart-box">
                <h3>{name}</h3>
                <p>Số lượng {quanity}</p>
                <p>Tông tiền {totalPrice}đ</p>
            </div>
            <button className="btn-x" onClick={() => handleRemove()}>
                x
            </button>
        </div>
    );
};

export default CardItemCart;
