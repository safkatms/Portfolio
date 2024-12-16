import React from "react";
import Skills from "../components/skills";
import Educational from "../components/educational";
import Tabs from "../components/tab";
import Hobbies from "../components/hobbies";

export default function About() {
  return (
    <>
      <div className="text-white min-h-screen p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center text-4xl font-extrabold mb-10">
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              About
            </span>
          </h1>

          {/* Tabs Section */}
          <Tabs/>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Education Section */}
            <Educational />
            <hr />
            {/* Skills Section */}
            <Skills />
            <hr />
            {/* Hobbies Section */}
            <Hobbies/>
          </div>
        </div>
      </div>
    </>
  );
}
