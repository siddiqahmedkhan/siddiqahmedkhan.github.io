import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLink, FiLinkedin, FiTwitter } from "react-icons/fi";

function SocialIcons() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/SIDDIQAHMEDKHAN",
    },
    {
      name: "Others",
      icon: <FiLink />,
      link: "https://linktr.ee/ItzSid",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/siddiq-ahmed-khan-8ab8b1208/",
    },
   
  ];

  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
