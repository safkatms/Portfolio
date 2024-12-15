import React from "react";

const Skills = () => {
  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="min-h-fit py-12">
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* Programming Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">Programming Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
            {/* C */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                alt="C"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">C</p>
            </div>
            {/* C++ */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">C++</p>
            </div>
            {/* Java */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">Java</p>
            </div>
            {/* C# */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                alt="C#"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">C#</p>
            </div>
            {/* PHP */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                alt="PHP"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">PHP</p>
            </div>
            {/* JavaScript */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">JavaScript</p>
            </div>
            {/* TypeScript */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">TypeScript</p>
            </div>
            {/* Python */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">Python</p>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">Frameworks</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
            {/* .NET */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnet/dotnet-original.svg"
                alt=".NET"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">.NET</p>
            </div>
            {/* NestJS */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
                alt="NestJS"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">NestJS</p>
            </div>
            {/* Next.js */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">Next.js</p>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">Databases</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
            {/* Oracle */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
                alt="Oracle"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">Oracle</p>
            </div>
            {/* Microsoft SQL Server */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mssql/mssql-original.svg"
                alt="Microsoft SQL Server"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">SQL Server</p>
            </div>
            {/* MySQL */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">MySQL</p>
            </div>
            {/* PostgreSQL */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">PostgreSQL</p>
            </div>
          </div>
        </div>

        {/* Other Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">Other Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
            {/* HTML */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">HTML5</p>
            </div>
            {/* CSS */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">CSS3</p>
            </div>
            {/* Tailwind CSS */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                alt="Tailwind CSS"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">Tailwind CSS</p>
            </div>
            {/* Bootstrap */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">Bootstrap</p>
            </div>
            {/* React */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">React</p>
            </div>
            {/* Node.js */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">Node.js</p>
            </div>
            {/* Figma */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                alt="Figma"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">Figma</p>
            </div>
            {/* Git */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">Git</p>
            </div>
            {/* Postman */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                alt="Postman"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">Postman</p>
            </div>
            {/* Swagger */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg"
                alt="Swagger"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">Swagger</p>
            </div>
            {/* MS Office (Word, Excel, PowerPoint) */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/office/office-original.svg"
                alt="MS Office"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">MS Office</p>
            </div>
            {/* AutoCAD */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/autocad/autocad-original.svg"
                alt="AutoCAD"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">AutoCAD</p>
            </div>
            {/* JWT */}
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg"
                alt="JWT"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-600 font-semibold">JWT</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
