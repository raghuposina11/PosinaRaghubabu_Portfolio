// src/components/Certification.jsx
import React from "react";

const certifications = [
  {
    title: "Python",
    issuer: "Infosys",
    year: "2023",
    description:
      "Completed Python training covering fundamentals, data structures, OOP, file handling, and API integration.",
    img: process.env.PUBLIC_URL + "/certifications/infosys_python.png",
  },
  {
    title: "Machine Learning with Go",
    issuer: "Infosys",
    year: "2023",
    description:
      "Learned how to build machine learning models using Go language, focusing on data processing and predictive analytics.",
    img: process.env.PUBLIC_URL + "/certifications/ML_Infosys.png",
  },
  {
    title: "ServiceNow System Administrator",
    issuer: "EduSkills",
    year: "2023",
    description:
      "Gained expertise in configuring and managing ServiceNow instances, including user management, workflows, and integrations.",
    img: process.env.PUBLIC_URL + "/certifications/servicenow_futureskills.png",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2023",
    description:
      "Learned fundamentals of generative AI, prompt engineering, and applications of AI in modern workflows.",
    img: process.env.PUBLIC_URL + "/certifications/Ai_Microsoft.png",
  },
  {
    title: "Agile Methodology Virtual Experience Program",
    issuer: "Cognizant",
    year: "2023",
    description:
      "Understood Agile principles, Scrum framework, sprint planning, and project delivery methodologies.",
    img: process.env.PUBLIC_URL + "/certifications/Agile_Cognizant.png",
  },
  {
    title: "Get Started with Microsoft Cloud",
    issuer: "Microsoft",
    year: "2023",
    description:
      "Introduction to Microsoft Azure cloud services including compute, storage, networking, and security basics.",
    img: process.env.PUBLIC_URL + "/certifications/Ai_cloud_edunet.png",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillBuild",
    year: "2023",
    description:
      "Covered AI basics including supervised learning, unsupervised learning, neural networks, and applications of AI.",
    img: process.env.PUBLIC_URL + "/certifications/Ai_Fundamentals_IBM.png",
  },
  {
    title: "Salesforce Developer Virtual Intern",
    issuer: "SmartBridge / Smart Internz",
    year: "Aug – Oct 2022",
    description:
      "Customized Salesforce applications by creating objects, workflows, and automation. Worked with Apex and Lightning to streamline business processes.",
    img: process.env.PUBLIC_URL + "/certificates/Salesforce_Certificate.png",
  },
  {
    title: "Front-End Developer Virtual Intern",
    issuer: "AICTE Edu-Skills",
    year: "Feb – Apr 2024",
    description:
      "Developed responsive websites using HTML, CSS, and React.js. Built reusable components and integrated REST APIs for dynamic content.",
    img: process.env.PUBLIC_URL + "/certificates/Frontend_Certificate.png",
  },
  {
    title: "AI & ML Virtual Intern",
    issuer: "AICTE Edu-Skills",
    year: "Apr – Jun 2024",
    description:
      "Built and trained machine learning models using Python, Pandas, and scikit-learn. Focused on preprocessing, feature engineering, and accuracy optimization.",
    img: process.env.PUBLIC_URL + "/certificates/AI-ML_Certificate.png",
  },
  {
    title: "Natural Language Processing Virtual Intern",
    issuer: "IIIT Hyderabad",
    year: "Jun – Aug 2023",
    description:
      "Worked on NLP tasks such as text classification, tokenization, embeddings, and sentiment analysis using Python and NLP libraries.",
    img: process.env.PUBLIC_URL + "/certificates/NLP_Certificate.png",
  },
];

const Certification = () => {
  return (
    <section id="Certification" className="py-12 px-5 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                       p-5 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            {/* Certificate Image */}
            <div className="mb-4">
              <img
                src={cert.img}
                alt={`${cert.title} certificate`}
                className="w-full h-56 object-cover rounded-lg border"
              />
            </div>

            {/* Certificate Details */}
            <div>
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {cert.issuer} • {cert.year}
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
