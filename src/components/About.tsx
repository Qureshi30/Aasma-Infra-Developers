import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBuilding, FaAward, FaHandshake } from 'react-icons/fa'

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const features = [
        {
            icon: <FaBuilding className="text-5xl" />,
            title: "Quality Construction",
            description: "Meticulously designed residential and commercial spaces with attention to every detail"
        },
        {
            icon: <FaAward className="text-5xl" />,
            title: "25+ Years Legacy",
            description: "Over two decades of excellence in South Mumbai's real estate sector"
        },
        {
            icon: <FaHandshake className="text-5xl" />,
            title: "Trust & Integrity",
            description: "Building lasting relationships through commitment and customer satisfaction"
        }
    ]

    return (
        <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-20 right-20 w-64 h-64 border-4 border-accent rounded-full" />
                <div className="absolute bottom-20 left-20 w-48 h-48 border-4 border-accent" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.div variants={itemVariants} className="mb-4">
                        <span className="text-accent text-lg font-semibold tracking-wider">OUR STORY</span>
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About <span className="gradient-text">AASMA INFRA</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="w-24 h-1 bg-accent mx-auto" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-12 items-center mb-16"
                >
                    <motion.div variants={itemVariants} className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            With over <span className="text-accent font-bold">25 years of legacy</span> in the real estate and construction sector, AASMA has earned a solid reputation for delivering quality and trust across South Bombay.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Founded with a vision to build not just structures but lasting relationships, the company has successfully delivered more than <span className="text-accent font-bold">1 lakh square feet</span> of thoughtfully designed and meticulously constructed residential and commercial spaces.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            AASMA's portfolio reflects a commitment to architectural excellence, timely execution, and customer satisfaction. From boutique apartments to midrise urban redevelopments, every project stands as a testament to innovation, integrity, and intelligent planning.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                        <div className="glass p-8 rounded-2xl">
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Building"
                                className="rounded-xl w-full h-auto shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="glass p-8 rounded-xl text-center group cursor-pointer"
                        >
                            <motion.div
                                className="text-accent mb-4 flex justify-center"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default About
