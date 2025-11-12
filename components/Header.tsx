import React, { useState } from 'react';

// Define SVG for the logo
const AltalandLogo = () => (
    <svg width="250" height="60" viewBox="0 0 350 70" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M55.8 0L27.9 48.5L0 0H21.7L27.9 10.8L34.1 0H55.8Z"/>
            <path d="M48.7 20.8L58.5 20.8L61.6 26L55.8 36.3L50 26L48.7 20.8Z"/>
            <path d="M58.5 20.8L72.2 46.5H58.5V20.8Z"/>
            <path d="M27.9 55.8L38.7 36.3H17.1L27.9 55.8Z"/>
            <path d="M0 46.5L13.7 20.8H27.9V46.5H0Z"/>
            <text x="90" y="35" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold">ALTALAND</text>
            <text x="90" y="58" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">DEVELOPERS INC.</text>
            <rect x="90" y="38" width="185" height="4" />
        </g>
    </svg>
);


interface HeaderProps {
    onAboutClick: () => void;
    onProjectsClick: () => void;
    onServicesClick: () => void;
    onTestimonialsClick: () => void;
    onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAboutClick, onProjectsClick, onServicesClick, onTestimonialsClick, onContactClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navLinks = [
        { label: 'About', handler: onAboutClick },
        { label: 'Projects', handler: onProjectsClick },
        { label: 'Services', handler: onServicesClick },
        { label: 'Testimonials', handler: onTestimonialsClick },
        { label: 'Contact', handler: onContactClick },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="text-xl font-bold text-[#6b0000] transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-[#861212]">
                    <AltalandLogo />
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map(link => (
                         <button key={link.label} onClick={link.handler} className="text-gray-600 hover:text-[#6b0000] transition duration-300 font-medium">{link.label}</button>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-[#6b0000] focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <nav className="flex flex-col items-center space-y-2 py-4">
                        {navLinks.map(link => (
                            <button key={link.label} onClick={() => { link.handler(); setIsMenuOpen(false); }} className="text-gray-600 hover:text-[#6b0000] transition duration-300 font-medium py-2">{link.label}</button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;