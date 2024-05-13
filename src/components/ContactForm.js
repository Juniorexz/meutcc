import React, { useState } from 'react';
import '../styles/contactForm.css';
import Image from '../images/logo.png';
import { useParams } from 'react-router-dom'

function ContactForm() {
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    let { planoNome } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    return (
        <div className='contact-area'>
            <img src={Image} />
            <h3>Plano {planoNome}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="whatsapp">WhatsApp:</label>
                    <input
                        type="text"
                        id="whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="Digite seu WhatsApp"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                        required
                    />
                </div>
                <button type="submit">Adquirir</button>
            </form>

            {showPopup && (
                <div className="popup">
                    <p>Entraremos em contato com o email: {email}</p>
                </div>
            )}
        </div>
    );
}

export default ContactForm;
