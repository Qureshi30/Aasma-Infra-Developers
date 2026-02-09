import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const testimonials = [
        {
            name: "Mr. Kulkarni",
            project: "Sea View Residency",
            rating: 5,
            text: "AASMA INFRA delivered exactly what they promised—quality construction with complete transparency. The team was always cooperative, and every stage of the project was completed on time. We truly appreciate their sincerity and the personal involvement of Mr. Shakeel throughout the process. Buying our home from AASMA was one of our best decisions.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
        },
        {
            name: "Mrs. Sharma",
            project: "Chira Bazar Heights",
            rating: 5,
            text: "Excellent work quality and timely delivery. The attention to detail in construction is commendable. Mr. Shakeel and his team were always available to address our concerns. Highly recommend AASMA INFRA for anyone looking for trustworthy builders.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
        },
        {
            name: "Mr. Desai",
            project: "Chandanwadi Premium",
            rating: 5,
            text: "Professional team with great execution. They maintained high standards throughout the construction. The quality of materials used and the finishing work exceeded our expectations. Very happy with our new home.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
        },
        {
            name: "Mr. Patel",
            project: "South Mumbai Towers",
            rating: 5,
            text: "Outstanding service from start to finish. The transparency in dealings and commitment to quality made the entire process smooth. AASMA INFRA lives up to their reputation of being South Mumbai's trusted builder.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full filter blur-3xl" />
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary rounded-full filter blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-bold text-sm tracking-widest mb-4 block">CLIENT TESTIMONIALS</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6" />
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
                        Read what our satisfied clients have to say about their experience with AASMA INFRA
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                            className="bg-white border-2 border-lightGray hover:border-accent p-8 rounded-2xl relative group transition-all duration-300 shadow-lg"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-accent/20 text-5xl">
                                <FaQuoteLeft />
                            </div>

                            {/* Content */}
                            <div className="flex items-start gap-4 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-3 border-accent shadow-lg"
                                />
                                <div className="flex-1">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-navy mb-1 group-hover:text-accent transition-colors">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600 mb-2 font-medium">{testimonial.project}</p>
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-accent text-base" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed relative z-10">
                                "{testimonial.text}"
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-navy via-primary to-navy inline-block px-10 py-5 rounded-2xl shadow-2xl">
                        <p className="text-white text-base sm:text-lg md:text-xl">
                            <span className="text-accent font-bold text-xl sm:text-2xl md:text-3xl">500+</span> Happy Families Trust AASMA INFRA
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
