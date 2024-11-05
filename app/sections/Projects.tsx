"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [


     {
      image: "/pic 4.png",
      projectName: "Health check-up marketing campaign for government hospital.",
      projectLink: "https://www.canva.com/design/DAGVjPVtPJ0/EOLmaMSOsEDNMnl8GYMcLg/view",
      projectDescription:
        "Developed Marketing Campaign for government hospital which was conducting free health check-up's. using canva,InDesign, Illustrator and Photoshop, HTML,CSS.",
      projectTech: ["Photoshop", "HTML/CSS", "Canva"],
      projectExternalLinks: {
        github: "https://campaignbysid.my.canva.site/",
        externalLink: "",
      },
    
    {
      image: "/mlcloud.png",
      projectName: "Contact Management System",
      projectLink: "https://github.com/SIDDIQAHMEDKHAN/cms-system",
      projectDescription:
        "Programmed a full-stack contact management system (CMS) using MERN stack (MongoDB, Express.js, ReactJs, and NodeJs).Implemented core CRUD functionalities for effective contact management and integrated robust authorization  system utilizing authentication Tokens to Safeguard user Data.",
      projectTech: ["Python", "Machine Learning"],
      projectExternalLinks: {
        github: "https://github.com/SIDDIQAHMEDKHAN/cms-system",
        externalLink: "",
      },
    },
    {
      image: "/storageprovider2.png",
      projectName: "File Storage System",
      projectLink: "https://github.com/SIDDIQAHMEDKHAN/python-FSS",
      projectDescription:
        "This is one of the most secured file storage system with Hybride Cryptography built solely using Python. This uses 3 unique encryption techniques, namely Blowfish, DES and RSA, which uses 3 unique private keys for encryption. ",
      projectTech: ["Python", "Blowfish Algo", "DES Algo", "RSA Algo"],
      projectExternalLinks: {
        github: "https://github.com/SIDDIQAHMEDKHAN/python-FSS",
        externalLink: "",
      },
    },
    
   

  ];
  return (
    <div className="projects" id="projects">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    {/* <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
