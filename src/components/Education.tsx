import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationCard = ({ edu }: { edu: any }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1e3a8a",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #1e3a8a" }}
    date={edu.period}
    iconStyle={{ background: "#ea580c" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {/* You can add institution logos here if available */}
        <img
          src="/education-icon.png"  // Add a default education icon
          alt={edu.institution}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{edu.degree}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {edu.institution}
      </p>
    </div>
    {edu.major && (
      <div className="mt-5">
        <p className="text-white-100 text-[14px] tracking-wider">{edu.major}</p>
      </div>
    )}
  </VerticalTimelineElement>
);

const Education = () => {
  const education = [
    {
      degree: "Master's in Data Science",
      institution: "University of Amsterdam",
      period: "2024 – 2025"
    },
    {
      degree: "Core Program",
      institution: "Codam Coding College",
      period: "2022 – 2024"
    },
    {
      degree: "Master's in Artificial Intelligence (Pre-Master's included)",
      institution: "University of Utrecht",
      period: "2021 – 2022"
    },
    {
      degree: "Bachelor's in Liberal Arts and Sciences",
      institution: "University College Utrecht",
      period: "2018 – 2021",
      major: "Major: Economics & Chemistry"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-orange-500">Education</h2>
        
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education; 