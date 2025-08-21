import { useEffect, useState } from "react";
import { DATA } from "../data";
import { FaFileDownload, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(true); // start in dark mode

  // Apply theme on change
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // On first load, check saved theme or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDark(savedTheme === "dark");
    } else {
      setDark(true); // default to dark if no saved preference
    }
  }, []);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {DATA.name}
        </h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
           <a href="#Certification" className="hover:text-blue-500">
            Certification
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
          <a
            href={DATA.resume}
            download
            className="flex items-center space-x-1 text-blue-600 hover:underline"
          >
            <FaFileDownload /> <span>Resume</span>
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
