import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import ShakeelChacha from '../assets/ShakeelChacha.png'
import MustufaBhai from '../assets/MustufaBhai.png'
import AhmedImage from '../assets/image.png'

const TeamPage = () => {

    const team = [
        {
            name: "Mr. Shakeel Ahmed Ansari",
            position: "Founder & Principal Visionary",
            image: ShakeelChacha,
            education: "B.E. Civil Engineering",
            experience: "25+ Years",
            bio: "The founder and principal visionary of AASMA GROUP brings over 25 years of extensive experience in the construction and real estate industry. A civil engineering graduate with a strong foundation in architectural planning, project execution, and regulatory compliance, he began his professional journey in the early 1990s. During this period, he collaborated with some of the most prominent builders of Mumbai, gaining unmatched exposure to high-value developments, on-ground challenges, and the complexities of urban redevelopment.",
            expertise: ["Project Management", "Urban Redevelopment", "Regulatory Compliance", "Quality Assurance"],
            values: "Mr. Shakeel has earned tremendous respect for his integrity, sincerity, and hands-on leadership style. His deep-rooted traditional values, combined with a progressive vision, have positioned AASMA GROUP as a trusted name across South Mumbai."
        },
        {
            name: "Mr. Mustafa Ansari",
            position: "Operations Director",
            image: MustufaBhai,
            education: "B.Com, UPSC Civil Services Aspirant",
            experience: "8+ Years",
            bio: "Carrying forward the legacy, Mr. Mustafa Ansari—son of Mr. Shakeel Ahmed—has been actively managing the firm's operations for the past eight years. A graduate in commerce and a former aspirant of the prestigious UPSC Civil Services Examination, Mr. Mustafa combines academic insight with business pragmatism.",
            expertise: ["Business Operations", "Project Efficiency", "Customer Engagement", "Strategic Planning"],
            values: "He is instrumental in introducing new-age strategies to enhance project efficiency, customer engagement, and business expansion, all while upholding the core values set by the founder."
        },
        {
            name: "Mr. Ahmed Ansari",
            position: "Director - Branding & Marketing",
            image: AhmedImage,
            education: "MBA in Family Managed Business",
            experience: "5+ Years",
            bio: "Ahmed, the second son of Mr. Shakeel - founder of AASMA Infra represents the next generation of leadership within the company. Having completed his MBA in Family Managed Business, Ahmed has stepped into the business with fresh ideas, modern insights, and a strong vision for growth.",
            expertise: ["Brand Strategy", "Digital Marketing", "Business Development", "Innovation"],
            values: "He is actively involved in day-to-day operations and is spearheading new innovations, with a special focus on branding, marketing, and building a stronger identity for AASMA Infra."
        }
    ]

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
                        Our <span className="gradient-text">Leadership Team</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Meet the visionaries driving excellence at AASMA INFRA
                    </motion.p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12 sm:space-y-16">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white border-2 border-lightGray hover:border-accent rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
                            >
                                <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                                    {/* Image */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className={`relative h-64 sm:h-80 md:h-[500px] bg-gray-100 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-contain object-center"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                                        <div className="mb-6">
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-2">
                                                {member.name}
                                            </h2>
                                            <p className="text-lg sm:text-xl text-accent font-semibold mb-4">{member.position}</p>

                                            <div className="flex flex-wrap gap-4 mb-6">
                                                <div className="flex items-center gap-2 text-navy">
                                                    <FaGraduationCap className="text-accent" />
                                                    <span className="text-sm font-semibold">{member.education}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-navy">
                                                    <FaBriefcase className="text-accent" />
                                                    <span className="text-sm font-semibold">{member.experience}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-800 text-sm sm:text-base mb-6 leading-relaxed">
                                            {member.bio}
                                        </p>

                                        <div className="mb-6">
                                            <h4 className="text-base sm:text-lg font-bold text-navy mb-3">Areas of Expertise</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {member.expertise.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-2 bg-accent/10 border-2 border-accent text-accent rounded-full text-xs sm:text-sm font-bold"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-gray-800 text-sm sm:text-base italic mb-6 leading-relaxed">
                                            {member.values}
                                        </p>

                                        <div className="flex gap-4">
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                href="#"
                                                className="text-2xl text-accent hover:text-amber-600 transition-colors"
                                            >
                                                <FaLinkedin />
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                href="mailto:info@aasmainfracon.com"
                                                className="text-2xl text-accent hover:text-amber-600 transition-colors"
                                            >
                                                <FaEnvelope />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Values */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                            Leadership <span className="gradient-text">Philosophy</span>
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
                            Our leadership team brings together decades of experience, innovative thinking, and unwavering commitment to excellence. With a perfect blend of traditional values and modern business acumen, they guide AASMA INFRA towards sustainable growth while maintaining the highest standards of integrity and customer satisfaction.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="glass inline-block px-8 py-4 rounded-full"
                        >
                            <p className="text-navy text-lg font-semibold">
                                <span className="text-accent font-bold">Three Generations</span> of Construction Excellence
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default TeamPage
