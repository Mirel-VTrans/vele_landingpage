'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTruck, FaUsers, FaClock } from 'react-icons/fa';

const About = () => {
    const stats = [
        { icon: <FaTruck />, value: '100+', label: 'Monthly Deliveries' },
        { icon: <FaUsers />, value: '50+', label: 'Satisfied Clients' },
        { icon: <FaClock />, value: '24/7', label: 'Support' }
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-0" />

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
                        className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        About Us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                    >
                        We are dedicated to providing the best transport and logistics solutions
                        for our clients in Germany, with special focus on the Baden-Württemberg region.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="text-4xl mb-4 text-blue-400 flex justify-center"
                            >
                                {stat.icon}
                            </motion.div>
                            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-white">Why Choose Us?</h3>
                        {[
                            'Proven transport experience',
                            'Professional and dedicated team',
                            'Complete coverage in Germany',
                            'Real-time monitoring'
                        ].map((text, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex items-center space-x-3"
                            >
                                <FaCheckCircle className="text-blue-400" />
                                <span className="text-gray-300">{text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Certifications & Partnerships</h3>
                        <div className="space-y-4 text-gray-300">
                            <p>• ISO 9001:2015 Certification</p>
                            <p>• FedEx Partner</p>
                            <p>• DHL Partner</p>
                            <p>• Member of German Transport Association</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About; 