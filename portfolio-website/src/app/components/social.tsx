import React from "react";

const Social = () => {
  return (
    <div className="flex flex-col space-y-4 fixed top-1/2 left-4 bg-transparent z-10">
      {/* Social Media Links */}
      <a
        href="https://facebook.com/safkatmahmudsakib"
        target="_blank"
        rel="noopener noreferrer"
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
  );
};

export default Social;
