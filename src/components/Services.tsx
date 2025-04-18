import { FaRocket, FaChartLine, FaCogs, FaUsers } from 'react-icons/fa';

// Interfața pentru servicii
interface Service {
    icon: JSX.Element;
    title: string;
    description: string;
}

const Services = () => {
    // Array-ul cu serviciile oferite
    const services: Service[] = [
        {
            icon: <FaRocket className="text-4xl text-blue-600" />,
            title: "Dezvoltare Rapidă",
            description: "Implementăm soluții rapide și eficiente pentru afacerea dumneavoastră."
        },
        {
            icon: <FaChartLine className="text-4xl text-blue-600" />,
            title: "Creștere Susținută",
            description: "Strategii personalizate pentru creșterea și dezvoltarea afacerii."
        },
        {
            icon: <FaCogs className="text-4xl text-blue-600" />,
            title: "Suport Tehnic",
            description: "Asistență tehnică completă și mentenanță continuă."
        },
        {
            icon: <FaUsers className="text-4xl text-blue-600" />,
            title: "Consultanță",
            description: "Expertiză și sfaturi pentru optimizarea proceselor de business."
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Serviciile Noastre</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services; 