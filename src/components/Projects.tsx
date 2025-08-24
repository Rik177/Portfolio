import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'YouTalk',
      description: 'Блог сервиса по психологии. (Учебный проект, реализован переход только на одну статью.)',
      technologies: ['JS', 'WebPack'],
      image: '../../images/YouTalk.png',
      github: 'https://github.com/Rik177/YouTalk.git',
      live: 'https://youtalktask.netlify.app/',
    },
    {
      title: 'Kanban Board',
      description: 'Канбан доска со всеми необходимыми функциями. (Учебный проект)',
      technologies: ['React', 'TypeScript', 'CSS Modules', 'LocalStorage', 'Jest'],
      image: '../../images/Awesome_Kanban.png',
      github: 'https://github.com/Rik177/Kanban.git',
      live: 'https://awesomekanbanboard.netlify.app/',
    },
    {
      title: 'NORD ENGINEERING',
      description: 'Интернет магазин вентилляционного оборудования.',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Swiper', 'Vite', 'Eslint'],
      image: '../../images/Nord.png',
      github: 'https://github.com/Rik177/NORD-28072025.git',
      live: 'https://nord4020.netlify.app/',
    },
  ];

    return (
        <section id="projects" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-12">Проекты</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                        <div className="relative group">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-48 object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                            <a href={project.github} target="_blank"
                            className="text-white hover:text-blue-400 transition-colors duration-200">
                            <Github size={24} />
                            </a>
                            <a href={project.live} target="_blank"
                            className="text-white hover:text-blue-400 transition-colors duration-200">
                            <ExternalLink size={24} />
                            </a>
                        </div>
                        </div>
                        <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                                {tech}
                            </span>
                            ))}
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;