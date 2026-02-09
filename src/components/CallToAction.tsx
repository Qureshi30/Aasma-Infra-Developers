
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const CallToAction = () => {
    const navigate = useNavigate()

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-navy via-primary to-secondary relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full filter blur-3xl animate-pulse" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-accent/20 text-accent text-sm font-bold tracking-widest px-6 py-2 rounded-full border-2 border-accent inline-block mb-6"
                    >
                        GET IN TOUCH
                    </motion.span>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Build Your <br /><span className="gradient-text">Dream Home?</span>
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                        Let's discuss your project requirements and turn your vision into reality.
                        Our team is ready to assist you with expert guidance and transparent communication.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:7863078669"
                            className="flex items-center gap-3 bg-accent text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-2xl w-full sm:w-auto justify-center"
                        >
                            <FaPhone className="text-2xl animate-pulse" />
                            <span>Call: 7863078669</span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/917863078669"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-green-500 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl w-full sm:w-auto justify-center"
                        >
                            <FaWhatsapp className="text-2xl" />
                            <span>WhatsApp Us</span>
                        </motion.a>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-12"
                    >
                        <button
                            onClick={() => navigate('/contact')}
                            className="inline-flex items-center gap-2 bg-white/10 text-white hover:bg-white hover:text-navy border-2 border-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                        >
                            Or fill our contact form
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </motion.div>

                    <div className="mt-16 pt-12 border-t border-white/20">
                        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <p className="text-gray-200 font-semibold mb-2">Office Hours</p>
                                <p className="text-white text-lg">Monday - Saturday</p>
                                <p className="text-accent font-bold">10:00 AM - 7:00 PM</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <p className="text-gray-200 font-semibold mb-2">Visit Us</p>
                                <p className="text-white">Sea View Apartment, J.S.S. Road</p>
                                <p className="text-white">Chira Bazar, Mumbai 400002</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CallToAction
