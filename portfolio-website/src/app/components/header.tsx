"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for saved theme on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save the theme preference
  };

  return (
    <header className="text-white sticky h-20 top-0 z-50 shadow-md font-sans">
      <div className="container mx-auto px-4 py-3 h-full flex justify-between items-center">
        {/* Logo Section */}
        <div className="w-16 h-16">
          <Link href="/" className="hover:text-blue-400">
            <Image
              src="/logo.jpg"
              alt="Profile"
              width={80}
              height={80}
              quality={100}
              className="rounded-full object-contain ring ring-blue-500"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}
        >
          <Link href="/" className="block py-2 md:py-0 hover:text-blue-400">
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 md:py-0 hover:text-blue-400"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block py-2 md:py-0 hover:text-blue-400"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block py-2 md:py-0 hover:text-blue-400"
          >
            Contact
          </Link>
        </nav>

        <div className="flex flex-col space-y-4 fixed top-1/2 left-4 bg-transparent">
          {/* Social Media Links */}
          <a
            href="https://facebook.com/safkatmahmudsakib"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
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
          <a
            href="https://linkedin.com/in/safkatms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
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
                <path strokeDasharray={12} strokeDashoffset={12} d="M10 10v10">
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
          <a
            href="https://github.com/safkatms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
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

        {/* Theme Toggle with Icons */}
        <button onClick={toggleTheme} className=" text-white rounded-md">
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"
              ></path>
            </svg>
          ) : (
            <svg
              className="text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21"
              ></path>
            </svg>
          )}
        </button>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={isDarkMode ? "h-6 w-6" : "h-6 w-6 text-blue-500"}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
