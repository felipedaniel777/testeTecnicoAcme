import React, { useState } from 'react';
import { FaShoppingCart, FaRegUser, FaBars } from 'react-icons/fa';
import "./Header.sass";
import CartModal from '../CartModal';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    const openCartModal = () => {
        setIsCartModalOpen(true);
    };

    const closeCartModal = () => {
        setIsCartModalOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="logo">Logo Aqui</div>
            <input type="text" placeholder="Pesquisar produtos" className="search-bar" />
            <div className="icons">
                <div className="cart-icon" onClick={openCartModal}>
                    <FaShoppingCart />
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>
            <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />
        </div>
    );
};

export default Header;
