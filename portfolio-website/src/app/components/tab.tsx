'use client'
import React, { useState, useEffect } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    // Create an intersection observer to detect when sections are in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id); // Set the active tab based on the section ID
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe the sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full py-4 sticky top-20 z-50 bg-gradient-to-r from-purple-400 to-indigo-500 shadow-md">
      <ul className="flex w-full max-w-4xl justify-center space-x-6">
        <li className="nav-item">
          <a
            href="#education"
            onClick={() => setActiveTab("education")}
            className={`px-1 py-2 text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out ${
              activeTab === "education"
                ? "border-b-4 border-yellow-500 text-yellow-500 transform scale-105"
                : "text-white hover:text-yellow-500 hover:border-b-4 hover:border-yellow-300"
            }`}
          >
            Education
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#skills"
            onClick={() => setActiveTab("skills")}
            className={`px-1 py-2 text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out ${
              activeTab === "skills"
                ? "border-b-4 border-pink-500 text-pink-500 transform scale-105"
                : "text-white hover:text-pink-500 hover:border-b-4 hover:border-pink-300"
            }`}
          >
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#hobbies"
            onClick={() => setActiveTab("hobbies")}
            className={`px-1 py-2 text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out ${
              activeTab === "hobbies"
                ? "border-b-4 border-yellow-500 text-yellow-500 transform scale-105"
                : "text-white hover:text-yellow-500 hover:border-b-4 hover:border-yellow-300"
            }`}
          >
            Hobbies
          </a>
        </li>
        {/* <li className="nav-item">
          <a
            href="#personal"
            onClick={() => setActiveTab("personal")}
            className={`px-1 py-2 text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out ${
              activeTab === "personal"
                ? "border-b-4 border-pink-500 text-pink-500 transform scale-105"
                : "text-white hover:text-pink-500 hover:border-b-4 hover:border-pink-300"
            }`}
          >
            Personal
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Tabs;
