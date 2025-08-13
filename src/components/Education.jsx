import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science (AI & ML)",
      institution: "Kakinada Institute of Engineering and Technology",
      year: "2021 – 2024",
      details: "CGPA: 7.2 | Specialized in AI & ML, completed multiple full-stack and ML projects."
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Aditya Polytechnic College",
      year: "2018 – 2021",
      details: "Percentage: 82% | Built foundational technical problem-solving skills."
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="relative border-l-4 border-blue-500">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full mt-2 -left-2"></div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-500">{edu.institution} • {edu.year}</p>
              <p className="mt-2">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
