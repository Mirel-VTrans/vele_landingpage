'use client';
import { motion } from 'framer-motion';
import { FaTruck, FaRoute, FaWarehouse, FaShippingFast } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

// Interfața pentru servicii
interface Service {
    icon: React.ReactElement;
    title: string;
    description: string;
}

const Services = () => {
    const { t } = useLanguage();
    
    // Array-ul cu serviciile oferite
    const services: Service[] = [
        {
            icon: <FaTruck className="text-4xl text-teal-400" />,
            title: t('services.service1.title'),
            description: t('services.service1.description')
        },
        {
            icon: <FaRoute className="text-4xl text-blue-400" />,
            title: t('services.service2.title'),
            description: t('services.service2.description')
        },
        {
            icon: <FaWarehouse className="text-4xl text-teal-400" />,
            title: t('services.service3.title'),
            description: t('services.service3.description')
        },
        {
            icon: <FaShippingFast className="text-4xl text-blue-400" />,
            title: t('services.service4.title'),
            description: t('services.service4.description')
        }
    ];

    return (
        <section id="services" className="py-20 relative overflow-hidden">
            {/* Unique gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-teal-900/30 to-blue-900/50 z-0" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-4 relative z-10"
            >
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
                    >
                        {t('services.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                    >
                        {t('services.description')}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl hover:bg-gray-800/40 transition-all border border-gray-700/30"
                        >
                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="mb-4"
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Services; 