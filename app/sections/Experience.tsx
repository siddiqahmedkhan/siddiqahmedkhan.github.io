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
      sTitle: "KC DSNR",
      Cname: "KC Overseas Education Pvt. Ltd., Dilsukhnagar Branch",
      role: "IT Consultant",
      start: "Oct 2021",
      end: "June 2023",
      url: "https://www.linkedin.com/in/krishna-consultancy-dsnr/",
      shortDescription: [
        "I have provided various IT Services to the company",
        "Managed company's MySQL Database and server, provided maintenance and security to the DB and server using Cisco ASA and Open SSL",
        "Developed, deployed, managed and maintained company's CRM",
        "Developed & deployed company's web application",
      ],
    },
    {
      sTitle: "Internship",
      Cname: "HouseItt & WeSettle",
      role: "Intern Business Development Associate",
      start: "Oct 2020",
      url: "https://drive.google.com/file/d/17H1Us5Oarmt4knzVbi2XqdtJcHwrsouA/view",
      end: "November 2020",
      shortDescription: [
        "Helped 100+ students in acquiring PGs and Rental rooms during the pandemic",
        "Collaborated with the marketing teams n developing business strategies",
        "Designed posters and campaign for the company",
      ],
    },
    {
      sTitle: "Internship",
      Cname: "Internshala",
      role: "Intern Campus Ambassador",
      start: "July 2020",
      url: "https://drive.google.com/file/d/1C1_MUqiRaFUyZZTw_s6dES6OoLMLxM-v/view",
      end: "September 2021",
      shortDescription: [
        "I represented my college at Techfest by IIT Bombay",
        "Contributed to 10+ projects",
        "I also organised 6 seminars on emerging technologies and cybersecurity at my college",
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
