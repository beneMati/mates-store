import React from "react";

const CartWidget = ({ quantity }) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href="/#">
                <i className="fas fa-shopping-cart">{quantity === 0 ? '' : quantity}</i>
            </a>
        </li>
    );
};

export default CartWidget;
