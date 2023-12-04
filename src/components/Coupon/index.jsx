
import React from 'react';
import "./Coupon.sass";
import Button from '../Button';

const Coupon = () => {
    return (
        <div className="Coupon">
            <p className="coupon-text">Use nosso cupom</p>
            <Button text="Copiar cupom" secondary />
        </div>
    );
}

export default Coupon;
