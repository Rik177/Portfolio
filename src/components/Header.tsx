import { useState, useEffect } from 'react';

const Header = ({ activeSection }: { activeSection: string }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-white">
                    Portfolio
                </div>
                <div className="hidden md:flex space-x-8">
                    {['home', 'about', 'skills', 'projects', 'contacts'].map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`text-sm font-medium transition-colors duration-200 ${
                        activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                        }`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                    ))}
                </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;