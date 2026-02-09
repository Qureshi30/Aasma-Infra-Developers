import Projects from '../components/Projects'
import { motion } from 'framer-motion'

const ProjectsPage = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-20 md:py-24 flex items-center justify-center bg-gradient-to-br from-navy via-primary to-secondary overflow-hidden">
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
                        Our <span className="gradient-text">Projects</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Discover Our Portfolio of Exceptional Developments
                    </motion.p>
                </div>
            </section>

            {/* Projects Component */}
            <Projects />

            {/* Before & After Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-lightGray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">
                            Transformation <span className="gradient-text">Gallery</span>
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            See how we transform spaces into exceptional living environments
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {[
                            {
                                before: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
                                after: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
                                title: "Heritage Restoration"
                            },
                            {
                                before: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
                                after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
                                title: "Modern Redevelopment"
                            }
                        ].map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white border-2 border-lightGray rounded-2xl overflow-hidden shadow-xl"
                            >
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy text-center py-4 bg-lightGray">
                                    {project.title}
                                </h3>
                                <div className="grid grid-cols-2">
                                    <div className="relative group">
                                        <img src={project.before} alt="Before" className="w-full h-64 object-cover" />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <span className="text-white text-base sm:text-lg md:text-2xl font-bold">BEFORE</span>
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <img src={project.after} alt="After" className="w-full h-64 object-cover" />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-accent text-base sm:text-lg md:text-2xl font-bold">AFTER</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectsPage
