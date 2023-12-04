
import React from 'react';
import "./Footer.sass";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contato</h3>
                    <p>Email: contato@example.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                </div>
                <div className="footer-section">
                    <h3>Redes Sociais</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
                <div className="footer-section">
                    <h3>Endereço</h3>
                    <p>Rua Exemplo, 123</p>
                    <p>Cidade - Estado</p>
                    <p>CEP: 12345-678</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Loja Online</p>
            </div>
        </div>
    );
}

export default Footer;
