import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total,prd) => total = total + prd.price,0)

    let shipping = 0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }
    const tax = (total/10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <h2>Items Ordered : {cart.length}</h2>
            <h4>Product Price : ${formatNumber(total)}</h4>
            <p><small>Shipping cost : ${shipping}</small></p>
            <p><small>Tax + VAT : ${tax}</small></p>
            <p>Tatal Price : ${grandTotal}</p>
        </div>
    );
};

export default Cart;