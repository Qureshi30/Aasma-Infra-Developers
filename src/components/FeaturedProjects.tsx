import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt, FaRuler, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

// Import project images
import SeaviewApartment from '../assets/Projects/SeaviewApartment.png'
import NecklaceApartment from '../assets/Projects/NecklaceApartment.png'
import YashviRegency from '../assets/Projects/YashviRegency.png'

const FeaturedProjects = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const navigate = useNavigate()

    const featuredProjects = [
        {
            id: 1,
            title: "Sea View Apartment",
            location: "J.S.S. Road, Mumbai",
            area: "15,000 Sq. Ft.",
            status: "Completed",
            image: SeaviewApartment,
            description: "Luxury boutique apartments with modern amenities"
        },
        {
            id: 2,
            title: "Necklace Apartment",
            location: "Chira Bazar, Mumbai",
            area: "20,000 Sq. Ft.",
            status: "Completed",
            image: NecklaceApartment,
            description: "Premium residential complex in heritage area"
        },
        {
            id: 3,
            title: "Yashvi Regency",
            location: "South Mumbai",
            area: "25,000 Sq. Ft.",
            status: "Ongoing",
            image: YashviRegency,
            description: "Modern high-rise with cutting-edge design"
        }
    ]

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-lightGray relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-bold text-sm tracking-widest mb-4 block">FEATURED WORK</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
                        Our Signature <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Explore some of our landmark developments across South Mumbai that showcase our commitment to excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                            className="group relative overflow-hidden rounded-xl bg-white shadow-xl border-2 border-transparent hover:border-accent transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.6 }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                                <div className="absolute top-4 right-4">
                                    <span className={`px-4 py-2 rounded-lg text-xs font-bold shadow-lg ${project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-secondary text-white'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Overlay Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                                <div className="space-y-3 text-gray-700 text-sm">
                                    <div className="flex items-center gap-3 bg-lightGray p-3 rounded-lg">
                                        <FaMapMarkerAlt className="text-accent text-lg" />
                                        <span className="font-medium">{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-lightGray p-3 rounded-lg">
                                        <FaRuler className="text-accent text-lg" />
                                        <span className="font-medium">{project.area}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/projects')}
                        className="inline-flex items-center gap-3 bg-accent text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-lg"
                    >
                        View All Projects
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default FeaturedProjects
