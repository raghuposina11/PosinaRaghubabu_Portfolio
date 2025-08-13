import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-1 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
            <img
              src="/Requirements/profile.jpg" // place your image here
              alt="Raghu Babu Posina"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Your About Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <h3 className="text-3xl font-bold">About Me</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            I am <span className="font-semibold">Raghu Babu Posina</span>, an entry-level Software Developer 
            skilled in Python, JavaScript, React.js, Node.js, and SQL, with hands-on experience in full-stack 
            development, REST API integration, and machine learning through academic projects and internships. 
            Seeking to contribute to innovative projects while continuously upskilling in cloud computing, DevOps, 
            and modern frameworks.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
              <h4 className="font-semibold">Education</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                B.Tech in Computer Science (AI & ML) | Diploma in Mechanical Engineering
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
              <h4 className="font-semibold">Interests</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Playing Cricket, Photography, Watching Movies, Listening to Music
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
