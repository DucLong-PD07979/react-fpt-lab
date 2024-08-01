import React from "react";

const CartItem = ({ name, ingredients = [], image, quantity, price }) => {
    return (
        <div className="cart-item">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{ingredients.join(",")}</p>
                <p>price: {price}</p>
                <p>Số lượng: {quantity}</p>
            </div>
        </div>
    );
};

export default CartItem;
