'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { scrollY } = useScroll();
    const { language, toggleLanguage, t } = useLanguage();

    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Transport and Logistics"
                    fill
                    className="object-cover object-center"
                    quality={100}
                    priority
                    style={{
                        filter: 'blur(2px)',
                        transform: 'scale(1.1)'  // Prevents blur edges
                    }}
                />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-teal-900/50 to-gray-900/90 z-10" />
            
            {/* Language Switch Button */}
            <div className="absolute top-6 right-6 z-50">
                <motion.button
                    onClick={toggleLanguage}
                    className="flex items-center justify-center w-16 h-8 bg-gray-800/70 backdrop-blur-sm text-white rounded-full border border-gray-600 hover:bg-gray-700/80 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {language === 'en' ? 'EN' : 'DE'}
                </motion.button>
            </div>

            {/* Light effects */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-500/30 rounded-full filter blur-3xl z-20" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full filter blur-3xl z-20" />

            {/* Content */}
            <motion.div
                className="relative z-30 flex flex-col items-center justify-center h-full px-4 text-center"
                style={{ y, opacity }}
            >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    {t('hero.title')}
                    <span className="block text-teal-400">{t('hero.subtitle')}</span>
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
                    {t('hero.description')}
                </p>
                <Link
                    href="/contact"
                    className="group relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-teal-500 to-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                >
                    {t('hero.contactButton')}
                    <svg
                        className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </motion.div>

            {/* Animated border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500 animate-gradient-x z-30" />
        </section>
    );
} 