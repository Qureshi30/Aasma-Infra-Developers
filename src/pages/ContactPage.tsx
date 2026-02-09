import Contact from '../components/Contact'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'

const ContactPage = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-navy via-primary to-secondary overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full filter blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full filter blur-3xl animate-pulse" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Get In <span className="gradient-text">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Let's discuss your dream home today
                    </motion.p>
                </div>
            </section>

            {/* Contact Component */}
            <Contact />

            {/* Map Section */}
            <section className="py-20 bg-lightGray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">
                            Visit Our <span className="gradient-text">Office</span>
                        </h2>
                        <p className="text-gray-700 flex items-center justify-center gap-2">
                            <FaMapMarkerAlt className="text-accent" />
                            Sea View Apartment, J.S.S. Road, Chira Bazar, Opp. Chandanwadi, Mumbai 400002
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border-2 border-lightGray rounded-2xl overflow-hidden h-96 shadow-xl"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2158788!2d72.8289!3d18.9535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU3JzEyLjYiTiA3MsKwNDknNDQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="AASMA INFRA Office Location"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage
