import React from 'react';
import '../styles/plans.css';
import { useNavigate } from 'react-router-dom';

function Planos() {
    const planos = [
        { id: 1, nome: "Plano Básico", preco: "R$29,99/mês" },
        { id: 2, nome: "Plano Intermediário", preco: "R$59,99/mês" },
        { id: 3, nome: "Plano Avançado", preco: "R$99,99/mês" }
    ];

    const navigate = useNavigate();

    return (
        <div className="planos-container">
            {planos.map(plano => (
                <div key={plano.id} className="card">
                    <h3>{plano.nome}</h3>
                    <p>{plano.preco}</p>
                    <button onClick={() => navigate(`/contact/${plano.nome}`)}>Selecionar</button>
                </div>
            ))}
        </div>
    );
}

export default Planos;
