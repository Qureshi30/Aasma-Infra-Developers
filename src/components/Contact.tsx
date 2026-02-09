import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUser, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        alert('Thank you for your inquiry! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', message: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const contactInfo = [
        {
            icon: <FaPhone />,
            title: "Call Us",
            info: "7863078669",
            link: "tel:7863078669"
        },
        {
            icon: <FaWhatsapp />,
            title: "WhatsApp",
            info: "7863078669",
            link: "https://wa.me/917863078669"
        },
        {
            icon: <FaEnvelope />,
            title: "Email Us",
            info: "info@aasmainfracon.com",
            link: "mailto:info@aasmainfracon.com"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Visit Us",
            info: "Sea View Apartment, J.S.S. Road, Chira Bazar, Mumbai 400002",
            link: "#"
        }
    ]

    return (
        <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full filter blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary rounded-full filter blur-3xl" />
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-accent font-bold text-sm tracking-widest mb-4 block">GET IN TOUCH</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
                        Book Your <span className="gradient-text">Dream Home</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6" />
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Ready to turn your dream into reality? Contact us today and let's discuss your future home.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-white border-2 border-lightGray p-8 rounded-2xl shadow-xl">
                            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-lightGray transition-all duration-300 group"
                                    >
                                        <div className="text-accent text-2xl mt-1 group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-navy font-semibold mb-1">{item.title}</h4>
                                            <p className="text-gray-700 text-sm">{item.info}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white border-2 border-lightGray p-8 rounded-2xl shadow-xl"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4">Office Hours</h3>
                            <div className="space-y-2 text-gray-700">
                                <p><span className="text-accent font-semibold">Monday - Saturday:</span> 10:00 AM - 7:00 PM</p>
                                <p><span className="text-accent font-semibold">Sunday:</span> By Appointment</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white border-2 border-lightGray p-8 rounded-2xl space-y-6 shadow-xl">
                            <div>
                                <label className="block text-navy font-semibold mb-2">
                                    <FaUser className="inline mr-2 text-accent" />
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border-2 border-lightGray rounded-lg text-navy focus:border-accent focus:outline-none transition-colors duration-300"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-navy font-semibold mb-2">
                                    <FaEnvelope className="inline mr-2 text-accent" />
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border-2 border-lightGray rounded-lg text-navy focus:border-accent focus:outline-none transition-colors duration-300"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-navy font-semibold mb-2">
                                    <FaPhone className="inline mr-2 text-accent" />
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border-2 border-lightGray rounded-lg text-navy focus:border-accent focus:outline-none transition-colors duration-300"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-navy font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white border-2 border-lightGray rounded-lg text-navy focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane />
                                <span>Send Message</span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
