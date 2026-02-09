import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBuilding, FaAward, FaHandshake } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const HomeAbout = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const navigate = useNavigate()

    const highlights = [
        { icon: <FaBuilding />, title: "Quality Construction", description: "Premium materials and expert craftsmanship" },
        { icon: <FaAward />, title: "25+ Years Experience", description: "Trusted legacy in South Mumbai" },
        { icon: <FaHandshake />, title: "Customer First", description: "Building relationships, not just structures" }
    ]

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-20 w-64 h-64 border-8 border-accent rounded-full" />
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-navy" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-bold text-sm tracking-widest mb-4 block">WHO WE ARE</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
                        Building <span className="gradient-text">South Mumbai's Future</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        With over 25 years of excellence in construction and real estate, AASMA INFRA has successfully
                        delivered more than 1 lakh square feet of premium residential and commercial spaces across South Mumbai.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                            className="bg-white border-2 border-lightGray hover:border-accent p-8 rounded-xl text-center group cursor-pointer transition-all duration-300 shadow-lg"
                        >
                            <motion.div
                                className="text-accent text-4xl sm:text-5xl md:text-6xl mb-6 flex justify-center"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                {item.icon}
                            </motion.div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy mb-4 group-hover:text-accent transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            <div className="mt-6 w-16 h-1 bg-accent mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/about')}
                        className="bg-accent text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-lg"
                    >
                        Learn More About Us
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default HomeAbout
