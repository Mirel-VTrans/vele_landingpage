'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    // State pentru formularul de contact
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handler pentru schimbările din formular
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handler pentru trimiterea formularului
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aici se va implementa logica de trimitere a formularului
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: 'Email',
            content: 'contact@vele-transport.de'
        },
        {
            icon: <FaPhone className="text-2xl" />,
            title: 'Phone',
            content: '+49 123 456 789'
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            title: 'Address',
            content: 'Stuttgart, Baden-Württemberg, Germany'
        }
    ];

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Unique gradient background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/50 via-teal-900/30 to-blue-900/50 z-0" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-4 relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                        Contact Us
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        We're here to help. Contact us for any questions or requests.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>

                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex items-start space-x-4"
                            >
                                <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg text-teal-400">
                                    {info.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{info.title}</h4>
                                    <p className="text-gray-300">{info.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400"
                                    required
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact; 