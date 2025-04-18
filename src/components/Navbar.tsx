'use client';
import { Link } from 'react-scroll';
import { FaHome, FaInfoCircle, FaHandshake, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

// Interfața pentru elementele de navigare
interface NavItem {
    id: string;
    title: string;
    icon: React.ReactElement;
}

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    // Array-ul cu elementele de navigare și iconițele lor
    const navItems: NavItem[] = [
        { id: 'home', title: 'Acasă', icon: <FaHome className="text-xl" /> },
        { id: 'about', title: 'Despre', icon: <FaInfoCircle className="text-xl" /> },
        { id: 'services', title: 'Servicii & Parteneri', icon: <FaHandshake className="text-xl" /> },
        { id: 'contact', title: 'Contact', icon: <FaEnvelope className="text-xl" /> },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            Vele-Transporte
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-64}
                                    duration={500}
                                    className="flex flex-col items-center cursor-pointer hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                                >
                                    {item.icon}
                                    <span className="text-sm mt-1">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? (
                            <FaSun className="text-xl text-yellow-500" />
                        ) : (
                            <FaMoon className="text-xl text-gray-600" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 