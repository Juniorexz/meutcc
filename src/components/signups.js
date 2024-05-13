import React, { useState } from 'react';
import '../styles/signup.css';
import Logo from '../images/logo.png'

function Signup() {
    const [formData, setFormData] = useState({
        cnpj: '',
        nome: '',
        nomeFantasia: '',
        cpf: '',
        tipoLicitacao: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Dados do Formulário:', formData);
        // Adicione aqui a lógica para enviar dados ao servidor ou processá-los como necessário
    };

    return (
        <div className="signup-form">
            <div>
                <img src={Logo} />
            </div>
            <form onSubmit={handleSubmit}>
                <h2>Cadastro</h2>
                <label>CNPJ:</label>
                <input
                    type="text"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                />
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
                <label>Nome Fantasia:</label>
                <input
                    type="text"
                    name="nomeFantasia"
                    value={formData.nomeFantasia}
                    onChange={handleChange}
                />
                <label>CPF:</label>
                <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                />
                <label>Tipo de Licitação:</label>
                <select
                    name="tipoLicitacao"
                    value={formData.tipoLicitacao}
                    onChange={handleChange}
                >
                    <option value="">Selecione</option>
                    <option value="concorrência">Concorrência</option>
                    <option value="pregão">Pregão</option>
                    <option value="tomada de preços">Tomada de Preços</option>
                    <option value="convite">Convite</option>
                    <option value="leilão">Leilão</option>
                    <option value="consulta">Consulta</option>
                </select>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Signup;
