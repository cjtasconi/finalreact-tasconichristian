import React from 'react'
import cartLogo from '../../src/carrito.png'

const CartWidget = () => {
    
    return (
        <div className="cart-logo">
            <img src={cartLogo} alt="Cart Logo"/>
        </div>
    );
}

export default CartWidget;
