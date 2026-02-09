import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const ref = useRef(null)
    const navigate = useNavigate()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <section id="home" ref={ref} className="relative h-screen overflow-hidden">
            {/* Background Image Collage with Enhanced Effects */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                {/* Multiple background images for collage effect with animations */}
                <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                    <motion.div
                        className="relative overflow-hidden"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <motion.img
                            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=1200&fit=crop"
                            alt="Luxury Interior 1"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            whileHover={{ scale: 1.05 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
                    </motion.div>
                    <motion.div
                        className="relative overflow-hidden"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <motion.img
                            src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=1200&fit=crop"
                            alt="Modern Living Space"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            whileHover={{ scale: 1.05 }}
                        />
                        <div className="absolute inset-0 bg-navy/40" />
                    </motion.div>
                    <motion.div
                        className="relative overflow-hidden"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <motion.img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1200&fit=crop"
                            alt="Premium Architecture"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            whileHover={{ scale: 1.05 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-primary/60 to-transparent" />
                    </motion.div>
                </div>

                {/* Premium dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/75" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-primary/30" />

                {/* Animated accent elements */}
                <div className="absolute inset-0 opacity-30">
                    <motion.div
                        className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full filter blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full filter blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    />
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-accent opacity-50" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-accent opacity-50" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 h-full flex items-center justify-center text-center"
            >
                <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 w-full flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-12 sm:mt-14 md:mt-20 mb-4 sm:mb-5 md:mb-6"
                    >
                        <motion.span
                            className="inline-block bg-gradient-to-r from-accent/40 via-accent/30 to-accent/40 text-white text-[11px] xs:text-xs sm:text-sm md:text-base font-bold tracking-tight sm:tracking-wide md:tracking-wider px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-full border-2 border-accent backdrop-blur-md shadow-2xl max-w-[95vw]"
                            style={{ textShadow: '0 2px 10px rgba(0,0,0,1)' }}
                            whileHover={{ scale: 1.05, borderWidth: 3 }}
                            animate={{
                                boxShadow: [
                                    "0 0 20px rgba(245, 158, 11, 0.3)",
                                    "0 0 40px rgba(245, 158, 11, 0.5)",
                                    "0 0 20px rgba(245, 158, 11, 0.3)",
                                ],
                            }}
                            transition={{
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            ⭐ SOUTH MUMBAI'S PREMIER BUILDER ⭐
                        </motion.span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mb-4 sm:mb-6 md:mb-8 leading-tight"
                    >
                        <motion.span
                            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 sm:mb-3 md:mb-4"
                            style={{
                                textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7), 0 0 50px rgba(30, 58, 138, 0.5)'
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            Building Your
                        </motion.span>
                        <motion.span
                            className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black"
                            style={{
                                background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #f59e0b 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 0 40px rgba(245, 158, 11, 0.5)',
                                filter: 'drop-shadow(3px 3px 10px rgba(0,0,0,0.8))'
                            }}
                            animate={{
                                filter: [
                                    'drop-shadow(3px 3px 10px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(245, 158, 11, 0.5))',
                                    'drop-shadow(3px 3px 10px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(245, 158, 11, 0.8))',
                                    'drop-shadow(3px 3px 10px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(245, 158, 11, 0.5))',
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Dream Spaces
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="mb-6 sm:mb-8 md:mb-10"
                    >
                        <motion.div
                            className="inline-block bg-white/20 backdrop-blur-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-2xl mb-4 sm:mb-6 border-2 border-white/40 shadow-2xl"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
                        >
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-black tracking-wide" style={{ textShadow: '0 2px 10px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.8)' }}>
                                🏆 Since 1999 | 25+ Years of Excellence 🏆
                            </p>
                        </motion.div>
                        <motion.p
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-4xl mx-auto font-bold px-4 leading-relaxed"
                            style={{ textShadow: '0 2px 10px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.9)' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                        >
                            Transforming South Mumbai's skyline with <span className="text-accent">1 Lakh+ Sq. Ft.</span> of premium residential & commercial spaces
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-8 sm:mb-12"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.08,
                                boxShadow: "0 25px 50px rgba(245, 158, 11, 0.5)",
                                y: -5
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/projects')}
                            className="group relative bg-gradient-to-r from-accent via-amber-500 to-accent text-white px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl font-black text-base sm:text-lg md:text-xl hover:from-amber-600 hover:via-accent hover:to-amber-600 transition-all duration-300 shadow-2xl overflow-hidden"
                            animate={{
                                boxShadow: [
                                    "0 10px 30px rgba(245, 158, 11, 0.3)",
                                    "0 15px 40px rgba(245, 158, 11, 0.5)",
                                    "0 10px 30px rgba(245, 158, 11, 0.3)",
                                ]
                            }}
                            transition={{
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                🏗️ View Projects
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                initial={{ x: '-100%' }}
                                animate={{ x: '200%' }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatDelay: 1
                                }}
                            />
                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.08,
                                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.4)",
                                backgroundColor: 'rgba(255,255,255,1)',
                                y: -5
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                            className="bg-white/95 backdrop-blur-sm text-navy px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl font-black text-base sm:text-lg md:text-xl hover:bg-white transition-all duration-300 shadow-2xl border-2 border-white/50"
                        >
                            <span className="flex items-center gap-2">
                                📞 Get Free Consultation
                            </span>
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
