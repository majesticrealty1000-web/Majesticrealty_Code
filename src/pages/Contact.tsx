import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    // Form field states
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: ''
    });

    // UI states
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            // EmailJS configuration from environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            // Debug: Log credentials (remove in production)
            console.log('EmailJS Config:', {
                serviceId,
                templateId,
                publicKey: publicKey ? `${publicKey.substring(0, 5)}...` : 'undefined'
            });

            // Initialize EmailJS with public key
            emailjs.init(publicKey);

            // Prepare template parameters
            const templateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                service_type: formData.service,
                message: formData.message,
                to_name: 'Majestic Realty Team'
            };

            // Send email via EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                templateParams
            );

            // Success
            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                service: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);

        } catch (error: any) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
            setErrorMessage(error?.text || 'Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="contact-info"
                >
                    <div>
                        <h2>Get In Touch</h2>
                        <p>Have questions about a property or looking to sell? Our expert team is here to guide you every step of the way.</p>
                    </div>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="info-icon"><FiMapPin /></div>
                            <div className="info-content">
                                <h4>Our Office</h4>
                                <p>Padale House, near SHREE SHIV CHHATRAPATI SPORTS COMPLEX, opp. ZP School Y Junction, Mahalunge, Pune, Maharashtra 411045</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FiPhone /></div>
                            <div className="info-content">
                                <h4>Call Us</h4>
                                <p>+91 84591 37310</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FiMail /></div>
                            <div className="info-content">
                                <h4>Email Us</h4>
                                <p>Majesticrealitypune@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FiClock /></div>
                            <div className="info-content">
                                <h4>Working Hours</h4>
                                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="contact-form-card"
                >
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name <span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name <span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">I'm Interested In <span style={{ color: 'red' }}>*</span></label>
                            <select
                                id="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                            >
                                <option value="" disabled>Select a Service</option>
                                <option value="buy">Buying a Property</option>
                                <option value="sell">Selling a Property</option>
                                <option value="rent">Renting</option>
                                <option value="investment">Investment Consultation</option>
                                <option value="nri">NRI Services</option>
                                <option value="legal">Legal Consultancy</option>
                                <option value="other">Other Inquiry</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address <span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="email"
                                id="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                disabled={isLoading}
                            ></textarea>
                        </div>

                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <div style={{
                                padding: '12px',
                                backgroundColor: '#d4edda',
                                color: '#155724',
                                borderRadius: '8px',
                                marginBottom: '16px',
                                border: '1px solid #c3e6cb'
                            }}>
                                ✓ Thank you for contacting us! We'll get back to you soon.
                            </div>
                        )}

                        {/* Error Message */}
                        {submitStatus === 'error' && (
                            <div style={{
                                padding: '12px',
                                backgroundColor: '#f8d7da',
                                color: '#721c24',
                                borderRadius: '8px',
                                marginBottom: '16px',
                                border: '1px solid #f5c6cb'
                            }}>
                                ✗ {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isLoading}
                            style={{
                                opacity: isLoading ? 0.7 : 1,
                                cursor: isLoading ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

