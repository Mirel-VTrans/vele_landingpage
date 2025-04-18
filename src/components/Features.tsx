import { FaCheck } from 'react-icons/fa';

const Features = () => {
    // Array-ul cu caracteristicile și beneficiile
    const features = [
        {
            title: "Performanță Ridicată",
            description: "Soluții optimizate pentru cele mai bune rezultate"
        },
        {
            title: "Securitate Avansată",
            description: "Protecție completă a datelor și informațiilor"
        },
        {
            title: "Suport 24/7",
            description: "Asistență tehnică non-stop pentru clienții noștri"
        },
        {
            title: "Actualizări Regulate",
            description: "Îmbunătățiri continue ale serviciilor oferite"
        }
    ];

    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Facilități și Beneficii</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full mr-4">
                                <FaCheck className="text-blue-600 text-xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Secțiune statistici */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                        <p className="text-gray-600">Satisfacție Clienți</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                        <p className="text-gray-600">Suport Tehnic</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                        <p className="text-gray-600">Experți</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                        <p className="text-gray-600">Țări</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features; 