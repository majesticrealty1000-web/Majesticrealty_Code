import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import { FiHome, FiSettings, FiCheckCircle, FiDollarSign, FiArrowRight, FiShield, FiAward } from 'react-icons/fi';
import LogoSlider from '../components/common/LogoSlider';
import './WhyChooseUs.css';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-title"
                    >
                        Turning Dreams Into <span className="text-gold">Reality</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        Premium properties, expert guidance, and seamless experiences across Pune and Solapur.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <a href="/contact" className="btn-primary">Get Started</a>
                    </motion.div>
                </div>

                {/* Hero Video Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="hero-video-container"
                >
                    <div className="hero-video-wrapper">
                        <video
                            className="hero-video"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="https://res.cloudinary.com/dermsdh2a/video/upload/Video_mmwtlz.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </motion.div>
            </section>

            {/* Trust Stats & Certifications Section */}
            <section className="trust-stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="stat-item"
                        >
                            <h3 className="text-gold">500+</h3>
                            <p>Happy Clients</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="stat-item"
                        >
                            <h3 className="text-gold">50+</h3>
                            <p>Premium Projects</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="stat-item"
                        >
                            <h3 className="text-gold">10+</h3>
                            <p>Years Experience</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="stat-item"
                        >
                            <h3 className="text-gold">100%</h3>
                            <p>Legal Transparency</p>
                        </motion.div>
                    </div>

                    {/* Certifications & Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="cert-grid"
                    >
                        <div className="cert-item">
                            <FiShield className="cert-icon" />
                            <div>
                                <h4 className="cert-title">RERA Registered</h4>
                                <p className="cert-desc">Govt. Approved Projects</p>
                            </div>
                        </div>
                        <div className="cert-item">
                            <FiCheckCircle className="cert-icon" />
                            <div>
                                <h4 className="cert-title">Legal Verified</h4>
                                <p className="cert-desc">Clear Title Properties</p>
                            </div>
                        </div>
                        <div className="cert-item">
                            <FiAward className="cert-icon" />
                            <div>
                                <h4 className="cert-title">MahaRERA Certified</h4>
                                <p className="cert-desc">Agent Reg. No: A52100018357</p>
                                <p className="cert-desc" style={{ marginTop: '0.2rem' }}>Enrollment No. 550005540</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>



            {/* Services Section */}
            <section className="services-section section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="services-header"
                    >
                        <h2 className="section-title">OUR SERVICES</h2>
                        <p className="section-description">
                            Discover our comprehensive range of real estate solutions tailored to meet your unique needs and aspirations.
                        </p>
                    </motion.div>

                    <div className="services-grid">
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
            <section className="why-choose-us">
                <div className="container">
                    <div style={{ marginBottom: '4rem' }}>
                        <LogoSlider className="black-border" />
                    </div>
                    <div className="why-choose-layout">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="why-choose-visual"
                        >
                            <div className="visual-item">
                                <img src="/Data/why_choose_us_1.png" alt="Expert Consultation" />
                            </div>
                            <div className="visual-item" style={{ marginTop: '40px' }}>
                                <img src="/Data/why_choose_us_2.png" alt="Property Analysis" />
                            </div>
                            <div className="floating-icon-card">
                                <FiHome />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="why-choose-content"
                        >
                            <span className="subtitle">WHY CHOOSE US</span>
                            <h2>We Turn Real Estate Dreams Into Reality</h2>
                            <p className="description">Your trusted partner for buying, selling, and managing properties.</p>

                            <div className="feature-list">
                                <div className="feature-item">
                                    <div className="feature-icon-circle"><FiSettings /></div>
                                    <div className="feature-text">
                                        <h4>Expert Property Management</h4>
                                        <p>From tenant handling to maintenance, we ensure your property stays profitable and stress-free.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon-circle"><FiCheckCircle /></div>
                                    <div className="feature-text">
                                        <h4>Smart Mortgage Support</h4>
                                        <p>Get the best loan options, low interest rates, and quick approvals — all handled by our finance experts.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon-circle"><FiDollarSign /></div>
                                    <div className="feature-text">
                                        <h4>Hassle-Free Financing</h4>
                                        <p>We connect you with trusted lenders and make the entire financing process simple and transparent.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Ready to Get Started CTA */}
            <section className="home-cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="cta-content-wrapper"
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                            <div style={{ width: '100%', textAlign: 'left' }}>
                                <h2 className="cta-heading">
                                    Ready to Get Started?
                                </h2>
                            </div>

                            <div className="cta-flex-container">
                                <p className="cta-description">
                                    Whether you want to buy a home, sell a property, rent a space, or invest in plots, our team is here to guide you every step of the way.
                                </p>

                                <a href="/contact" className="btn-cta-gold">
                                    Contact Majestic Realty Today <FiArrowRight />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Home;

