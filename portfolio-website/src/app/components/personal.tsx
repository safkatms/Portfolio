'use client'
import React from 'react'

const Personal = () => {
    const personalInfo = [
        { label: "Full Name", value: "Safkat Mahmud Sakib" },
        { label: "Father’s Name", value: "A. S. M. Saifullah" },
        { label: "Mother’s Name", value: "Zakia Parvin" },
        { label: "Date of Birth", value: "December 31, 2001" },
        { label: "Present Address", value: "62/5/A, Kalachadpur, Dhaka" },
        {
          label: "Permanent Address",
          value: "Village +Post - Lamna, Thana - Galachipa, District - Patuakhali",
        },
        { label: "Marital Status", value: "Single" },
        { label: "Religion", value: "Islam" },
        { label: "Blood Group", value: "AB+" },
      ];
    
      return (
        <section id="personal" className="min-h-fit py-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Personal Information
              </span>
            </h2>
            <div className="shadow-md rounded-lg p-6">
              <ul className="divide-y divide-gray-200">
                {personalInfo.map((info, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center py-3 text-gray-700"
                  >
                    <span className="font-semibold">{info.label}:</span>
                    <span>{info.value}</span>
                  </li>
                ))}
              </ul>
            </div>
        </section>
      );
}

export default Personal
