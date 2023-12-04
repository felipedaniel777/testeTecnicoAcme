import React, { useState } from 'react';
import "./ProductPage.sass";

const ProductPage = ({ mainImage, smallImages }) => {
    const [selectedImage, setSelectedImage] = useState(mainImage);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="ProductPage">
            <div className="main-image">
                <img src={selectedImage} alt="Main Product" />
            </div>
            <div className="small-images">
                {smallImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Product ${index + 1}`}
                        className={`small-image ${selectedImage === image ? 'selected' : ''}`}
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
