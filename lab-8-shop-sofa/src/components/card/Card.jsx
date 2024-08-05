import { useDispatch } from "react-redux";
import { addProductToCartLocal } from "../../store/cartSlice/cartSlice";

const Card = ({ name, price_old, price_discount, image, id }) => {
    const dispatch = useDispatch();
    const handleAddProductToCart = () => {
        dispatch(
            addProductToCartLocal({
                name,
                price_old,
                price_discount,
                image,
                id,
            })
        );
    };
    return (
        <div className="card-wrapper">
            <div className="card-img">
                <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <div className="card-box-price">
                <span>Gía mới: {price_discount}đ</span>
                <span>Gía cũ: {price_old}đ</span>
            </div>
            <button onClick={() => handleAddProductToCart()}>Add to card</button>
        </div>
    );
};

export default Card;
