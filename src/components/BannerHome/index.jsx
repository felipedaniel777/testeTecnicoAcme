
import React, { useState } from 'react';
import "./BannerHome.sass";
import Button from '../Button';

const BannerHome = () => {
    const [currentImage, setCurrentImage] = useState(1);

    const handleNextImage = () => {
        setCurrentImage((prevImage) => (prevImage % 3) + 1);
    };

    const handlePrevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 2 + 3) % 3 + 1);
    };

    return (
        <div className="BannerHome">
            <div className="carousel">
                <img
                    src={`https://source.unsplash.com/random/1920x600?image=${currentImage}`}
                    alt="Banner"
                    className="banner-image"
                />
                <div className='buy-button-banner'>
                    <Button text="Comprar" primary />
                </div>
            </div>
            <button className="arrow left" onClick={handlePrevImage}>{'<'}</button>
            <button className="arrow right" onClick={handleNextImage}>{'>'}</button>
        </div>
    );
}

export default BannerHome;
