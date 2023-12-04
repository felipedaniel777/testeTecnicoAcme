import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import "./Login.sass";

const Login = () => {
    const [inputValue, setInputValue] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleForgotPassword = () => {
        console.log("Forgot Password");
    };

    const handleSignup = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (inputValue && password && storedUserData) {
            if (inputValue === storedUserData.email && password === storedUserData.password) {
                console.log("Login bem-sucedido!");
                navigate('/');
            } else {
                alert("Credenciais inválidas. Por favor, verifique e tente novamente.");
            }
        } else {
            alert("Por favor, preencha os campos de e-mail e senha.");
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className='inputs'>
                <InputText value={inputValue} onChange={handleChange} placeholder="E-mail" />
                <InputText value={password} onChange={handlePasswordChange} type="password" placeholder="Senha" />
            </div>
            <p className="forgot-password" onClick={handleForgotPassword}>Esqueci minha senha</p>
            <Button text="Acessar" primary onClick={handleLogin} />
            <p className='text-sign'>Não possui uma conta?</p>
            <p className="signup" onClick={handleSignup}>Cadastre-se!</p>
        </div>
    );
}

export default Login;
