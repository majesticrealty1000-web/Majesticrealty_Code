import { motion } from 'framer-motion';
import { blogsData } from '../data/blogsData';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs-container">
            <div className="container">
                <div className="blogs-header">
                    <span className="blog-pill">Our Blog</span>
                    <h1 className="blogs-title">Latest Insights</h1>
                    <p className="blogs-subtitle">Expert tips and industry trends</p>
                </div>

                <div className="blogs-grid">
                    {blogsData.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="blog-card-wrapper"
                        >
                            <Link to={`/blogs/${blog.id}`} className="text-decoration-none">
                                <article className="blog-card">
                                    <div className="blog-image-container">
                                        <img
                                            src={blog.imageUrl}
                                            alt={blog.title}
                                            className="blog-image"
                                        />
                                    </div>
                                    <div className="blog-content">
                                        <span className="blog-date">{blog.date}</span>
                                        <h2 className="blog-card-title">{blog.title}</h2>
                                        <p className="blog-excerpt">{blog.excerpt}</p>
                                        {/* Optional: Add Read More link if desired, though card is clickable */}
                                        {/* <span className="read-more-link">Read Article <FaArrowRight /></span> */}
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
