'use client';
import { motion } from 'framer-motion';
import { FaHandshake, FaTruck, FaShieldAlt, FaAward, FaGlobe, FaBox, FaIndustry, FaWarehouse } from 'react-icons/fa';

const Partners = () => {
    const partners = [
        {
            name: 'FedEx',
            role: 'Strategic Partner',
            description: 'Global delivery network and express shipping solutions',
            icon: <FaTruck className="text-4xl" />
        },
        {
            name: 'DHL',
            role: 'Logistics Partner',
            description: 'International logistics and courier services',
            icon: <FaGlobe className="text-4xl" />
        },
        {
            name: 'Trans-o-Flex',
            role: 'Express Partner',
            description: 'Temperature-controlled logistics specialist',
            icon: <FaBox className="text-4xl" />
        },
        {
            name: 'Swiss Post',
            role: 'International Partner',
            description: 'Cross-border logistics solutions',
            icon: <FaHandshake className="text-4xl" />
        },
        {
            name: 'Gebrüder Weiss',
            role: 'Transport Partner',
            description: 'Full-service logistics provider',
            icon: <FaIndustry className="text-4xl" />
        },
        {
            name: 'Noerpel',
            role: 'Regional Partner',
            description: 'Comprehensive logistics services in Germany',
            icon: <FaWarehouse className="text-4xl" />
        },
        {
            name: 'German Transport Association',
            role: 'Industry Member',
            description: 'Active member of the leading transport association',
            icon: <FaShieldAlt className="text-4xl" />
        },
        {
            name: 'Quality Standards Institute',
            role: 'Certification Partner',
            description: 'ISO 9001:2015 certified operations',
            icon: <FaAward className="text-4xl" />
        }
    ];

    return (
        <section id="partners" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-gray-900/50 via-teal-900/30 to-blue-900/50 z-0" />

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
                        Our Partners
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                    >
                        Working together with industry leaders to provide exceptional service
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/40 transition-all border border-gray-700/30"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="text-teal-400 mb-4"
                            >
                                {partner.icon}
                            </motion.div>
                            <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                            <p className="text-blue-400 text-sm mb-3">{partner.role}</p>
                            <p className="text-gray-400 text-sm">{partner.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-300 text-lg">
                        Interested in becoming a partner?
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
                    >
                        Partner With Us
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Partners; 