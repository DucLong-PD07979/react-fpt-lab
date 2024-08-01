import { useProductContext } from "../context/productContext";
import { useEffect, useState } from "react";

const Card = ({ name, price, id, image, ingredients = [] }) => {
    const { handleAddToCart } = useProductContext();
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        setQuantity((prev) => {
            return (prev += 1);
        });
    };

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity((prev) => {
                return (prev -= 1);
            });
        }
    };

    const product = {
        name,
        price,
        id,
        image,
        ingredients,
        quantity,
    };

    return (
        <div className="product-card">
            <img src={image} alt={name + "image"} />
            <h3>{name}</h3>
            <p>{ingredients.join(",")}</p>
            <p>{price}</p>
            <div className="product-cart-actions">
                <button onClick={() => handleRemove()}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleAdd()}>+</button>
            </div>

            <button
                onClick={() => {
                    handleAddToCart(product);
                    setQuantity(0);
                }}
            >
                Add to cart
            </button>
        </div>
    );
};

export default Card;
