import useConter from "../useConter";

const CardActions = (handleAdd, handleRemove, counter) => {
    return (
        <div className="product-cart-actions">
            <button onClick={() => handleRemove()}>-</button>
            <span>{counter}</span>
            <button onClick={() => handleAdd()}>+</button>
        </div>
    );
};

export default CardActions;
