'use client';
import { motion } from 'framer-motion';
import { FaHandshake, FaTruck, FaShieldAlt, FaAward, FaGlobe, FaBox, FaIndustry, FaWarehouse } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Partners = () => {
    const { t } = useLanguage();
    
    const partners = [
        {
            name: t('partners.partner1.name'),
            role: t('partners.partner1.role'),
            description: t('partners.partner1.description'),
            icon: <FaTruck className="text-4xl" />
        },
        {
            name: t('partners.partner2.name'),
            role: t('partners.partner2.role'),
            description: t('partners.partner2.description'),
            icon: <FaGlobe className="text-4xl" />
        },
        {
            name: t('partners.partner3.name'),
            role: t('partners.partner3.role'),
            description: t('partners.partner3.description'),
            icon: <FaBox className="text-4xl" />
        },
        {
            name: t('partners.partner4.name'),
            role: t('partners.partner4.role'),
            description: t('partners.partner4.description'),
            icon: <FaHandshake className="text-4xl" />
        },
        {
            name: t('partners.partner5.name'),
            role: t('partners.partner5.role'),
            description: t('partners.partner5.description'),
            icon: <FaIndustry className="text-4xl" />
        },
        {
            name: t('partners.partner6.name'),
            role: t('partners.partner6.role'),
            description: t('partners.partner6.description'),
            icon: <FaWarehouse className="text-4xl" />
        },
        {
            name: t('partners.partner7.name'),
            role: t('partners.partner7.role'),
            description: t('partners.partner7.description'),
            icon: <FaShieldAlt className="text-4xl" />
        },
        {
            name: t('partners.partner8.name'),
            role: t('partners.partner8.role'),
            description: t('partners.partner8.description'),
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
                        {t('partners.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                    >
                        {t('partners.description')}
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
                        {t('partners.becomePartner')}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
                    >
                        {t('partners.partnerButton')}
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Partners; 