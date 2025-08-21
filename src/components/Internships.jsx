import { motion } from "framer-motion";

export default function Internships() {
  // Internships array separate from DATA
  const internships = [
    {
      title: "Salesforce Developer Virtual Intern",
      company: "SmartBridge / Smart Internz",
      year: "Aug – Oct 2022",
      details:
        "Worked on customizing Salesforce applications by creating custom objects, workflows, and automation processes. Gained hands-on experience with Salesforce Lightning, Apex, and process builder to improve business operations.",
      skills: ["Salesforce", "Apex", "Lightning", "Automation Workflows","Apex Programming"," Lightning Web Components (LWC)","Agile","Salesforce AppExchange Integration "],
      image: process.env.PUBLIC_URL + "/certificates/Salesforce_Certificate.png",
    },
    {
      title: "Front-End Developer Virtual Intern",
      company: "AICTE Edu-Skills",
      year: "Feb – April 2024",
      details:
        "Designed and developed responsive user interfaces using HTML, CSS, and React.js. Implemented reusable components and integrated APIs to enhance the user experience and frontend performance.",
      skills: ["HTML", "CSS","JavaScript", "React.js","Git","REST APIs", "Responsive Design", "API Integration","Agile Methodologies"],
      image: process.env.PUBLIC_URL + "/certificates/Frontend_Certificate.png",
    },
    {
      title: "AI & ML Virtual Intern",
      company: "AICTE Edu-Skills",
      year: "April – Jun 2024",
      details:
        "Built and trained machine learning models for prediction tasks using Python libraries such as Pandas and scikit-learn. Conducted data preprocessing, feature engineering, and model evaluation to ensure high accuracy.",
      skills: ["Python","Machine Learning","Deep Learning", "Pandas", "scikit-learn", "Data Preprocessing", "ML Modeling"],
      image: process.env.PUBLIC_URL + "/certificates/AI-ML_Certificate.png",
    },
     {
      title: "Natural Language Processing Virtual Intern",
      company: "International Institute of Information Technology Hyderabad (IIITH)",
      year: "Jun – Agu 2023",
      details:
        "Built and trained machine learning models for prediction tasks using Python libraries such as Pandas and scikit-learn. Conducted data preprocessing, feature engineering, and model evaluation to ensure high accuracy.",
      skills: ["Python", "Pandas", "scikit-learn", "Data Preprocessing", "ML Modeling","Git","NLTK","spaCy","Text Processing","TensorFlow","PyTorch"],
      image: process.env.PUBLIC_URL + "/certificates/NLP_Certificate.png",
    }
  ];

  return (
    <section id="internships" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Internships</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={intern.image}
                alt={intern.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{intern.title}</h3>
                <p className="text-gray-500">
                  {intern.company} • {intern.year}
                </p>
                <p className="mt-3 text-sm">{intern.details}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {intern.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
