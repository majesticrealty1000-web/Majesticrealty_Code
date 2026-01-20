import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaChartLine, FaGavel, FaUsers, FaArrowRight, FaCity } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { expertiseData } from '../data/expertiseData';
import LogoSlider from '../components/common/LogoSlider';
import heroBg from '../assets/images/logo_majestic realty.png';
import './Expertise.css';

const iconMap: { [key: string]: JSX.Element } = {
    city: <FaCity />,
    building: <FaBuilding />,
    chart: <FaChartLine />,
    gavel: <FaGavel />,
    handshake: <FaHandshake />,
    users: <FaUsers />
};

const Expertise = () => {
    return (
        <div className="expertise-page">
            {/* Hero Section */}
            <section className="expertise-hero" style={{
                background: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.7)), url("${heroBg}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
                            <span>Our </span><span className="text-gold">Expertise</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: '#e5e7eb' }}>
                            Delivering excellence across residential, commercial, and land investments with a client-first approach.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <StatItem number="10+" label="Years Experience" />
                        <StatItem number="500+" label="Happy Families" />
                        <StatItem number="50+" label="Commercial Projects" />
                        <StatItem number="100%" label="Transparency" />
                    </div>
                </div>
            </section>

            {/* Core Competencies */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="services-header">
                        <h2 className="section-title">Areas of Specialization</h2>
                        <p className="section-description">
                            We don't just sell properties; we provide comprehensive real estate solutions tailored to your unique needs.
                        </p>
                    </div>

                    <div className="competencies-grid">
                        {expertiseData.map((item, index) => (
                            <Link to={`/expertise/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ExpertiseCard
                                    icon={iconMap[item.icon]}
                                    title={item.title}
                                    description={item.shortDescription}
                                    delay={0.1 * (index + 1)}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Focus Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-gray-100)' }}>
                <div className="container">
                    <div style={{ marginBottom: '3rem' }}>
                        <LogoSlider />
                    </div>
                    <div className="client-focus-row">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                                alt="Client Meeting"
                                style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', width: '100%' }}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Client-Centric Approach</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-500)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                At Majestic Realty, our clients are at the heart of everything we do. We understand that buying or selling a property is a significant life decision.
                            </p>
                            <div className="check-list">
                                <div className="check-item">
                                    <div className="check-dot"></div>
                                    <span>Personalized Property Shortlisting</span>
                                </div>
                                <div className="check-item">
                                    <div className="check-dot"></div>
                                    <span>Transparent Pricing & Negotiations</span>
                                </div>
                                <div className="check-item">
                                    <div className="check-dot"></div>
                                    <span>Post-Purchase Support</span>
                                </div>
                            </div>
                            <Link to="/contact" className="btn-primary">
                                Partner With Us
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-dark text-white" style={{ textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>Ready to Experience Excellence?</h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                            Let our expertise guide you to the perfect property solution. Contact us today for a consultation.
                        </p>
                        <Link to="/contact" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Get in Touch <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const StatItem = ({ number, label }: { number: string, label: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="stat-item"
    >
        <div className="stat-number">{number}</div>
        <div className="stat-label">{label}</div>
    </motion.div>
);

const ExpertiseCard = ({ icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="expertise-card"
    >
        <div className="card-icon">
            {icon}
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
    </motion.div>
);

export default Expertise;
