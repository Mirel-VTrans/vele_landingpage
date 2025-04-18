'use client';
import { motion } from 'framer-motion';
import { FaTruck, FaBox } from 'react-icons/fa';

const Hero = () => {
    return (
        // Secțiunea Hero cu înălțime completă și imagine de fundal
        <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-900 dark:to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Vele-Transporte
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Transport profesional și logistică în Germania
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12"
                >
                    <div className="flex items-center gap-3 text-lg">
                        <FaTruck className="text-2xl" />
                        <span>40+ Camioane</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg">
                        <FaBox className="text-2xl" />
                        <span>12 Bus-uri de 3.5t</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 duration-300">
                        Contactați-ne
                    </button>
                </motion.div>
            </div>

            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full -top-20 -left-20 animate-pulse" />
                <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full -bottom-20 -right-20 animate-pulse delay-1000" />
            </div>
        </section>
    );
};

export default Hero; 