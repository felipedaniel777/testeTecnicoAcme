import React, { useState } from 'react';
import "./ProductInfos.sass";
import Button from '../Button';

const ProductInfos = ({ title, code, price }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleBuy = () => {
        console.log(`Buying ${quantity} ${title}(s)`);
    };

    return (
        <div className="ProductInfos">
            <h1 className='title'>{title}</h1>
            <p className='code'>Código: 123789423</p>
            <p className="price">{`R$ ${price.toFixed(2)}`}</p>
            <div className="quantity-container">
                <button onClick={handleDecreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncreaseQuantity}>+</button>
            </div>
            <div className='buy-button'>
                <Button text="Comprar" primary />
            </div>
        </div>
    );
}

export default ProductInfos;
