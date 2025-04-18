'use client';
import { Link } from 'react-scroll';
import { FaHome, FaInfoCircle, FaCogs, FaHandshake, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Interface for navigation items
interface NavItem {
    id: string;
    title: string;
    icon: React.ReactElement;
}

const Navbar = () => {
    // Array with navigation items and their icons
    const navItems: NavItem[] = [
        { id: 'home', title: 'Home', icon: <FaHome className="text-xl" /> },
        { id: 'about', title: 'About', icon: <FaInfoCircle className="text-xl" /> },
        { id: 'services', title: 'Services', icon: <FaCogs className="text-xl" /> },
        { id: 'partners', title: 'Partners', icon: <FaHandshake className="text-xl" /> },
        { id: 'contact', title: 'Contact', icon: <FaEnvelope className="text-xl" /> },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 z-50 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center"
                    >
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Vele-Transport
                        </span>
                    </motion.div>

                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    className="flex flex-col items-center cursor-pointer text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <span className="text-sm mt-1">{item.title}</span>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Mobile menu button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden text-white p-2"
                    >
                        <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-current"></div>
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar; 