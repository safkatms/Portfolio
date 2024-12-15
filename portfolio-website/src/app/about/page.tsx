import React from "react";
import Header from "../components/header";
import Skills from "../components/skills";
import Educational from "../components/educational";

export default function About() {
  return (
    <>
      <Header />
      <div className="text-white min-h-screen p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center text-4xl font-extrabold mb-10">
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              About
            </span>
          </h1>

          {/* Tabs Section */}
          <div className="flex justify-center mb-16">
            <a
              href="#education"
              className="px-6 py-3 mx-2 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold rounded-full cursor-pointer hover:from-green-400 hover:to-yellow-500 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl"
            >
              Education
            </a>
            <a
              href="#skills"
              className="px-6 py-3 mx-2 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold rounded-full cursor-pointer hover:from-green-400 hover:to-yellow-500 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl"
            >
              Skills
            </a>
            <a
              href="#hobbies"
              className="px-6 py-3 mx-2 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold rounded-full cursor-pointer hover:from-green-400 hover:to-yellow-500 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl"
            >
              Hobbies
            </a>
            <a
              href="#personal"
              className="px-6 py-3 mx-2 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold rounded-full cursor-pointer hover:from-green-400 hover:to-yellow-500 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl"
            >
              Personal
            </a>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Education Section */}
            <Educational/>
            <hr />
            {/* Skills Section */}
            <Skills/>
            <hr />
            {/* Hobbies Section */}
            <section id="hobbies" className="min-h-screen">
              <h2 className="text-3xl font-bold text-pink-500 mb-6">Hobbies</h2>
              <p className="text-gray-300">
                Details about your hobbies go here. Share personal interests
                that make you unique and add depth to your profile.
              </p>
            </section>

            {/* Personal Section */}
            <section id="personal" className="min-h-screen">
              <h2 className="text-3xl font-bold text-pink-500 mb-6">
                Personal
              </h2>
              <p className="text-gray-300">
                Personal details about yourself can be added here. Mention
                achievements, aspirations, or other personal information you
                want to highlight.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
