"use client";
import React from "react";

const Hobbies = () => {
  const hobbies = [
    { id: 1, name: "Travelling", icon: "🌍" },
    { id: 2, name: "Listening Music", icon: "🎵" },
    { id: 3, name: "Watching Movies", icon: "🎥" },
    { id: 4, name: "Photography", icon: "📸" },
  ];

  return (
    <section id="hobbies" className="min-h-fit py-12">
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Hobbies
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg transform transition-transform hover:scale-105"
            >
              <span className="text-5xl mb-4">{hobby.icon}</span>
              <h3 className="text-xl font-semibold text-gray-700">
                {hobby.name}
              </h3>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Hobbies;
