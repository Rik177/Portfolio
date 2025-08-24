
import { Github, Mail, Send } from 'lucide-react';
const Contacts = () => {

    return (
        <section id="contacts" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Связаться со мной</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                                <h3 className="text-2xl font-semibold text-white mb-6">Давайте создадим что-то вместе</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    Если у вас есть проект, идея или просто хотите поговорить о разработке — 
                                    я всегда открыт к новым возможностям и интересным задачам.
                                </p>
                            </div>
                            
                            <div className="space-y-4 justify-self-end">
                                <div className="flex items-center space-x-3">
                                    <Mail className="text-blue-400" size={20} />
                                    <span className="text-gray-300">mefodi12@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Github className="text-blue-400" size={20} />
                                    <span className="text-gray-300">github.com/Rik177</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Send className="text-blue-400" size={20} />
                                    <span className="text-gray-300">@Alex71x</span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts