import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          Web Developer with  2+ Years of Experiance,
          Masters in Information Science, and Computer science graduate who discovered his passion for coding and Building Web App's.
          With AI on the rise, I took the opportunity to self-learn and enrolled in various programming and AI courses.
          Through self-directed study, I've developed my skills and earned my knowledge.
          I've gained valuable experience in the IT sector. Now, 
          I'm focused on building a career as a AI Web developer and working towards making my dream a reality.
          </p>

          <p className="about-grid-info-text">
            Self-learning became my power. And everything I know today is
            self-earned
          </p>

          <p className="about-grid-info-text">
            Recently completed my Masters in 2025 and under-graduate education in 2021 and have gained valuable experience
            in IT Sector for almost 2 years. Now I aim to establish myself as a full Stack developer.
            and I am on my way to make my dream come true!
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">C</li>
            <li className="about-grid-info-list-item">C++</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">MERN Stack</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">React Native</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/dp.jpeg" alt="photo" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
