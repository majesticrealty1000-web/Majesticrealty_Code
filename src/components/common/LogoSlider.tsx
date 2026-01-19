import './LogoSlider.css';

// Pune-based Builders and Developers
const builders = [
    "Lodha Group",
    "Kasturi",
    "Kolte Patil",
    "Kunal Group",
    "Kohinoor Group",
    "Vilas Javdekar",
    "KPune",
    "Saheel Properties",
    "Nyati Group",
    "Majestique Landmarks",
    "Nandan Buildcon",
    "Kundan Spaces",
    "Kumar Builders",
];

// Duplicate list for seamless scrolling
const sliderBuilders = [...builders, ...builders, ...builders];

interface LogoSliderProps {
    className?: string;
}

const LogoSlider = ({ className = '' }: LogoSliderProps) => {
    return (
        <div className={`logo-slider-container ${className}`}>
            <h3 className="slider-title">Trusted By Leading Builders & Developers</h3>
            <div className="logo-track">
                {sliderBuilders.map((builder, index) => (
                    <div className="logo-slide" key={index}>
                        <span className="builder-name">{builder}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;
