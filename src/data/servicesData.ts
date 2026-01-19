export interface Service {
    id: string;
    title: string;
    description: string;
    detailedDescription: string;
    features: string[];
    imageUrl: string;
    icon: string;
    iconColor: string;
    route: string;
    ctaText: string;
}

export const servicesData: Service[] = [
    {
        id: 'residential-property',
        title: 'Residential Properties in Pune & Solapur',
        description: 'Buy, Sell & Rent Homes with Majestic Realty.',
        detailedDescription: 'Majestic Realty offers expert assistance for buying, selling, and renting residential properties including apartments, villas, row houses, and flats. As a Pune-based real estate consultancy, we help clients across Pune and Solapur find homes that match their budget, lifestyle, and future goals.',
        features: [
            'Buying & selling residential properties',
            'Rental and leasing assistance',
            '2, 3 & 4 BHK flats and premium homes',
            'Property shortlisting and site visits',
            'Price negotiation and deal closure',
            'Legal documentation and possession support'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1470&auto=format&fit=crop',
        icon: 'home',
        iconColor: '#26A69A',
        route: '/services/residential-property',
        ctaText: 'For more details'
    },
    {
        id: 'commercial-property',
        title: 'Commercial Properties in Pune & Solapur',
        description: 'Office Spaces, Shops & Investment Assets.',
        detailedDescription: 'Majestic Realty provides professional guidance for commercial real estate transactions. We assist businesses and investors in buying, selling, and leasing office spaces, shops, showrooms, and commercial properties in high-demand locations.',
        features: [
            'Office spaces & IT parks',
            'Retail shops & showrooms',
            'Commercial investment properties',
            'Lease negotiation & ROI analysis',
            'Rental yield and growth advisory'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop',
        icon: 'briefcase',
        iconColor: '#5C6BC0',
        route: '/services/commercial-property',
        ctaText: 'For more details'
    },
    {
        id: 'plots-land',
        title: 'Plots for Sale in Pune & Solapur',
        description: 'Deep market knowledge across Pune and Solapur to guide your investments.',
        detailedDescription: 'Majestic Realty specializes in plot buy & sell services, helping clients invest in residential plots, NA plots, layout plots, and open land across prime and developing areas. Buying plots is one of the most profitable long-term investments, and our team ensures every transaction is safe, transparent, and value-driven.',
        features: [
            'Residential and NA plots',
            'Clear-title and verified land deals',
            'Legal and zoning guidance',
            'Pricing and growth potential analysis',
            'Secure buyer–seller negotiation'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop',
        icon: 'map',
        iconColor: '#7CB342',
        route: '/services/plots-land',
        ctaText: 'For more details'
    },
    {
        id: 'buy-sell-rent',
        title: 'Buy, Sell & Rent Property Services',
        description: 'End-to-End Real Estate Assistance.',
        detailedDescription: 'Looking to buy, sell, or rent a property or plot? Majestic Realty offers complete transaction support to make the process simple and stress-free. We manage the entire process so you can focus on making the right decision without confusion or risk.',
        features: [
            'Property valuation',
            'Listing and marketing',
            'Buyer & tenant screening',
            'Negotiation and agreement coordination',
            'Closing and handover assistance'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
        icon: 'key',
        iconColor: '#FF7043',
        route: '/services/buy-sell-rent',
        ctaText: 'For more details'
    },
    {
        id: 'investment-consulting',
        title: 'Real Estate Investment Consulting',
        description: 'Smart Property & Land Investment Advice.',
        detailedDescription: 'Majestic Realty offers investment-focused real estate consulting for clients seeking high-growth opportunities in residential, commercial, and plot investments. Our goal is to help investors make data-backed decisions that deliver long-term returns and capital appreciation.',
        features: [
            'Residential vs commercial ROI comparison',
            'Plot vs flat investment planning',
            'Location growth potential analysis',
            'Rental income and resale strategy'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop',
        icon: 'building',
        iconColor: '#4A90E2',
        route: '/services/investment-consulting',
        ctaText: 'For more details'
    }
];
