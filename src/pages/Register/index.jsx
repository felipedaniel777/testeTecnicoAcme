import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import "./Register.sass";

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleForgotPassword = () => {
        navigate('/login');
    };

    const handleSignup = () => {
        if (!fullName || !email || !phone || !password || !confirmPassword) {
            setError('Preencha todos os campos.');
        } else if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
        } else {
            setError('');
            console.log("Cadastro bem-sucedido");

            const userData = {
                fullName,
                email,
                phone,
                password, 
            };

            localStorage.setItem('userData', JSON.stringify(userData));

            navigate('/login');
        }
    };


    return (
        <div className="Register-container">
            <h1>Cadastro</h1>
            <div className='inputs'>
                <InputText value={fullName} onChange={handleFullNameChange} placeholder="Nome Completo" />
                <InputText value={email} onChange={handleEmailChange} placeholder="Email" />
                <InputText value={phone} onChange={handlePhoneChange} placeholder="Telefone" />
                <InputText value={password} onChange={handlePasswordChange} type="password" placeholder="Senha" />
                <InputText value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" placeholder="Confirmar Senha" />
            </div>
            <p className="error-message">{error}</p>
            <div className='button-register'>
                <Button text="Cadastrar" primary onClick={handleSignup} />
            </div>
            <p className='text-sign'>Já possui uma conta?</p>
            <p className="signup" onClick={handleForgotPassword}>Entrar</p>
        </div>
    );
}

export default Register;
