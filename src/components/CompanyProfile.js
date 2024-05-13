import React, { useState } from 'react';
import '../styles/companyProfile.css'
import Logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
import { FaRegFilePdf } from "react-icons/fa";

function CompanyProfile() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [showItems, setShowItems] = useState(false); // Estado para controlar a exibição das características
    const navigate = useNavigate()
    const items = ["Educação", "Alimento", "Software"];

    const toggleItem = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(selected => selected !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    // Função para exibir as características selecionadas
    const handleDisplayItems = () => {
        setShowItems(true); // Ativa a exibição das características selecionadas
    };

    const goToPlanos = () => {
        navigate('/plans');
    };


    return (
        <div className="company-profile">
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={Logo} alt="Logo da Empresa" />
            </div>
            <div className="card">
                <h3>Selecione as características da empresa:</h3>
                <ul>
                    {items.map((item) => (
                        <li key={item}
                            onClick={() => toggleItem(item)}
                            className={selectedItems.includes(item) ? 'active' : ''}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <button onClick={handleDisplayItems}>Selecionar</button>
            </div>
            {showItems && (
                <div className="selected-items-display">
                    <h4>Licitação</h4>
                    <FaRegFilePdf size={52}/>
                    <button onClick={goToPlanos}>Ir para Planos</button> {/* Botão para redirecionar */}
                </div>
            )}
        </div>
    );
}

export default CompanyProfile;
