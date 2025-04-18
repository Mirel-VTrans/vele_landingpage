const About = () => {
    return (
        // Secțiunea About cu design modern și informații despre companie
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Despre Noi</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Misiunea Noastră
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Suntem dedicați să oferim cele mai bune soluții pentru clienții noștri.
                            Cu o experiență vastă în domeniu, ne străduim să depășim așteptările
                            și să livrăm rezultate excepționale.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-blue-600">100+</h4>
                                <p className="text-gray-600">Clienți Mulțumiți</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-blue-600">50+</h4>
                                <p className="text-gray-600">Proiecte Finalizate</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            De ce să ne alegeți?
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                                <span>Experiență dovedită în domeniu</span>
                            </li>
                            <li className="flex items-center">
                                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                                <span>Echipă profesionistă și dedicată</span>
                            </li>
                            <li className="flex items-center">
                                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                                <span>Soluții personalizate pentru fiecare client</span>
                            </li>
                            <li className="flex items-center">
                                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                                <span>Suport tehnic 24/7</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 