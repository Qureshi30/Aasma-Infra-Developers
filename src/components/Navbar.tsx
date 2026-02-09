import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Our Team', path: '/team' },
        { name: 'Contact', path: '/contact' }
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl sm:text-3xl font-bold gradient-text cursor-pointer"
                        >
                            AASMA INFRA
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                            >
                                <Link
                                    to={item.path}
                                    className={`text-navy hover:text-accent transition-colors duration-300 font-medium ${location.pathname === item.path ? 'text-accent font-bold' : ''
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.a
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            href="tel:7863078669"
                            className="flex items-center gap-2 bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 hover:scale-105"
                        >
                            <FaPhone className="animate-pulse" />
                            <span>7863078669</span>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-navy text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-200"
                    >
                        <div className="container mx-auto px-4 py-6 space-y-4">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={() => setMenuOpen(false)}
                                        className={`block w-full text-left text-navy hover:text-accent hover:bg-lightGray transition-colors duration-300 font-medium py-3 px-4 rounded-lg ${location.pathname === item.path ? 'text-accent font-bold bg-accent/10' : ''
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                href="tel:7863078669"
                                className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 text-base"
                            >
                                <FaPhone />
                                <span>7863078669</span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
