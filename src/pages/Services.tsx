import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="page-hero" style={{
                background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.95) 0%, rgba(10, 25, 47, 0.8) 100%), url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '70vh',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                paddingTop: '80px',
                position: 'relative',
                overflow: 'hidden'
            }}>
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
                        style={{
                            fontSize: '5rem',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            letterSpacing: '-2px',
                            fontFamily: 'var(--font-heading)',
                            textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        <span style={{ color: '#fff' }}>Our</span> <span className="text-gold">Services</span>
                    </motion.h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '80px' }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        style={{
                            height: '4px',
                            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
                            margin: '0 auto',
                            borderRadius: '2px'
                        }}
                    ></motion.div>
                </motion.div>
            </section>

            {/* Main Intro */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--color-gray-500)' }}>
                            At Majestic Realty, we provide end-to-end real estate services designed to help clients buy, sell, rent, and invest with confidence. Our expertise spans residential properties, commercial spaces, and plot buy & sell services, backed by strong local market knowledge and transparent processes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Grid */}
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
                    <div className="row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold" style={{ letterSpacing: '2px', fontWeight: 600 }}>WHY CHOOSE US</span>
                            <h2 style={{ fontSize: '2.5rem', margin: '1rem 0 2rem', color: '#fff' }}>Trust Majestic Realty</h2>
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                {[
                                    'Pune-based local market expertise',
                                    'Strong presence in Pune & Solapur',
                                    'Transparent and ethical dealings',
                                    'Personalized client approach',
                                    'Complete legal and documentation support'
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <FiCheckCircle className="text-gold" size={24} />
                                        <span style={{ fontSize: '1.1rem', opacity: 0.9 }}>{item}</span>
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
                            <div style={{
                                padding: '3rem',
                                border: '1px solid rgba(212, 175, 55, 0.3)',
                                borderRadius: '20px',
                                background: 'rgba(255,255,255,0.05)'
                            }}>
                                <p style={{ fontSize: '1.3rem', lineHeight: '1.7', fontStyle: 'italic' }}>
                                    "At Majestic Realty, we don’t just close deals — we build long-term relationships based on trust and results."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-gold)' }}>
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '3rem', color: 'var(--color-dark)', marginBottom: '1.5rem' }}>Ready to Get Started?</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-dark)', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                            Whether you want to buy a home, sell a property, rent a space, or invest in plots, our team is here to guide you every step of the way.
                        </p>
                        <Link to="/contact" className="btn-primary" style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '1.2rem 3rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            Contact Majestic Realty Today <FiArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
