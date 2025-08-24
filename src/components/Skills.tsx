const Skills = () => {
    const skills = [
        { name: 'React/Next.js', level: 90, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'Vue', level: 85, color: 'bg-green-600' },
        { name: 'JavaScript (ES6+)', level: 95, color: 'bg-yellow-500' },
        { name: 'CSS/Sass/Tailwind', level: 90, color: 'bg-pink-500' },
        { name: 'Redux', level: 75, color: 'bg-red-500' },
        { name: 'Vite', level: 90, color: 'bg-yellow-200'},
        { name: 'Webpack', level: 90, color: 'bg-blue-200'},
    ];

    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-12">Навыки</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                        <h3 className="text-white font-semibold">{skill.name}</h3>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                            className={`h-full ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                            style={{ width: `${skill.level}%` }}
                        ></div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;