import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-navy via-primary to-secondary flex items-center justify-center z-50">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="text-6xl font-bold gradient-text mb-4"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    AASMA INFRA
                </motion.div>
                <motion.div
                    className="flex justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-accent rounded-full"
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Loader
