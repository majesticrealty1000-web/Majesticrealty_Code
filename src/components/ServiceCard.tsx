import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBuilding, FaMap, FaHome, FaKey, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import { MdVilla, MdLayers } from 'react-icons/md';

interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
    icon: string;
    iconColor: string;
    route: string;
    ctaText: string;
    index: number;
}

const iconMap: { [key: string]: JSX.Element } = {
    building: <FaBuilding size={28} />,
    map: <FaMap size={28} />,
    home: <FaHome size={28} />,
    villa: <MdVilla size={28} />,
    layers: <MdLayers size={28} />,
    key: <FaKey size={28} />,
    briefcase: <FaBriefcase size={28} />
};

const ServiceCard = ({ id, title, description, icon, iconColor, ctaText, index }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="service-card"
        >
            <Link to={`/services/${id}`} className="service-card-link">
                <div className="service-icon-wrapper">
                    <div className="service-icon" style={{ backgroundColor: iconColor }}>
                        {iconMap[icon]}
                    </div>
                </div>
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>

                <div className="service-cta-wrapper">
                    <div className="btn-service-cta">
                        {ctaText} <FaArrowRight className="arrow-icon" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
