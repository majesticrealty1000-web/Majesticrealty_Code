import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppPopup.css';

const WhatsAppPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: ''
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('hasSeenWhatsAppPopup');
            if (!hasSeenPopup) {
                setIsVisible(true);
            }
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenWhatsAppPopup', 'true');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = '918459137310';
        const message = `*Quick Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
        handleClose();
    };

    if (!isVisible) return null;

    return (
        <div className="whatsapp-popup-overlay">
            <div className="whatsapp-popup-container">
                <button className="close-btn" onClick={handleClose}>
                    <IoClose />
                </button>

                <h2 className="popup-title">Quick Inquiry</h2>
                <p className="popup-subtitle">Get a quick quote or consultation via WhatsApp</p>

                <form onSubmit={handleSubmit} className="popup-form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Service</option>
                            <option value="Residential Property">Residential Property</option>
                            <option value="Commercial Property">Commercial Property</option>
                            <option value="Buy/Sell/Rent">Buy / Sell / Rent</option>
                            <option value="Investment Consulting">Investment Consulting</option>
                            <option value="Plots">Plots</option>
                        </select>
                    </div>

                    <button type="submit" className="whatsapp-submit-btn">
                        <FaWhatsapp /> Chat on WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WhatsAppPopup;
