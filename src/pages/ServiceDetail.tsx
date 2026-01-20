import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) {
        return (
            <div className="section-padding container text-center">
                <h2>Service Not Found</h2>
                <p>The service you are looking for does not exist.</p>
                <Link to="/" className="btn-primary">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            {/* Hero Section */}
            <section className="service-detail-hero">
                <div className="hero-overlay" style={{ backgroundImage: `url(${service.imageUrl})` }}></div>

                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="service-hero-title">{service.title}</h1>

                        <div className="title-underline"></div>

                        <div className="hero-buttons">
                            <Link to="/" className="btn-hero-outline">
                                Home
                            </Link>
                            <Link to="/services" className="btn-hero-filled">
                                All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="service-content-grid">
                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-dark)' }}>Overview</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-gray-500)', marginBottom: '2.5rem' }}>
                                {service.detailedDescription}
                            </p>

                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-dark)' }}>Key Features & Benefits</h3>
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {service.features.map((feature, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <FaCheckCircle style={{ color: service.iconColor, fontSize: '1.5rem', flexShrink: 0 }} />
                                        <span style={{ fontSize: '1.1rem', color: 'var(--color-gray-500)' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="sidebar-card">
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Interested in this service?</h3>
                                <p style={{ color: 'var(--color-gray-500)', marginBottom: '2rem' }}>
                                    Contact our experts today to get more information and personalized guidance.
                                </p>
                                <div className="sidebar-cta-container">
                                    <Link to="/contact" className="btn-sidebar-cta">
                                        ENQUIRE NOW
                                    </Link>
                                </div>

                                <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--color-gray-200)' }}>
                                    <button
                                        onClick={() => navigate(-1)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--color-gray-500)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            cursor: 'pointer',
                                            fontSize: '1rem',
                                            padding: 0
                                        }}
                                    >
                                        <FaArrowLeft /> Back to previous
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
