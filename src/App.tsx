import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import ServiceDetail from './pages/ServiceDetail';
import ExpertiseDetail from './pages/ExpertiseDetail';
import BlogDetail from './pages/BlogDetail';
import WhatsAppButton from './components/common/WhatsAppButton';
import WhatsAppPopup from './components/common/WhatsAppPopup';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="expertise" element={<Expertise />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="services/:id" element={<ServiceDetail />} />
                    <Route path="expertise/:id" element={<ExpertiseDetail />} />
                    <Route path="blogs/:id" element={<BlogDetail />} />
                </Route>
            </Routes>
            <WhatsAppButton />
            <WhatsAppPopup />
        </Router>
    );
}

export default App;
