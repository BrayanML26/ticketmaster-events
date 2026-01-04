import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const { pathname } = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/favorites', label: 'Favorites' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-card-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#C026D3] cursor-pointer tracking-tighter">
                            Scenry
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`text-sm font-black transition-all uppercase tracking-widest ${pathname === link.to ? 'text-[#7C3AED]' : 'text-gray-500 dark:text-gray-400 hover:text-[#7C3AED]'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-3">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-100 dark:border-gray-700 group"
                        >
                            <span className="material-icons text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">brightness_4</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-100 dark:border-gray-700"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            ) : (
                                <Menu className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${pathname === link.to
                                        ? 'bg-[#7C3AED] text-white'
                                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
