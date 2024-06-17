"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Experience() {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      sTitle: "SYSTEM'S ENGINEER",
      Cname: "INFOSYS LIMITED.",
      role: "SYSTEM'S ENGINEER",
      start: "MARCH 2022",
      end: "AUGEST 2023",
      url: "",
      shortDescription: [
        "Contributed to Developing web-based inventory management system, following Agile principles for iterative development and frequent feedback from Team, the Web-App was Designed using JavaScript and by integrating ReactJS we Boosted project efficiency.",
       "Collaborated with cross-functional teams to gather requirements, design system architecture, implement features, and conduct comprehensive testing." ,"Resolved complex technical challenges and optimized codebase for performance, scalability, and maintainability.","Provided technical assistance to users experiencing issues with software as Support Associate."],
    },
    {
      sTitle: "Internship",
      Cname: "Deepcoin Financial Services",
      role: "Intern Business Development Associate",
      start: "Oct 2021",
      url: "",
      end: "FEB 2022",
      shortDescription: [

        "Generated 100+ leads for new business opportunities by leveraging social media, networking with industry professionals, and attending trade shows.",
        "Collaborated with marketing teams to develop and implement business strategies, design and produce promotional materials, and execute marketing campaigns to promote the company.",
        "Increased website traffic by 20% by developing and executing SEO and PPC campaigns.",
        "Boosted social media engagement by 30% by creating and sharing engaging content.",
      ],
    },
    
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve worked</h2>
        <div className="container">
          <ul className="exp-slider">
            <div className="underline"></div>
            {experiences.map((experience, index) => {
              return (
                <li
                  key={index}
                  className={`exp-slider-item ${
                    index === selected && "exp-slider-item-selected"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  <span>{experience.sTitle}</span>
                </li>
              );
            })}
          </ul>
          <div className="exp-details">
            <div className="exp-details-position">
              <h3>
                <span>{experiences[selected].role}</span>
                <span className="exp-details-position-company">
                  <br />
                  <Link
                    className="link"
                    style={{
                      textDecoration: "none",
                      color: "var(--theme-color)",
                    }}
                    href={experiences[selected].url}
                  >
                    {experiences[selected].Cname}
                  </Link>
                </span>
              </h3>
              <p className="exp-details-range">
                {experiences[selected].start} - {experiences[selected].end}
              </p>
              <ul className="exp-details-list">
                {experiences[selected].shortDescription.map(
                  (description, index) => (
                    <li key={index} className="exp-details-list-item">
                      {description}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
