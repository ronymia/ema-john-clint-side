import React from 'react';
import './Cart.css';

export default function Cart({ cart }) {
    // console.log(cart);

    let total = 0;
    let shipping = 0;

    cart.forEach((product) => {
        total += product.price * product.quantity;
        shipping += product.shipping;
    });

    const text = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(text);

    return (
        <div className="cart">
            <h1>Order Summary</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${text}</p>
            <h2>Grand Total: ${grandTotal}</h2>
        </div>
    );
}