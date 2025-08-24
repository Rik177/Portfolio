import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-8">О себе</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        Привет! Я junior frontend разработчик с опытом создания современных веб-приложений. 
                        Специализируюсь на React, TypeScript и создании интуитивных пользовательских интерфейсов.
                    </p>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        Я уделяю внимание чистоте кода, соблюдению сроков и открытой коммуникации. Готов взяться за ваш проект и превратить ваши идеи в работающее и эффективное решение!
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">CSS/Sass</span>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-700/50 p-6 rounded-lg text-center">
                        <Code size={48} className="text-blue-400 mx-auto mb-4" />
                        <h3 className="text-white font-semibold mb-2">Clean Code</h3>
                        <p className="text-gray-400 text-sm">Читаемый и поддерживаемый код</p>
                    </div>
                    <div className="bg-gray-700/50 p-6 rounded-lg text-center">
                        <Palette size={48} className="text-green-400 mx-auto mb-4" />
                        <h3 className="text-white font-semibold mb-2">UI/UX</h3>
                        <p className="text-gray-400 text-sm">Современный дизайн</p>
                    </div>
                    <div className="bg-gray-700/50 p-6 rounded-lg text-center">
                        <Smartphone size={48} className="text-purple-400 mx-auto mb-4" />
                        <h3 className="text-white font-semibold mb-2">Responsive</h3>
                        <p className="text-gray-400 text-sm">Адаптивная верстка</p>
                    </div>
                    <div className="bg-gray-700/50 p-6 rounded-lg text-center">
                        <Zap size={48} className="text-orange-400 mx-auto mb-4" />
                        <h3 className="text-white font-semibold mb-2">Performance</h3>
                        <p className="text-gray-400 text-sm">Быстрые приложения</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;