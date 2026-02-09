import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHome, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'

const Stats = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    const stats = [
        { icon: <FaCalendarAlt />, number: "25+", label: "Years Experience", suffix: "" },
        { icon: <FaHome />, number: "1", label: "Sq. Ft. Delivered", suffix: " Lakh+" },
        { icon: <FaMapMarkerAlt />, number: "50+", label: "Projects Completed", suffix: "" },
        { icon: <FaUsers />, number: "500+", label: "Happy Families", suffix: "" }
    ]

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy via-primary to-navy relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-10 left-10 w-64 h-64 border-2 border-accent rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-10 right-10 w-64 h-64 border-2 border-secondary rounded-full"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-accent font-bold text-sm tracking-widest mb-4 block">OUR ACHIEVEMENTS</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Proven Track Record of <span className="gradient-text">Excellence</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="text-center group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent transition-all duration-300"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="text-accent text-4xl sm:text-5xl md:text-6xl mb-4 flex justify-center"
                            >
                                {stat.icon}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
                            >
                                {stat.number}<span className="text-accent">{stat.suffix}</span>
                            </motion.div>
                            <div className="text-gray-300 text-sm md:text-base font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
