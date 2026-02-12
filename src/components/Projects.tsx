import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaRuler, FaCheckCircle } from 'react-icons/fa'

// Import project images
import SeaviewApartment from '../assets/Projects/SeaviewApartment.png'
import NecklaceApartment from '../assets/Projects/NecklaceApartment.png'
import MohammediPalace from '../assets/Projects/MohammediPalace.png'
import YashviRegency from '../assets/Projects/YashviRegency.png'
import AhmedPalace from '../assets/Projects/AhmedPalace.png'
import UpcomingProject from '../assets/Projects/Upcoming.png'

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all')

    const categories = ['all', 'completed', 'ongoing', 'upcoming']

    const projects = [
        {
            id: 1,
            title: "Sea View Apartment",
            location: "J.S.S. Road, Mumbai",
            area: "15,000 Sq. Ft.",
            status: "completed",
            image: SeaviewApartment
        },
        {
            id: 2,
            title: "Necklace Apartment",
            location: "Chira Bazar, Mumbai",
            area: "20,000 Sq. Ft.",
            status: "completed",
            image: NecklaceApartment
        },
        {
            id: 3,
            title: "Mohammedi Palace",
            location: "Chandanwadi, Mumbai",
            area: "18,000 Sq. Ft.",
            status: "completed",
            image: MohammediPalace
        },
        {
            id: 4,
            title: "Yashvi Regency",
            location: "South Mumbai",
            area: "25,000 Sq. Ft.",
            status: "ongoing",
            image: YashviRegency
        },
        {
            id: 5,
            title: "Ahmed Palace",
            location: "Girgaon, Mumbai",
            area: "12,000 Sq. Ft.",
            status: "ongoing",
            image: AhmedPalace
        },
        {
            id: 6,
            title: "Upcoming Project",
            location: "South Mumbai",
            area: "22,000 Sq. Ft.",
            status: "upcoming",
            image: UpcomingProject
        }
    ]

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.status === activeCategory)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-accent font-bold text-sm tracking-widest mb-4 block">OUR PORTFOLIO</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
                        Explore Our <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-8" />

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold capitalize transition-all duration-300 text-sm sm:text-base border-2 ${activeCategory === category
                                    ? 'bg-accent text-white border-accent shadow-lg'
                                    : 'bg-white text-navy border-navy hover:bg-navy hover:text-white'
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    key={activeCategory}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                            className="group relative overflow-hidden rounded-xl bg-white border-2 border-lightGray hover:border-accent shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Status Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${project.status === 'completed' ? 'bg-green-500 text-white' :
                                        project.status === 'ongoing' ? 'bg-blue-500 text-white' :
                                            'bg-accent text-gray-900'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy mb-3 group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <div className="space-y-2 text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-accent" />
                                        <span className="text-sm font-medium">{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaRuler className="text-accent" />
                                        <span className="text-sm font-medium">{project.area}</span>
                                    </div>
                                    {project.status === 'completed' && (
                                        <div className="flex items-center gap-2">
                                            <FaCheckCircle className="text-green-500" />
                                            <span className="text-sm text-green-500 font-medium">Successfully Delivered</span>
                                        </div>
                                    )}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-4 w-full bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg"
                                >
                                    View Details
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
