import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaFileDownload } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const siteMeta = {
    email: "posinaraghubabu9177@gmail.com",
    phone: "+91 7013855177",
    linkedin: "https://www.linkedin.com/in/raghu-babu-posina-08400a255",
    github: "https://github.com/raghuposina11",
    resume: process.env.PUBLIC_URL + "/RAGHUBABU_POSINA_RESUME.pdf",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}! I will reply to ${form.email} soon.`);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left panel with contact info */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg mb-4">Let's Connect</h4>

            <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <FaEnvelope /> <a href={`mailto:${siteMeta.email}`} className="hover:underline">{siteMeta.email}</a>
            </p>

            <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mt-3">
              <FaPhone /> {siteMeta.phone}
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href={siteMeta.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href={siteMeta.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded bg-gray-800 text-white hover:bg-gray-900"
              >
                <FaGithub /> GitHub
              </a>
            </div>

            <a
              href={siteMeta.resume}
              download
              className="flex items-center gap-2 mt-6 px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FaFileDownload /> Download Resume
            </a>
          </div>

          {/* Contact form */}
          <form onSubmit={onSubmit} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <label className="block text-sm">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-2 p-2 rounded bg-gray-100 dark:bg-gray-700"
            />

            <label className="block text-sm mt-4">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-2 p-2 rounded bg-gray-100 dark:bg-gray-700"
            />

            <label className="block text-sm mt-4">Message</label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-2 p-2 rounded bg-gray-100 dark:bg-gray-700"
              rows={5}
            ></textarea>

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
