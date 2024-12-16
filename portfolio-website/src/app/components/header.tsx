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
    <header className="sticky h-20 top-0 z-50 shadow-md font-sans">
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
          } md:flex md:space-x-6 text-md absolute md:static top-20 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}
        >
          <Link href="/" className="block py-2 md:py-0">
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 md:py-0"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block py-2 md:py-0"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block py-2 md:py-0"
          >
            Contact
          </Link>
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
        </nav>

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
