export interface ExpertiseItem {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    imageUrl: string;
    icon: string;
}

export const expertiseData: ExpertiseItem[] = [
    {
        id: 'residential',
        title: 'Residential Properties',
        shortDescription: 'Finding your dream home in Pune & Solapur. From luxury apartments to affordable housing, we guide you through every step.',
        fullDescription: 'At Majestic Realty, we specialize in helping individuals and families find their perfect home. Whether you are looking for a luxurious penthouse in Pune or a spacious family home in Solapur, our extensive portfolio covers it all. We understand that buying a home is one of the biggest investments you will make, which is why we offer personalized guidance, ensuring you choose a property that meets your lifestyle and financial goals.',
        features: [
            'Premium Apartments & Penthouses',
            'Gated Community Villas',
            'Affordable Housing Projects',
            'Verified Resale Properties',
            'Loan & Legal Assistance'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-e32c8ec049db?q=80&w=2074&auto=format&fit=crop',
        icon: 'city'
    },
    {
        id: 'commercial',
        title: 'Commercial Spaces',
        shortDescription: 'Strategic office spaces, retail outlets, and investment opportunities designed to maximize your business growth and ROI.',
        fullDescription: 'Our Commercial Real Estate division provides end-to-end solutions for businesses and investors. We identify high-potential locations for office spaces, retail showrooms, reviews, and industrial setups. By analyzing market trends and demographic data, we help you invest in properties that promise high rental yields and long-term capital appreciation. From startups looking for co-working spaces to established corporations needing headquarters, we cater to all.',
        features: [
            'Grade A Office Spaces',
            'High-Street Retail Shops',
            'IT Park Spaces',
            'Warehousing & Industrial Plots',
            'Lease & Rental Management'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop',
        icon: 'building'
    },
    {
        id: 'land',
        title: 'Land Investments',
        shortDescription: 'Prime plots and land parcels with high appreciation potential. We verify titles and ensure hassle-free transactions.',
        fullDescription: 'Investing in land is one of the most secure ways to build wealth. We offer exclusive access to government-approved (NA) plotting schemes, agricultural land for farmhouses, and strategic land parcels for future development. Our team conducts rigorous due diligence to ensure all titles are clear and litigations-free, giving you complete peace of mind.',
        features: [
            'NA Plots & Bungalow Plots',
            'Agricultural & Farmhouse Land',
            'Industrial Land Parcels',
            'Title Verification & Clearance',
            'Fencing & Boundary Walls'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop',
        icon: 'chart'
    },
    {
        id: 'legal',
        title: 'Legal Consultancy',
        shortDescription: 'End-to-end legal support including documentation, property verification, and registration assistance for peace of mind.',
        fullDescription: 'Navigating the legalities of real estate can be complex. Our in-house legal experts provide comprehensive services to ensure your property transaction is legally sound. We handle everything from title searches and property verification to drafting sale deeds and assisting with registration. We ensure that your investment is protected from any future legal disputes.',
        features: [
            'Property Title Search & Reports',
            'Sale Deed & Agreement Drafting',
            'Registration Assistance',
            'Dispute Resolution Advice',
            'Mutation & 7/12 Extract Updates'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1512&auto=format&fit=crop',
        icon: 'gavel'
    },
    {
        id: 'nri',
        title: 'NRI Services',
        shortDescription: 'Specialized services for Non-Resident Indians looking to invest in Indian real estate, with complete remote management.',
        fullDescription: 'We offer dedicated services for Indians living abroad (NRIs) who wish to invest in their homeland. We understand the challenges of managing property remotely, which is why we offer a suite of services including property identification, virtual tours, power of attorney facilitation, and property management (renting, maintenance). We make investing in India seamless and stress-free.',
        features: [
            'Virtual Property Tours',
            'Remote Documentation & POA',
            'Portfolio Management',
            'Rental & Tenant Management',
            'Taxation Advisory'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=1470&auto=format&fit=crop',
        icon: 'handshake'
    },
    {
        id: 'portfolio',
        title: 'Portfolio Management',
        shortDescription: 'Expert advice on building and managing a diversified real estate portfolio for long-term wealth creation.',
        fullDescription: 'Real estate is a key component of a diversified investment portfolio. Our wealth management experts analyze your financial goals and risk appetite to recommend a mix of properties that maximize returns. We continuously monitor market trends to advise on the right time to buy, hold, or sell, ensuring your real estate assets work as hard as you do.',
        features: [
            'Investment Strategy Planning',
            'Asset Allocation Advice',
            'Market Analysis & Reports',
            'ROI Optimization',
            'Exit Strategy Planning'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop',
        icon: 'users'
    }
];
