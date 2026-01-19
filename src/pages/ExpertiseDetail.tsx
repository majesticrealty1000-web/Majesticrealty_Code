import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { expertiseData } from '../data/expertiseData';
import { FaArrowLeft, FaCheckCircle, FaBuilding, FaHandshake, FaChartLine, FaGavel, FaUsers, FaCity } from 'react-icons/fa';
import { useEffect } from 'react';
import './ExpertiseDetail.css';

const iconMap: { [key: string]: JSX.Element } = {
    city: <FaCity />,
    building: <FaBuilding />,
    chart: <FaChartLine />,
    gavel: <FaGavel />,
    handshake: <FaHandshake />,
    users: <FaUsers />
};

const ExpertiseDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const expertise = expertiseData.find(e => e.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!expertise) {
        return (
            <div className="section-padding container text-center pt-20">
                <h2>Expertise Area Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <Link to="/expertise" className="btn-primary mt-4">Back to Expertise</Link>
            </div>
        );
    }

    return (
        <div className="expertise-detail-page">
            {/* Hero Section */}
            <section className="expertise-hero" style={{
                backgroundImage: `url(${expertise.imageUrl})`,
                paddingTop: '80px'
            }}>
                <div className="expertise-hero-overlay"></div>
                <div className="container expertise-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="expertise-icon-glass">
                            {iconMap[expertise.icon]}
                        </div>
                        <h1 className="expertise-title">
                            {expertise.title}
                        </h1>
                        <div className="expertise-divider"></div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container">
                <div className="expertise-layout">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-heading">Overview</h2>
                        <p className="expertise-description">
                            {expertise.fullDescription}
                        </p>

                        <h3 className="section-heading">Key Features & Services</h3>
                        <div className="features-grid">
                            {expertise.features.map((feature, index) => (
                                <div key={index} className="feature-card">
                                    <div className="feature-icon">
                                        <FaCheckCircle />
                                    </div>
                                    <span className="feature-text">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.aside
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="sidebar-wrapper">
                            <div className="sidebar-cta">
                                <h3 className="sidebar-title">Interested in {expertise.title}?</h3>
                                <p className="sidebar-text">
                                    Connect with our experts to discuss your requirements and get a personalized consultation.
                                </p>
                                <div className="sidebar-cta-container">
                                    <Link to="/contact" className="btn-sidebar-cta">
                                        ENQUIRE NOW
                                    </Link>
                                </div>

                                <div className="sidebar-divider"></div>

                                <button
                                    onClick={() => navigate('/expertise')}
                                    className="back-btn"
                                >
                                    <FaArrowLeft /> Back to Expertise Areas
                                </button>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </section>
        </div>
    );
};

export default ExpertiseDetail;
