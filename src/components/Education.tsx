import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import uvaLogo from '../assets/images/uva-logo.svg';
import codamLogo from '../assets/images/codam-logo.png';
import uuLogo from '../assets/images/uu-logo.png';
import ucuLogo from '../assets/images/ucu-logo.png';

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
        <img
          src={edu.logo}
          alt={edu.institution}
          className={`${
            edu.institution === 'Codam Coding College' || edu.institution === 'University of Utrecht'
              ? 'w-[80%] h-[80%]'
              : 'w-[60%] h-[60%]'
          } object-contain`}
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
      period: "2024 – 2025",
      logo: uvaLogo
    },
    {
      degree: "Core Program",
      institution: "Codam Coding College",
      period: "2022 – 2024",
      logo: codamLogo
    },
    {
      degree: "Master's in Artificial Intelligence (Pre-Master's included)",
      institution: "University of Utrecht",
      period: "2021 – 2022",
      logo: uuLogo
    },
    {
      degree: "Bachelor's in Liberal Arts and Sciences",
      institution: "University College Utrecht",
      period: "2018 – 2021",
      major: "Major: Economics & Chemistry",
      logo: ucuLogo
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="py-10">
          <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
        </div>
        
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