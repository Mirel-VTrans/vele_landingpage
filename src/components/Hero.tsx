'use client';
import { motion } from 'framer-motion';
import { FaTruck, FaBox, FaShippingFast } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-blue-900/20 z-0" />

            <div className="max-w-7xl mx-auto px-4 z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
                            Vele-Transport
                        </h1>
                        <p className="text-xl text-gray-300">
                            Professional Transport and Logistics in Germany
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 text-gray-300">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3"
                            >
                                <FaTruck className="text-2xl text-teal-400" />
                                <span>40+ Trucks</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3"
                            >
                                <FaBox className="text-2xl text-blue-400" />
                                <span>12 Vans (3.5t)</span>
                            </motion.div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <motion.div
                            animate={{
                                x: [-20, 20, -20],
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative h-[400px] w-[400px] flex items-center justify-center"
                        >
                            <div className="relative">
                                <FaShippingFast className="text-[200px] text-teal-400/80" />
                                {/* Animated wheels effect */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute bottom-[30px] left-[40px] w-[30px] h-[30px] rounded-full border-4 border-blue-400/80"
                                />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute bottom-[30px] right-[40px] w-[30px] h-[30px] rounded-full border-4 border-blue-400/80"
                                />
                            </div>
                        </motion.div>

                        {/* Road effect */}
                        <motion.div
                            animate={{
                                x: [-100, 100],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute bottom-[80px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Animated particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute h-2 w-2 bg-teal-400/30 rounded-full"
                    animate={{
                        y: ['-100%', '100%'],
                        x: Math.random() * 100 + '%',
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                />
            ))}
        </section>
    );
};

export default Hero; 