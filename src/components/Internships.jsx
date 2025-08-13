import { motion } from "framer-motion";

export default function Internships() {
  const internships = [
    {
      title: "Salesforce Developer Virtual Intern",
      company: "SmartBridge / Smart Internz",
      year: "Aug – Oct 2022",
      details: "Customized Salesforce apps, implemented automation workflows."
    },
    {
      title: "Front-End Developer Virtual Intern",
      company: "AICTE Edu-Skills",
      year: "Jul – Oct 2023",
      details: "Built responsive UI components using HTML, CSS, React.js."
    },
    {
      title: "AI & ML Virtual Intern",
      company: "AICTE Edu-Skills",
      year: "May – Jun 2024",
      details: "Developed ML models for prediction tasks using Python, Pandas, scikit-learn."
    }
  ];

  return (
    <section id="internships" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Internships</h2>
        <div className="relative border-l-4 border-green-500">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute w-4 h-4 bg-green-500 rounded-full mt-2 -left-2"></div>
              <h3 className="text-xl font-semibold">{intern.title}</h3>
              <p className="text-gray-500">{intern.company} • {intern.year}</p>
              <p className="mt-2">{intern.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
