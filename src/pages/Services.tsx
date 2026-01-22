import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="container text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="services-hero-title"
                    >
                        <span>Our</span> <span className="text-gold">Services</span>
                    </motion.h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '80px' }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="services-hero-line"
                    ></motion.div>
                </motion.div>
            </section>

            {/* Main Intro */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="services-intro-text">
                        <p>
                            At Majestic Realty, we provide end-to-end real estate services designed to help clients buy, sell, rent, and invest with confidence. Our expertise spans residential properties, commercial spaces, and plot buy & sell services, backed by strong local market knowledge and transparent processes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Grid Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container">
                    <div className="services-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {servicesData.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                id={service.id}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                iconColor={service.iconColor}
                                route={service.route}
                                ctaText={service.ctaText}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section-padding bg-dark text-white">
                <div className="container">
                    <div className="trust-section-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold" style={{ letterSpacing: '2px', fontWeight: 600 }}>WHY CHOOSE US</span>
                            <h2 style={{ fontSize: '2.5rem', margin: '1rem 0 2rem', color: '#fff' }}>Trust Majestic Realty</h2>
                            <div className="trust-list">
                                {[
                                    'Pune-based local market expertise',
                                    'Strong presence in Pune & Solapur',
                                    'Transparent and ethical dealings',
                                    'Personalized client approach',
                                    'Complete legal and documentation support'
                                ].map((item, i) => (
                                    <div key={i} className="trust-item">
                                        <FiCheckCircle className="text-gold" size={24} />
                                        <span className="trust-item-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="trust-quote-box">
                                <p className="trust-quote-text">
                                    "At Majestic Realty, we don’t just close deals — we build long-term relationships based on trust and results."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding services-cta-section">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="services-cta-title">Ready to Get Started?</h2>
                        <p className="services-cta-desc">
                            Whether you want to buy a home, sell a property, rent a space, or invest in plots, our team is here to guide you every step of the way.
                        </p>
                        <Link to="/contact" className="btn-services-cta">
                            Contact Majestic Realty Today <FiArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
