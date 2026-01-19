import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { FaArrowLeft, FaCheckCircle, FaBuilding, FaMap, FaHome, FaKey, FaBriefcase } from 'react-icons/fa';
import { MdVilla, MdLayers } from 'react-icons/md';
import { useEffect } from 'react';

const iconMap: { [key: string]: JSX.Element } = {
    building: <FaBuilding size={40} />,
    map: <FaMap size={40} />,
    home: <FaHome size={40} />,
    villa: <MdVilla size={40} />,
    layers: <MdLayers size={40} />,
    key: <FaKey size={40} />,
    briefcase: <FaBriefcase size={40} />
};

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
            <section className="service-detail-hero" style={{
                position: 'relative',
                height: '60vh',
                minHeight: '400px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${service.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.3)'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 style={{
                            fontSize: '4rem',
                            fontWeight: 800,
                            marginBottom: '1rem',
                            color: '#ffffff',
                            textShadow: '0 4px 20px rgba(0,0,0,0.6)',
                            letterSpacing: '-1.5px',
                            lineHeight: '1.1'
                        }}>{service.title}</h1>

                        <div style={{
                            width: '60px',
                            height: '4px',
                            background: 'var(--color-gold)',
                            margin: '0 auto 2.5rem',
                            borderRadius: '2px'
                        }}></div>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/" style={{
                                backgroundColor: 'transparent',
                                border: '2px solid #ffffff',
                                color: '#ffffff',
                                padding: '0.8rem 1.8rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 600,
                                transition: 'all 0.3s ease',
                                display: 'inline-block'
                            }}>
                                Home
                            </Link>
                            <Link to="/services" style={{
                                backgroundColor: 'var(--color-gold)',
                                border: '2px solid var(--color-gold)',
                                padding: '0.8rem 1.8rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                color: 'var(--color-dark)',
                                fontWeight: 600,
                                display: 'inline-block',
                                transition: 'all 0.3s ease'
                            }}>
                                All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="row" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '4rem' }}>
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
                            <div style={{
                                backgroundColor: 'var(--color-white)',
                                padding: '2.5rem',
                                borderRadius: '20px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                border: '1px solid var(--color-gray-200)',
                                position: 'sticky',
                                top: '100px'
                            }}>
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
