"use client";
import React from "react";

const projects = [
  {
    id: 1,
    title: "All-In-One Business Solution",
    description:
      "A multi-tenant SaaS ERP web application with authentication, payroll, inventory, finance, and more. Backend: NestJS, Frontend: Next.js.",
    techStack: ["NestJS", "Next.js", "PostgreSQL", "TypeORM"],
    link: "https://github.com/safkatms/All-in-OneBusinessSolution",
  },
  {
    id: 2,
    title: "NestCart",
    description:
      "A microservice-based e-commerce website for seamless shopping experiences. Backend: NestJS, Frontend: Next.js.",
    techStack: ["NestJS", "Next.js", "Microservices"],
    link: "https://github.com/safkatms/NestCart",
  },
  {
    id: 3,
    title: "Dealora",
    description:
      "A B2C e-commerce platform for online shopping with ASP.NET MVC.",
    techStack: ["ASP.NET MVC", "SQL Server"],
    link: "https://github.com/safkatms/Dealora",
  },
  {
    id: 4,
    title: "StayDriveGo",
    description:
      "An online hotel booking website with dynamic features using PHP, JS, AJAX, and more.",
    techStack: ["PHP", "JavaScript", "AJAX", "jQuery", "HTML", "CSS"],
    link: "https://github.com/safkatms/StayDriveGo",
  },
  {
    id: 5,
    title: "EasyTrip",
    description:
      "Bus and air ticket booking system, built as a desktop app using .NET Windows Forms.",
    techStack: [".NET Windows Forms", "C#"],
    link: "https://github.com/safkatms/EasyTrip",
  },
  {
    id: 6,
    title: "Air Ticket Booking System",
    description: "Console-based Java application for booking air tickets.",
    techStack: ["Java"],
    link: "https://github.com/safkatms/AirlineTicketReservationSystem",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "This portfolio, developed using Next.js and Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS"],
    link: "https://github.com/safkatms/Portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white relative rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Background gradients */}
              <div className="absolute top-0 left-0 w-16 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl opacity-50"></div>

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-pink-600 text-white py-1 px-3 rounded-full text-sm shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-medium rounded hover:from-green-400 hover:to-yellow-500 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
