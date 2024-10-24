import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import './LoginForm.scss';

const LoginForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            onLogin();
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <Input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <Input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit">Iniciar Sesión</Button>
        </form>
    );
};

export default LoginForm;
