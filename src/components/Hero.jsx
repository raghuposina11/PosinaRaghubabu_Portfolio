import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 text-center 
      bg-gradient-to-b from-gray-100 via-gray-200 to-white 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-900 dark:text-white transition-colors duration-500">
      
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        RAGHUBABU POSINA
      </motion.h1>

      <motion.p
        className="mt-4 text-xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full Stack Developer | AI & ML Enthusiast
      </motion.p>

      <motion.a
        href="#contact"
        className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 
          text-white px-6 py-3 rounded-lg shadow-lg transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.a>
    </section>
  );
}
