import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogsData } from '../data/blogsData';
import { FaArrowLeft, FaCalendar, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './BlogDetail.css';

const BlogDetail = () => {
    const { id } = useParams<{ id: string }>();
    const blog = blogsData.find(b => b.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
                <Link to="/blogs" className="btn-primary">
                    Back to All Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="blog-detail-page">
            {/* Hero Section */}
            <div
                className="blog-hero"
                style={{ backgroundImage: `url(${blog.imageUrl})` }}
            >
                <div className="blog-hero-overlay"></div>
                <div className="container blog-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="blog-meta-badges">
                            <span className="category-badge">{blog.category}</span>
                            <span className="date-badge"><FaCalendar /> {blog.date}</span>
                        </div>

                        <h1 className="blog-hero-title">
                            {blog.title}
                        </h1>

                        <div className="read-time">
                            <FaClock /> {blog.readTime}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container">
                <div className="blog-layout">
                    {/* Main Article */}
                    <article className="blog-main-article">
                        <Link to="/blogs" className="back-link">
                            <FaArrowLeft /> Back to Blogs
                        </Link>

                        <div
                            className="blog-main-content"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        <div className="share-section">
                            <span className="share-title">Share this article:</span>
                            <div className="share-icons">
                                <button className="share-btn"><FaFacebookF /></button>
                                <button className="share-btn"><FaTwitter /></button>
                                <button className="share-btn"><FaLinkedinIn /></button>
                                <button className="share-btn"><FaEnvelope /></button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="blog-sidebar">
                        <div className="sidebar-wrapper">
                            <div className="cta-card">
                                <h3 className="cta-title">Looking to Buy or Sell?</h3>
                                <p className="cta-text">
                                    Let our expert team guide you through Pune's real estate market. Get the best deals today.
                                </p>
                                <Link to="/contact" className="cta-button">
                                    Book Consultation
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
