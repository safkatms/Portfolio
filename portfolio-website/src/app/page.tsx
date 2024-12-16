import Header from "./components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 py-3 h-screen flex flex-col md:flex-row">
        {/* Left section for the photo */}
        <div className="w-full md:w-1/2 h-full p-4 flex items-center justify-center">
          <Image
            src="/Profile.jpg"
            alt="Profile"
            width={720}
            height={720}
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover ring-8 ring-offset-4 ring-blue-500 shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right section for the content */}
        <div className="w-full md:w-1/2 h-full bg-gradient-to-r from-gray-50 via-white to-gray-100 p-10 flex flex-col items-center justify-center rounded-lg shadow-2xl relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl opacity-50"></div>

          {/* Content */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Safkat Mahmud Sakib
            </span>
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-teal-500 mb-4 text-center">
            — Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 text-center leading-relaxed italic">
            Crafting scalable and efficient web applications with{" "}
            <span className="font-bold text-gray-800">Next.js</span>,{" "}
            <span className="font-bold text-gray-800">NestJS</span>, and{" "}
            <span className="font-bold text-gray-800">ASP.NET</span>.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download
              className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 px-8 rounded-full text-lg md:text-xl hover:from-pink-500 hover:to-orange-500 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl flex items-center space-x-2"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="ml-2"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path
                    fill="currentColor"
                    fillOpacity={0}
                    strokeDasharray={20}
                    strokeDashoffset={20}
                    d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
                  >
                    <animate
                      attributeName="d"
                      begin="0.5s"
                      dur="1.5s"
                      repeatCount="indefinite"
                      values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
                    ></animate>
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="0.7s"
                      dur="0.5s"
                      values="0;1"
                    ></animate>
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.4s"
                      values="20;0"
                    ></animate>
                  </path>
                  <path strokeDasharray={14} strokeDashoffset={14} d="M6 19h12">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.5s"
                      dur="0.2s"
                      values="14;0"
                    ></animate>
                  </path>
                </g>
              </svg>
            </a>

            {/* View Projects Button */}
            <a
              href="/projects"
              className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white py-3 px-8 rounded-full text-lg md:text-xl hover:from-green-400 hover:to-yellow-500 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl flex items-center space-x-3 group"
            >
              <span>View Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
              >
                <path
                  d="M10 6L16 12L10 18"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                ></path>
              </svg>
            </a>
          </div>
          {/* Social Media Links Section */}
          <div className="mt-8 flex justify-center space-x-6">
            {/* Facebook */}
            <a
              href="https://facebook.com/safkatmahmudsakib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                >
                  <path
                    strokeDasharray={24}
                    strokeDashoffset={24}
                    d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.4s"
                      values="24;0"
                    ></animate>
                  </path>
                  <path strokeDasharray={8} strokeDashoffset={8} d="M8 12h7">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.5s"
                      dur="0.2s"
                      values="8;0"
                    ></animate>
                  </path>
                </g>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/safkatms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <circle cx={4} cy={4} r={2} fill="currentColor" fillOpacity={0}>
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.15s"
                    values="0;1"
                  ></animate>
                </circle>
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                >
                  <path strokeDasharray={12} strokeDashoffset={12} d="M4 10v10">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.15s"
                      dur="0.2s"
                      values="12;0"
                    ></animate>
                  </path>
                  <path
                    strokeDasharray={12}
                    strokeDashoffset={12}
                    d="M10 10v10"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.45s"
                      dur="0.2s"
                      values="12;0"
                    ></animate>
                  </path>
                  <path
                    strokeDasharray={24}
                    strokeDashoffset={24}
                    d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.65s"
                      dur="0.2s"
                      values="24;0"
                    ></animate>
                  </path>
                </g>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/safkatms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path
                    strokeDasharray={32}
                    strokeDashoffset={32}
                    d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.7s"
                      values="32;0"
                    ></animate>
                  </path>
                  <path
                    strokeDasharray={10}
                    strokeDashoffset={10}
                    d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.8s"
                      dur="0.2s"
                      values="10;0"
                    ></animate>
                  </path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
