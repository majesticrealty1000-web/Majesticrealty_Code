import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHandshake, FaChartLine, FaCheckCircle, FaSearchLocation, FaFileContract, FaKey, FaUserTie, FaArrowRight } from 'react-icons/fa';
import kiranImg from '../assets/images/kiran ghodake.jpeg';
import siddheshImg from '../assets/images/siddhesh sir.jpg';
import maheshImg from '../assets/images/mahesh dudhalkar.jpg';
import logoImg from '../assets/images/majestic realty circle logo.png';
import './About.css';

const About = () => {
    const processSteps = [
        {
            icon: <FaHandshake />,
            title: "Consultation",
            desc: "We understand your needs, budget, and preferences to tailor a plan just for you."
        },
        {
            icon: <FaSearchLocation />,
            title: "Property Selection",
            desc: "Curated visits to shortlisted properties that match your exact criteria."
        },
        {
            icon: <FaFileContract />,
            title: "Legal Assistance",
            desc: "Complete support with documentation, title verification, and registration."
        },
        {
            icon: <FaKey />,
            title: "Key Handover",
            desc: "Seamless post-purchase support and final possession of your new property."
        }
    ];

    const teamMembers = [
        {
            name: "Kiran Ghodake",
            role: "Founder & CEO",
            img: kiranImg
        },
        {
            name: "Siddheshwar Ghodake",
            role: "Senior Property Consultant",
            img: siddheshImg
        },
        {
            name: "Mahesh Dudhalkar",
            role: "Property Consultant",
            img: maheshImg
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="page-hero" style={{
                background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '45vh',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                paddingTop: '80px' // Navbar height compensation
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container"
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '3rem',
                        flexWrap: 'wrap',
                        textAlign: 'left'
                    }}>
                        <motion.img
                            src={logoImg}
                            alt="Majestic Realty Logo"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '4px solid var(--color-gold)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                        />
                        <div style={{ flex: '1', maxWidth: '600px' }}>
                            <h1 style={{
                                fontSize: '3.5rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: '#ffffff',
                                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                            }}>About <span className="text-gold">US</span></h1>
                            <p style={{
                                fontSize: '1.2rem',
                                opacity: 0.9,
                                textShadow: '0 1px 5px rgba(0,0,0,0.5)',
                                margin: 0
                            }}>Your Trusted Partner in Real Estate Excellence</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Our Story Section */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>Who We Are</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-gray-500)', marginBottom: '1.5rem' }}>
                                Majestic Realty is a Pune-based professional real estate consultancy specializing in residential properties, commercial spaces, and plot buy & sell services. We assist clients in buying, selling, and renting properties and plots with complete transparency, strong market expertise, and personalized support.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-gray-500)', marginBottom: '1.5rem' }}>
                                With in-depth knowledge of local property trends, land values, pricing, and legal processes across Pune and Solapur, we ensure every client receives the right property or plot at the right value.
                            </p>
                            <div className="about-stats-grid">
                                <div className="stat-card">
                                    <h4 className="stat-number">500+</h4>
                                    <p className="stat-label">Happy Clients</p>
                                </div>
                                <div className="stat-card">
                                    <h4 className="stat-number">50+</h4>
                                    <p className="stat-label">Projects Completed</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ position: 'relative' }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop"
                                alt="Modern Building"
                                style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />
                            <div className="testimonial-box">
                                <p className="text-gray-600 italic font-medium" style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '0.5rem' }}>"Majestic Realty helped us find our dream home in Baner within weeks. Highly recommended!"</p>
                                <p className="text-dark font-bold">- The Sharma Family</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="section-padding process-section">
                <div className="container">
                    <div className="process-header">
                        <h2 className="section-title">How We Work</h2>
                        <p className="section-description">A seamless 4-step process to your dream property.</p>
                    </div>

                    <div className="process-grid">
                        {/* Connecting Line (Desktop) */}
                        <div className="process-connector"></div>

                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="process-card"
                            >
                                <div className="process-icon-wrapper">
                                    {step.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--color-dark)' }}>{step.title}</h3>
                                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.6' }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Meet Our Experts</h2>
                        <p className="section-description">The dedicated professionals behind every successful deal.</p>
                    </div>

                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="team-card group"
                            >
                                <div className="team-card-inner">
                                    <div className="team-img-wrapper">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="team-img"
                                        />
                                        <div className="team-overlay"></div>
                                    </div>
                                    <div className="team-info">
                                        <h3 className="team-name">{member.name}</h3>
                                        <p className="team-role">{member.role}</p>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Detail */}
            <section className="section-padding wcu-detail-section">
                <div className="wcu-pattern-overlay"></div>
                <div className="container wcu-grid">
                    <div className="wcu-content">
                        <h2>Why Choose <span className="text-gold">Majestic Realty?</span></h2>
                        <p className="wcu-description">
                            In a crowded market, our commitment to integrity and client success sets us apart. We don't just close deals; we open doors to new beginnings.
                        </p>

                        <div className="wcu-list">
                            <div className="wcu-item">
                                <div className="wcu-icon-box">
                                    <FaSearchLocation />
                                </div>
                                <div>
                                    <h4>Local Market Mastery</h4>
                                    <p>Unmatched insights into Pune and Solapur micro-markets.</p>
                                </div>
                            </div>
                            <div className="wcu-item">
                                <div className="wcu-icon-box">
                                    <FaFileContract />
                                </div>
                                <div>
                                    <h4>100% Verified Listings</h4>
                                    <p>Every property undergoes strict legal due diligence before listing.</p>
                                </div>
                            </div>
                            <div className="wcu-item">
                                <div className="wcu-icon-box">
                                    <FaUserTie />
                                </div>
                                <div>
                                    <h4>Personalized Service</h4>
                                    <p>Dedicated relationship managers for seamless communication.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wcu-images-grid">
                        <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1496&auto=format&fit=crop" className="wcu-img wcu-img-offset" alt="Real Estate" />
                        <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1546&auto=format&fit=crop" className="wcu-img" alt="Consultation" />
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: '800px', margin: '0 auto 4rem' }}
                    >
                        <h2 className="section-title">Our Philosophy</h2>
                        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', fontStyle: 'italic', color: 'var(--color-dark)' }}>
                            "At Majestic Realty, we believe real estate is not just about transactions, but about long-term relationships, trust, and sustainable growth."
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <ValueCard
                            icon={<FaCheckCircle />}
                            title="Transparency"
                            description="We maintain absolute honesty in every deal, ensuring both buyers and sellers stay fully informed."
                        />
                        <ValueCard
                            icon={<FaHandshake />}
                            title="Trust"
                            description="Building lasting relationships by prioritizing our clients' interests above all else."
                        />
                        <ValueCard
                            icon={<FaChartLine />}
                            title="Expertise"
                            description="Deep market knowledge across Pune and Solapur to guide your investments."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="container about-cta-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Ready to Find Your Dream Property?</h2>
                        <p>
                            Expert guidance, verified listings, and a seamless buying experience await. Let's start your journey today with Majestic Realty.
                        </p>
                        <div className="cta-btn-wrapper">
                            <Link to="/contact" className="btn-cta">
                                Get Started <FaArrowRight />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const ValueCard = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
    <motion.div
        whileHover={{ y: -10 }}
        style={{
            backgroundColor: 'white',
            padding: '3rem 2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            textAlign: 'center'
        }}
    >
        <div style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>{icon}</div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-gray-500)', lineHeight: '1.6' }}>{description}</p>
    </motion.div>
);

export default About;
