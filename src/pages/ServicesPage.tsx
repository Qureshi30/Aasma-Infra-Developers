import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBuilding, FaHammer, FaHome, FaPaintBrush, FaTools, FaCity, FaCheckCircle } from 'react-icons/fa'

const ServicesPage = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const services = [
        {
            icon: <FaBuilding />,
            title: "General Contracting",
            description: "Complete turnkey construction solutions from foundation to finishing. We handle all aspects of your construction project with precision and expertise.",
            features: ["Project Management", "Quality Control", "Timely Delivery", "Budget Management"]
        },
        {
            icon: <FaHome />,
            title: "Residential Construction",
            description: "Boutique apartments and luxury homes designed for modern living. Each residence is crafted with attention to detail and quality materials.",
            features: ["Custom Designs", "Premium Materials", "Modern Amenities", "Vastu Compliant"]
        },
        {
            icon: <FaCity />,
            title: "Urban Redevelopment",
            description: "Specialized in South Mumbai redevelopment projects. We transform old structures into modern landmarks while preserving heritage values.",
            features: ["Heritage Compliance", "Tenant Rehabilitation", "Regulatory Approvals", "Community Focus"]
        },
        {
            icon: <FaHammer />,
            title: "Renovation & Remodeling",
            description: "Complete renovation services to breathe new life into existing spaces. From minor upgrades to complete transformations.",
            features: ["Interior Redesign", "Structural Updates", "Modern Upgrades", "Minimal Disruption"]
        },
        {
            icon: <FaPaintBrush />,
            title: "Interior Design",
            description: "Thoughtful interior design that combines aesthetics with functionality. Creating spaces that reflect your lifestyle and aspirations.",
            features: ["Custom Layouts", "Material Selection", "Lighting Design", "Furniture Planning"]
        },
        {
            icon: <FaTools />,
            title: "Maintenance Services",
            description: "Post-construction maintenance and support services. We ensure your property remains in perfect condition for years to come.",
            features: ["Regular Maintenance", "Emergency Repairs", "Warranty Support", "24/7 Assistance"]
        }
    ]

    const process = [
        { step: "01", title: "Consultation", description: "Understanding your requirements and vision" },
        { step: "02", title: "Planning", description: "Detailed project planning and design" },
        { step: "03", title: "Approval", description: "Obtaining necessary regulatory approvals" },
        { step: "04", title: "Execution", description: "Professional construction with quality control" },
        { step: "05", title: "Handover", description: "Final inspection and project delivery" }
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full filter blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        Our <span className="gradient-text">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Comprehensive Construction Solutions for Every Need
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-800" ref={ref}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="glass p-8 rounded-2xl group cursor-pointer"
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        repeatDelay: 1,
                                        delay: index * 0.3
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    className="text-accent text-5xl mb-6"
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    {service.description}
                                </p>
                                <div className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-gray-300">
                                            <FaCheckCircle className="text-accent flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our <span className="gradient-text">Process</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A streamlined approach to ensure quality delivery and client satisfaction
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-6">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="glass p-6 rounded-2xl mb-4">
                                    <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-accent/30" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why Choose <span className="gradient-text">AASMA INFRA</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            "25+ Years of Industry Experience",
                            "1 Lakh+ Sq. Ft. Successfully Delivered",
                            "100% Quality Assurance",
                            "Timely Project Completion",
                            "Transparent Communication",
                            "Post-Construction Support",
                            "Regulatory Compliance Expertise",
                            "Customer-Centric Approach"
                        ].map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex items-center gap-4 glass p-6 rounded-xl"
                            >
                                <FaCheckCircle className="text-accent text-2xl flex-shrink-0" />
                                <span className="text-white text-lg">{point}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesPage
