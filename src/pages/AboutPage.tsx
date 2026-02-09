import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaAward, FaHandshake, FaLightbulb, FaHeart } from 'react-icons/fa'

const AboutPage = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const values = [
        { icon: <FaHandshake />, title: "Integrity", description: "Transparent dealings and ethical practices in every project" },
        { icon: <FaLightbulb />, title: "Innovation", description: "Modern engineering blended with timeless aesthetics" },
        { icon: <FaAward />, title: "Excellence", description: "Uncompromising quality and attention to detail" },
        { icon: <FaHeart />, title: "Trust", description: "Building lasting relationships with clients and community" }
    ]

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
                        About <span className="gradient-text">AASMA INFRA</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        25 Years of Building Excellence in South Mumbai
                    </motion.p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20 bg-white" ref={ref}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                            Our <span className="gradient-text">Story</span>
                        </h2>
                        <div className="space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                            <p>
                                With over <span className="text-accent font-bold">25 years of legacy</span> in the real estate and construction sector, AASMA has earned a solid reputation for delivering quality and trust across South Bombay. Founded with a vision to build not just structures but lasting relationships, the company has successfully delivered more than <span className="text-accent font-bold">1 lakh square feet</span> of thoughtfully designed and meticulously constructed residential and commercial spaces.
                            </p>
                            <p>
                                AASMA's portfolio reflects a commitment to architectural excellence, timely execution, and customer satisfaction. Over the years, the firm has played a vital role in shaping the skyline of South Mumbai, one landmark at a time. From boutique apartments to midrise urban redevelopments, every project stands as a testament to AASMA's focus on innovation, integrity, and intelligent planning.
                            </p>
                            <p>
                                Driven by values and guided by experience, AASMA continues to evolve with the city—building spaces that reflect the aspirations of modern urban living while staying rooted in trust and tradition.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision, Mission, Values */}
            <section className="py-20 bg-gradient-to-r from-navy via-primary to-navy">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass p-8 rounded-2xl text-center"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-4">Our Vision</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To redefine the skyline of South Bombay with landmark developments that blend timeless aesthetics, modern engineering, and uncompromising trust—becoming the most respected and sought-after boutique real estate brand in the region.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass p-8 rounded-2xl text-center"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-4">Our Mission</h3>
                            <div className="text-gray-300 leading-relaxed space-y-2">
                                <p>• Creating exceptional living and commercial spaces that elevate lifestyles</p>
                                <p>• Upholding transparency, integrity, and quality in every square foot we build</p>
                                <p>• Nurturing strong relationships with our clients, partners and community through personalized service and long-term value creation</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass p-8 rounded-2xl text-center"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-4">Our Values</h3>
                            <div className="space-y-4">
                                {values.map((value, index) => (
                                    <div key={index} className="flex items-center gap-3 text-left">
                                        <div className="text-accent text-2xl flex-shrink-0">{value.icon}</div>
                                        <div>
                                            <h4 className="text-white font-bold">{value.title}</h4>
                                            <p className="text-gray-400 text-sm">{value.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-lightGray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                            Our <span className="gradient-text">Services</span>
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Comprehensive construction and real estate solutions
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {[
                            { title: "Residential Construction", desc: "Boutique apartments and luxury homes" },
                            { title: "Urban Redevelopment", desc: "Heritage-sensitive transformation projects" },
                            { title: "General Contracting", desc: "Complete turnkey construction solutions" },
                            { title: "Project Management", desc: "End-to-end project execution and oversight" },
                            { title: "Renovation Services", desc: "Complete property upgrades and remodeling" },
                            { title: "Tenant Rehabilitation", desc: "Smooth relocation and rehabilitation services" }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                                className="bg-white border-2 border-lightGray hover:border-accent p-6 rounded-xl shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                            Our <span className="gradient-text">Service Areas</span>
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Serving the prime locations of South Mumbai with excellence
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border-2 border-lightGray p-8 rounded-2xl max-w-4xl mx-auto shadow-xl"
                    >
                        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-4">Primary Service Areas</h3>
                                <ul className="space-y-2">
                                    <li>• Chira Bazar</li>
                                    <li>• J.S.S. Road</li>
                                    <li>• Chandanwadi</li>
                                    <li>• Girgaon</li>
                                    <li>• Colaba</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-4">Coverage</h3>
                                <ul className="space-y-2">
                                    <li>• South Mumbai - Complete Coverage</li>
                                    <li>• Heritage Zone Developments</li>
                                    <li>• Urban Redevelopment Projects</li>
                                    <li>• Premium Residential Areas</li>
                                    <li>• Commercial Spaces</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
