import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "../Card/Card.sass";

const Card = ({ image, productName, price, installments, onClick }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState();
    const navigate = useNavigate();

    const toggleFavorite = (event) => {
        event.stopPropagation();

        if (isUserLoggedIn) {
            setIsFavorite(!isFavorite);
        } else {
            alert("Você precisa estar logado para adicionar aos favoritos. Faça login para continuar.");

            const loginButton = window.confirm("Deseja fazer login agora?");

            if (loginButton) {
                navigate('/login');
            }
        }
    };

    return (
        <div className="Card" onClick={onClick}>
            <div className={`favorite-icon ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite}>
                <FaHeart />
            </div>
            <img src={image} alt={productName} className="product-image" />
            <div className="product-details">
                <div className="product-name">{productName}</div>
                <div className="product-price">{`R$ ${price.toFixed(2)}`}</div>
                <div className="installments">{`Em até ${installments}x de R$ ${(price / installments).toFixed(2)}`}</div>
            </div>
        </div>
    );
}

export default Card;
