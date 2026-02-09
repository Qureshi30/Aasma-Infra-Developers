import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: <FaFacebook />, url: "https://www.facebook.com/aasmainfracon", label: "Facebook" },
        { icon: <FaTwitter />, url: "https://twitter.com/aasmainfracon", label: "Twitter" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/aasmainfracon", label: "LinkedIn" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/aasmainfracon/", label: "Instagram" }
    ]

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Our Team", path: "/team" },
        { name: "Contact", path: "/contact" }
    ]

    return (
        <footer className="bg-gray-950 text-white pt-16 pb-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full filter blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">AASMA INFRA</h3>
                        <p className="text-gray-400 mb-4 text-sm sm:text-base">
                            Building dreams since 1999. 25+ years of excellence in South Mumbai's real estate sector.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl text-gray-400 hover:text-accent transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg sm:text-xl font-bold mb-4 text-accent">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-accent transition-colors duration-300 hover:translate-x-2 inline-block"
                                    >
                                        → {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg sm:text-xl font-bold mb-4 text-accent">Contact Info</h4>
                        <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                            <li className="flex items-start gap-2">
                                <FaPhone className="text-accent mt-1 flex-shrink-0" />
                                <a href="tel:7863078669" className="hover:text-accent transition-colors">
                                    7863078669
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaEnvelope className="text-accent mt-1 flex-shrink-0" />
                                <a href="mailto:info@aasmainfracon.com" className="hover:text-accent transition-colors">
                                    info@aasmainfracon.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                                <span>Sea View Apartment, J.S.S. Road, Chira Bazar, Mumbai 400002</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Working Hours */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg sm:text-xl font-bold mb-4 text-accent">Office Hours</h4>
                        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                            <li className="flex justify-between">
                                <span>Mon - Fri:</span>
                                <span className="text-white">10:00 AM - 7:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday:</span>
                                <span className="text-white">10:00 AM - 5:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday:</span>
                                <span className="text-white">By Appointment</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-sm"
                        >
                            © {currentYear} Aasma Infra. All rights reserved.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex gap-6 text-gray-400 text-sm"
                        >
                            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
