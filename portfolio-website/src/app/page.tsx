import Header from "./components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-3 h-screen flex flex-col md:flex-row">
        {/* Left section for the photo */}
        <div className="w-full md:w-1/2 h-full p-4 flex items-center justify-center">
          <Image
            src="/Profile.jpg"
            alt="Profile"
            width={320}
            height={320}
            className="w-80 h-80 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-full object-cover ring-4 ring-offset-2 ring-blue-500"
          />
        </div>

        {/* Right section for the content */}
        <div className="w-full md:w-1/2 h-full bg-white p-8 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 animate__animated animate__fadeIn">
            Hi, I&apos;m Safkat Mahmud Sakib
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 italic animate__animated animate__fadeIn animate__delay-1s">
            A Full Stack Developer
          </p>
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
        </div>
      </div>
    </>
  );
}
