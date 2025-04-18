'use client';
import { useState } from 'react';
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

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Contactați-ne</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Informații de contact */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Informații de Contact</h3>

                        <div className="flex items-start space-x-4">
                            <FaEnvelope className="text-xl text-blue-600 mt-1" />
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-gray-600">contact@company.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <FaPhone className="text-xl text-blue-600 mt-1" />
                            <div>
                                <h4 className="font-semibold">Telefon</h4>
                                <p className="text-gray-600">+40 123 456 789</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <FaMapMarkerAlt className="text-xl text-blue-600 mt-1" />
                            <div>
                                <h4 className="font-semibold">Adresă</h4>
                                <p className="text-gray-600">Strada Exemplu, Nr. 123, București</p>
                            </div>
                        </div>
                    </div>

                    {/* Formular de contact */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Nume
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Mesaj
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Trimite Mesaj
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact; 