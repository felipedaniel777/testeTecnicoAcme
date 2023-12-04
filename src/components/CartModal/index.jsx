import React, { useState, useRef, useEffect } from 'react';
import './CartModal.sass';

const CartModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content" ref={modalRef}>
                <div className="rounded-modal">
                    <p>Carrinho Vazio</p>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
