import React, { useState } from 'react';
import "./ProductList.sass";
import { useNavigate } from 'react-router-dom';
import Card from '../Card';
import Button from '../Button';

const ProductList = ({ cardCount }) => {
    const dummyData = [
        {
            id: 1,
            image: 'https://picsum.photos/200',
            productName: 'Produto 1',
            price: 50.00,
            installments: 5,
            isFavorite: false,
        },
        {
            id: 2,
            image: 'https://picsum.photos/200',
            productName: 'Produto 2',
            price: 75.00,
            installments: 2,
            isFavorite: false,
        },
        {
            id: 3,
            image: 'https://picsum.photos/200',
            productName: 'Produto 2',
            price: 75.00,
            installments: 2,
            isFavorite: false,
        },
        {
            id: 4,
            image: 'https://picsum.photos/200',
            productName: 'Produto 2',
            price: 75.00,
            installments: 2,
            isFavorite: false,
        },
        {
            id: 5,
            image: 'https://picsum.photos/200',
            productName: 'Produto 2',
            price: 75.00,
            installments: 2,
            isFavorite: false,
        },
        {
            id: 6,
            image: 'https://picsum.photos/200',
            productName: 'Produto 2',
            price: 75.00,
            installments: 2,
            isFavorite: false,
        },
        {
            id: 7,
            image: 'https://picsum.photos/200',
            productName: 'Produto 2',
            price: 75.00,
            installments: 2,
            isFavorite: false,
        },
        {
            id: 8,
            image: 'https://picsum.photos/200',
            productName: 'Produto 2',
            price: 75.00,
            installments: 2,
            isFavorite: false,
        },
    ];

    const [showFavorites, setShowFavorites] = useState(false);
    const navigate = useNavigate();

    const toggleFavorites = () => {
        setShowFavorites(!showFavorites);
    };

    const filteredData = showFavorites ? dummyData.filter(item => item.isFavorite) : dummyData;

    const handleCardClick = () => {
        navigate('/product');
    };

    return (
        <>
            <div className="ProductListButton">
                <Button text="Filtrar favoritos" secondary onClick={toggleFavorites} active={showFavorites} />
            </div>
            <div className="ProductList">
                {filteredData.slice(0, cardCount).map((item) => (
                    <Card
                        key={item.id}
                        image={item.image}
                        productName={item.productName}
                        price={item.price}
                        installments={item.installments}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
        </>
    );
}

export default ProductList;