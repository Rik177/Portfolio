import { ChevronDown, Github } from 'lucide-react';

const Hero = () => {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="container mx-auto px-6 text-left relative z-10">
                <div className="animate-fadeInUp">
                    <p className='text-3xl md:text-5xl font-semibold text-white mb-6'>Ярослав Шаболтас</p>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Начинающий Frontend
                    <span className="text-blue-400"> Developer</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed ml-0">
                    Создаю современные веб-приложения с фокусом на пользовательский опыт и производительность
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <button 
                    onClick={scrollToAbout}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                    Узнать больше
                    </button>
                    <div className="flex space-x-4">
                    <a href="github.com/Rik177" target="_blank"  
                        className="text-gray-400 hover:text-white transition-colors duration-200">
                        <Github size={24} />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown size={32} className="text-white opacity-60" />
            </div>
        </section>
    );
};

export default Hero;