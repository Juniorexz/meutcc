import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png'

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Substitui o uso de useHistory

    const handleLogin = async (event) => {
        event.preventDefault();

        // Implemente a lógica de autenticação aqui
        const isAuth = true; // Suponha que a autenticação seja bem-sucedida

        if (isAuth) {
            navigate('/profile'); // Usa navigate no lugar de history.push
        } else {
            alert('Login falhou!');
        }
    };

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={Logo} alt="" />
            </div>
            <form onSubmit={handleLogin}>
                <label>Usuário:</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <label>Senha:</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
